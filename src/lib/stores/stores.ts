import { writable } from 'svelte/store';
import ItemModel from '$models/ItemModel';

const date = new Date();

const itemsArray: ItemModel[] = [
    new ItemModel('0 Lorem ipsum dolor sit amet.', date, false),
    new ItemModel('1 Lorem ipsum dolor sit amet.', date, true),
    new ItemModel('2 Lorem ipsum dolor sit amet.', date),
    new ItemModel('3 Lorem ipsum dolor sit amet.', date, true),
    new ItemModel('4 Lorem ipsum dolor sit amet.', date)
];

function createItemStore(items: ItemModel[] = []) {
    const { subscribe, update } = writable(items);

    return {
        subscribe,
        addItem: (item: ItemModel) =>
            update((items) => [
                new ItemModel(item.title, item.timestamp, item.isChecked),
                ...items
            ]),

        removeItem: (item: ItemModel) =>
            update((itemList: ItemModel[]) => itemList.filter((current) => current.id !== item.id)),

        checkItem: (item: ItemModel) =>
            update((itemList) =>
                itemList.map((element) => {
                    if (element.id === item.id) {
                        element.isChecked = !element.isChecked;
                    }
                    return element;
                })
            )
    };
}

const itemStore = createItemStore(itemsArray);

export { itemStore as items };
