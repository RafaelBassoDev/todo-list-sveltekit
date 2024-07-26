<script lang="ts">
    import { items } from '$stores/stores';
    import ItemList from '$components/ItemList.svelte';
    import ItemModel from '$models/ItemModel';

    function onDelete(e: CustomEvent<ItemModel>) {
        items.removeItem(e.detail);
    }

    function onCheck(e: CustomEvent<ItemModel>) {
        items.checkItem(e.detail);
    }

    function handleAddItem() {
        items.addItem(new ItemModel('', new Date()));
    }
</script>

<div class="content">
    <div class="header">
        <h1>TO-DO LIST 📋</h1>
        <button on:click={handleAddItem}>Add Item</button>
    </div>
    <ItemList items={$items} on:delete={onDelete} on:check={onCheck} />
</div>

<style>
    :global(body) {
        margin: 0;
        padding: 0;
        border: none;
        background: white;
    }

    :global(:root) {
        --background-primary: #1e90ff;

        --item-separator-color: #ccc;

        --font-color-primary: #2f3542;
        --font-color-secondary: #747d8c;

        --button-background-primary: transparent;
        --button-hover-background: #2f3542;
        --button-hover-filter: invert(100%) sepia(12%) saturate(7464%) hue-rotate(289deg)
            brightness(113%) contrast(117%);

        --edit-button-tint: #1e90ff;
        --delete-button-tint: #ff4757;

        --caret-color: #1e90ff;

        font-size: 62.5%;
        margin: 0;
        padding: 0;
        border: none;

        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        color: var(--font-color-primary);
    }

    .content {
        display: flex;
        flex-direction: column;
        gap: 1em;
        padding: 1em;
    }

    .header {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        margin-bottom: 1em;
    }

    .header h1 {
        text-align: center;
        font-size: 4em;
        margin: 0.5em;
    }

    .header button {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;

        color: white;
        background-color: #1e90ff;

        border: transparent;

        padding: 1em;
        border-radius: 0.4em;
        font-size: 1.5em;
    }
</style>
