import express, { json, urlencoded } from 'express';
import { NlpProvider } from './infrastructure/NlpProvider.js';
import { SheetsProvider } from './infrastructure/SheetsProvider.js';
import { HuggingFaceProvider } from './infrastructure/HuggingFaceProvider.js';
import { GetChatResponse } from './use-cases/GetChatResponse.js';
import { createChatRouter } from './routes/chatRouter.js';

export async function createApp() {
    const app = express();

    app.use(json());
    app.use(urlencoded({ extended: true }));
    app.use(express.static('public'));

    // CORS
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        next();
    });

    // Configuration
    const SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTbhqqs72BjGgfvZM16JDPT7Bb5u7sSVM_yiMxIE05D_2xcnieulWBt7_OAn1L36I6hKSwubUU9jXKC/pub?gid=2127432507&single=true&output=csv';
    const HF_API_KEY = process.env.HF_API;

    // Initialize Providers
    const nlpProvider = new NlpProvider();
    const sheetsProvider = new SheetsProvider(SHEET_CSV_URL);
    const hfProvider = new HuggingFaceProvider(HF_API_KEY);

    // Load Data and Train
    const sheetData = await sheetsProvider.loadData();
    await nlpProvider.addTrainingData(sheetData);
    await nlpProvider.train();

    // Initialize Use Case
    const getChatResponse = new GetChatResponse(nlpProvider, hfProvider);

    // Routes
    app.use('/api/chatbot', createChatRouter(getChatResponse));

    // Health check
    app.get('/', (_, res) => {
        res.send('Chatbot API running with Clean Architecture');
    });

    return app;
}
