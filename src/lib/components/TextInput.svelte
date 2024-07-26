<script lang="ts">
    import { tick } from 'svelte';

    export let text: string;
    export let isFocused: boolean;

    let htmlElement: HTMLInputElement;

    function handleKeyup(e: KeyboardEvent) {
        if (e.key == 'Enter') {
            handleFocusOut();
        }
    }

    async function handleFocusIn() {
        await tick();
        htmlElement.focus();
    }

    function handleFocusOut() {
        isFocused = false;
    }

    $: if (isFocused) {
        handleFocusIn();
    }
</script>

<input
    bind:this={htmlElement}
    bind:value={text}
    type="text"
    class="text-input"
    disabled={!isFocused}
    on:keyup={handleKeyup}
    on:focusout={handleFocusOut}
/>

<style>
    .text-input {
        font-size: 1.8em;
        box-sizing: border-box;
        display: block;
        width: 100%;
        border: none;
        background: transparent;
    }

    .text-input:focus {
        outline: transparent;
        caret-color: var(--caret-color);
    }

    .text-input:disabled {
        color: currentColor;
    }
</style>
