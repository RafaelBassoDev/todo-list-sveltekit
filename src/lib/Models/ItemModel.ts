export default class ItemModel {
    id: number;
    title: string;
    timestamp: Date;

    constructor(id: number, title: string, timestamp: Date) {
        this.id = id;
        this.title = title;
        this.timestamp = timestamp;
    }
}
