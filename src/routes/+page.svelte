<script lang="ts">
    import { items } from '$stores/stores';
    import ItemList from '$components/ItemList.svelte';
    import ItemModel from '$models/ItemModel';

    function onDelete(e: CustomEvent<ItemModel>) {
        console.log('delete ' + e.detail.id);
        $items = $items.filter((item) => item.id != e.detail.id);
    }

    function onCheck(e: CustomEvent<ItemModel>) {
        let itemIndex = $items.findIndex((model) => model.id == e.detail.id);
        $items[itemIndex].isChecked = !e.detail.isChecked;
    }
</script>

<div class="content">
    <div class="header"></div>
    <ItemList bind:items={$items} on:delete={onDelete} on:check={onCheck} />
</div>

<style>
    :global(body) {
        margin: 0;
        padding: 0;
        border: none;
    }
    :global(:root) {
        --font-color-primary: #2f3542;
        --font-color-secondary: #747d8c;

        font-size: 62.5%;
        margin: 0;
        padding: 0;
        border: none;

        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        color: var(--font-color-primary);
    }
</style>
