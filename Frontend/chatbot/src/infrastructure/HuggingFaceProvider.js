import fetch from 'node-fetch';

export class HuggingFaceProvider {
    constructor(apiKey, model = 'mistralai/Mistral-7B-Chat') {
        this.apiKey = apiKey;
        this.model = model;
    }

    async generateResponse(message) {
        const prompt = `
Conversation so far:
User: hi
Bot: Hello! How can I help you?
User: ${message}
Respond naturally like a human and ask one follow-up question.
`;

        try {
            const response = await fetch(
                `https://api-inference.huggingface.co/models/${this.model}`,
                {
                    method: 'POST',
                    headers: {
                        Authorization: `Bearer ${this.apiKey}`,
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        inputs: prompt,
                        parameters: { max_new_tokens: 150 },
                    }),
                }
            );

            const data = await response.json();
            return data?.generated_text || data?.[0]?.generated_text || 'Hello! How can I help you?';
        } catch (error) {
            console.error('HuggingFaceProvider Error:', error);
            return 'Hello! How can I help you?';
        }
    }
}
