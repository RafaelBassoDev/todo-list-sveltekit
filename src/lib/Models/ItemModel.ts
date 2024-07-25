export default class ItemModel {
    id: number;
    title: string;
    timestamp: Date;
    isChecked: boolean;

    constructor(id: number, title: string, timestamp: Date, isChecked: boolean = false) {
        this.id = id;
        this.title = title;
        this.timestamp = timestamp;
        this.isChecked = isChecked;
    }
}
