export default class ItemModel {
    title: string;
    timestamp: Date;

    constructor(title: string, timestamp: Date) {
        this.title = title;
        this.timestamp = timestamp;
    }
}
