import ItemModel from '$lib/models/ItemModel';
import { writable } from 'svelte/store';

const date = new Date();

// eslint-disable-next-line prefer-const
let itemsArray: ItemModel[] = [
    new ItemModel(
        1,
        'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
        date
    ),
    new ItemModel(2, '2 Lorem ipsum dolor sit amet.', date),
    new ItemModel(3, '3 Lorem ipsum dolor sit amet.', date),
    new ItemModel(4, '4 Lorem ipsum dolor sit amet.', date)
];

const items = writable(itemsArray);

export { items };
