<script lang="ts">
    import Item from '$lib/Item.svelte';
    import ItemModel from '$lib/models/ItemModel';

    let titles = ['item 1', 'item 2', 'item 3', 'item 4'];

    let date = new Date();

    let models: ItemModel[] = [
        new ItemModel(
            'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',
            date
        ),
        new ItemModel('Lorem ipsum dolor sit amet.', date),
        new ItemModel('Lorem ipsum dolor sit amet.', date),
        new ItemModel('Lorem ipsum dolor sit amet.', date)
    ];

    function onEdit() {
        console.log('edit');
    }
    function onDelete() {
        console.log('delete');
    }
</script>

<div class="container">
    {#each models as model}
        <Item {...model} on:edit={onEdit} on:delete={onDelete} />
    {/each}
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
    }

    .container {
        border-radius: 1em;
        padding: 1em;
        background-color: #ff6b81;

        display: flex;
        flex-direction: column;
        gap: 1em;
    }
</style>
