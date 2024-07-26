<script lang="ts">
    import { createEventDispatcher, tick } from 'svelte';
    import type ItemModel from '$models/ItemModel';
    import DetailButton from '$components/DetailButton.svelte';
    import deleteIcon from '$assets/icons/delete-icon.svg';
    import editIcon from '$assets/icons/edit-icon.svg';
    import TextInput from './TextInput.svelte';

    export let item: ItemModel;

    let isEditing = false;

    function onEdit() {
        isEditing = true;
    }

    $: checked = item.isChecked;

    const dispatch = createEventDispatcher<{
        delete: ItemModel;
        check: ItemModel;
    }>();

    function onDelete() {
        dispatch('delete', item);
    }

    function onCheck() {
        dispatch('check', item);
    }
</script>

{#if item}
    <div class="item">
        <div class="content">
            <input class="checkbox" type="checkbox" bind:checked on:change={onCheck} />

            <div class="item-info">
                <div class:checked>
                    <TextInput bind:text={item.title} bind:isFocused={isEditing} />
                </div>
                <span class="timestamp">{item.timestamp.toLocaleString()}</span>
            </div>

            <DetailButton
                icon={editIcon}
                on:click={onEdit}
                --hover-background="var(--edit-button-tint)"
            />
            <DetailButton
                icon={deleteIcon}
                on:click={onDelete}
                --hover-background="var(--delete-button-tint)"
            />
        </div>
    </div>
{/if}

<style>
    .item {
        padding: 1.5em 2em;
        border-top: 0.2em solid var(--item-separator-color);
    }

    .content {
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

    .timestamp {
        font-size: 1.5em;
        color: var(--font-color-secondary);
    }

    .checked {
        text-decoration: line-through;
        color: var(--font-color-secondary);
    }

    input[type='checkbox'] {
        min-width: 2em;
        min-height: 2em;
        max-width: 2em;
        max-height: 2em;
    }
</style>
