<script lang="ts">
    import { items } from '$stores/stores';
    import ItemList from '$components/ItemList.svelte';
    import ItemModel from '$models/ItemModel';

    function onEdit(e: CustomEvent) {
        console.log('edit');
    }

    function onDelete(e: CustomEvent<ItemModel>) {
        console.log('delete ' + e.detail.id);
        $items = $items.filter((item) => item.id != e.detail.id);
    }

    function onCheck(e: CustomEvent<ItemModel>) {
        let itemIndex = $items.findIndex((model) => model.id == e.detail.id);
        $items[itemIndex].isChecked = !e.detail.isChecked;
    }
</script>

<ItemList bind:items={$items} on:delete={onDelete} on:edit={onEdit} on:check={onCheck} />

<style>
    :global(body) {
        margin: 0;
        padding: 0;
        border: none;
    }
    :global(:root) {
        font-size: 62.5%;
        margin: 0;
        padding: 0;
        border: none;

        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        color: #2f3542;
    }
</style>
