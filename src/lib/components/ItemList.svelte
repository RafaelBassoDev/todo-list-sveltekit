<script lang="ts">
    import Item from '$components/Item.svelte';
    import ItemModel from '$models/ItemModel';

    export let items: ItemModel[];
</script>

<div class="container">
    {#if items != null && items.length != 0}
        <div class="items">
            {#each items as item}
                <Item {item} on:delete on:check />
            {/each}
        </div>
    {:else}
        <div class="warning"><span>No items!</span></div>
    {/if}
</div>

<style>
    .items {
        display: flex;
        flex-direction: column;
        border-bottom: 0.2em solid var(--item-separator-color);
    }

    .warning {
        display: flex;
        justify-content: center;
        padding: 1em;
    }

    .warning span {
        font-size: 2em;
    }
</style>
