import { NlpManager } from 'node-nlp';

export class NlpProvider {
    constructor() {
        this.manager = new NlpManager({ languages: ['en'], forceNER: true });
    }

    async addTrainingData(rows) {
        rows.forEach(row => {
            if (row.Intent && row['Question / Phrase']) {
                this.manager.addDocument('en', row['Question / Phrase'], row.Intent);
            }
            if (row.Intent && row.Answer) {
                this.manager.addAnswer('en', row.Intent, row.Answer);
            }
        });
    }

    async train() {
        await this.manager.train();
        this.manager.save();
        console.log('NLP trained');
    }

    async process(message) {
        return await this.manager.process('en', message);
    }
}
