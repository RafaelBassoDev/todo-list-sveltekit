<script lang="ts">
    import Item from '$components/Item.svelte';
    import ItemModel from '$models/ItemModel';

    export let items: ItemModel[];
</script>

<div class="container">
    {#if items != null && items.length != 0}
        {#each items as item}
            <Item {item} on:delete on:check />
        {/each}
    {:else}
        <div class="warning">No items!</div>
    {/if}
</div>

<style>
    .container {
        border-radius: 1em;
        padding: 1em;
        background-color: #1e90ff;

        display: flex;
        flex-direction: column;
        gap: 1em;
    }

    .warning {
        display: flex;
        justify-content: center;

        color: white;
        font-size: 2em;
        padding: 1em;
    }
</style>
