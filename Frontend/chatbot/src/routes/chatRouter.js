import express from 'express';

export function createChatRouter(getChatResponseUseCase) {
    const router = express.Router();

    router.post('/', async (req, res) => {
        try {
            const message = req.body.message?.trim();
            if (!message) {
                return res.status(400).json({ error: 'Message is required' });
            }

            const result = await getChatResponseUseCase.execute(message);
            res.json(result);
        } catch (err) {
            console.error('ChatRouter Error:', err);
            res.status(500).json({ error: err.message });
        }
    });

    return router;
}
