import { writable } from 'svelte/store';
import ItemModel from '$models/ItemModel';

function createItemStore(items: ItemModel[] = []) {
    const { subscribe, update, set } = writable(items);

    return {
        subscribe,
        addItem: (item: ItemModel) => {
            const newItem = new ItemModel(item.title, item.timestamp, item.isChecked);
            topmostItem = newItem;
            update((items) => [newItem, ...items]);
        },

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
            ),

        clearItems: () => set([])
    };
}

const itemStore = createItemStore();

let topmostItem: ItemModel | undefined = undefined;

export { itemStore as items, topmostItem };
