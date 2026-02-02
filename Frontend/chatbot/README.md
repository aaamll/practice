# Chatbot - Clean Architecture Refactor

This project has been refactored following **Clean Architecture** principles to ensure separation of concerns, testability, and maintainability.

## 🏗️ Architecture Layers

### 1. **Domain Layer** (`src/domain/`)
- Contains enterprise-wide business rules and entities.
- **ChatResponse.js**: The core entity representing a chatbot reply.

### 2. **Application Layer** (`src/use-cases/`)
- Contains application-specific business logic.
- **GetChatResponse.js**: A use case that coordinates between NLP processing and AI response generation.

### 3. **Infrastructure Layer** (`src/infrastructure/`)
- Contains implementations for external tools and services.
- **NlpProvider.js**: Encapsulates `node-nlp` for intent recognition.
- **SheetsProvider.js**: Handles fetching training data from Google Sheets.
- **HuggingFaceProvider.js**: Manages API calls to Hugging Face models.

### 4. **Interface/Presentation Layer** (`src/routes/` & `public/`)
- **chatRouter.js**: Express routes that expose the use cases via HTTP.
- **public/**: The frontend UI (HTML/JS/CSS) separated from the backend logic.

## 🚀 How to Run

1. **Environment Variables**:
   Set `HF_API` in your environment with your Hugging Face API token.
   
2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Server**:
   ```bash
   node server.js
   ```

4. **Access the Chatbot**:
   Open `http://localhost:4000` in your browser.

## 📂 Project Structure
```text
chatbot/
├── public/                 # Frontend Assets
│   ├── index.html
│   ├── script.js
│   └── style.css
├── src/                    # Backend Source
│   ├── domain/             # Entities
│   ├── use-cases/          # Business Logic
│   ├── infrastructure/     # External Services
│   ├── routes/             # API Endpoints
│   └── app.js              # Wires everything together
├── server.js               # Entry Point
└── package.json
```
