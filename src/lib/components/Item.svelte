<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import type ItemModel from '$models/ItemModel';
    import DetailButton from '$components/DetailButton.svelte';
    import deleteIcon from '$assets/icons/delete-icon.svg';
    import editIcon from '$assets/icons/edit-icon.svg';

    export let item: ItemModel;

    let checked = false;

    const dispatch = createEventDispatcher<{ edit: ItemModel; delete: ItemModel }>();

    function onEdit() {
        dispatch('edit', item);
    }

    function onDelete() {
        dispatch('delete', item);
    }
</script>

<div class="item">
    <div class="content">
        <input class="checkbox detail" type="checkbox" bind:checked />

        <div class="item-info">
            <span class="title">{item.title}</span>
            <span class="timestamp">{item.timestamp.toLocaleString()}</span>
        </div>

        <DetailButton icon={editIcon} on:click={onEdit} --hover-color="#70a1ff" />

        <DetailButton icon={deleteIcon} on:click={onDelete} --hover-color="#ff4757" />
    </div>
</div>

<style>
    .item {
        background-color: #fff;
        padding: 1.5em 2em;
        border-radius: 1em;
    }

    .item .content {
        display: flex;
        align-items: center;
        gap: 1em;
    }

    .item-info {
        flex-grow: 2;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        row-gap: 0.5em;
    }

    .item-info .title {
        font-size: 1.8em;
    }

    .item-info .timestamp {
        font-size: 1.5em;
    }

    input[type='checkbox'] {
        min-width: 2em;
        min-height: 2em;
        max-width: 2em;
        max-height: 2em;

        /* appearance: none; */
        border: none;
        background-color: #a4b0be;
        display: grid;
        place-content: center;
    }

    input[type='checkbox']::before {
        content: '';
        width: 0.65em;
        height: 0.65em;
        transform: scale(0);
        transition: 120ms transform ease-in-out;
        box-shadow: inset 1em 1em var(--form-control-color);
    }

    input[type='checkbox']:checked::before {
        transform: scale(1);
    }
</style>
