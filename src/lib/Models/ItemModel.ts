import { v4 as uuidv4 } from 'uuid';

export default class ItemModel {
    id: string;
    title: string;
    timestamp: Date;
    isChecked: boolean;

    constructor(title: string, timestamp: Date, isChecked: boolean = false) {
        this.id = uuidv4();
        this.title = title;
        this.timestamp = timestamp;
        this.isChecked = isChecked;
    }
}
