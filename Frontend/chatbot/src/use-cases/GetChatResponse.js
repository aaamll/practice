import { ChatResponse } from '../domain/ChatResponse.js';

export class GetChatResponse {
    constructor(nlpProvider, hfProvider) {
        this.nlpProvider = nlpProvider;
        this.hfProvider = hfProvider;
    }

    async execute(message) {
        const nlpResult = await this.nlpProvider.process(message);
        const reply = await this.hfProvider.generateResponse(message);

        return new ChatResponse(reply, nlpResult.intent, nlpResult.score);
    }
}
