export class ChatResponse {
    constructor(reply, intent, score) {
        this.reply = reply;
        this.intent = intent;
        this.score = score;
    }
}
