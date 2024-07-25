<script lang="ts">
    import Item from '$lib/Item.svelte';
    import type ItemModel from '$lib/models/ItemModel';
    import { items } from '$lib/stores/stores';

    function onEdit(e: CustomEvent) {
        console.log('edit');
    }
    function onDelete(e: CustomEvent<ItemModel>) {
        console.log('delete ' + e.detail.id);
        $items = $items.filter((item) => item.id != e.detail.id);
    }
</script>

<div class="container">
    {#if $items.length != 0}
        {#each $items as item}
            <Item {item} on:edit={onEdit} on:delete={onDelete} />
        {/each}
    {:else}
        <div class="warning">No items!</div>
    {/if}
</div>

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

    .container {
        border-radius: 1em;
        padding: 1em;
        background-color: #ff6b81;

        display: flex;
        flex-direction: column;
        gap: 1em;
    }

    .warning {
        display: flex;
        justify-content: center;

        font-size: 2em;
        padding: 1em;
    }
</style>
