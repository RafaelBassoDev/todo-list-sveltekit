<script>
    export let icon;

    let hover = false;
</script>

<button
    on:click
    on:mouseenter={() => {
        hover = true;
    }}
    on:mouseleave={() => {
        hover = false;
    }}
>
    <img class:hover src={icon} alt="Icon" />
</button>

<style>
    button {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;

        background-color: var(--button-background-primary);
        border: transparent;
        padding: 0;
        border-radius: 0.5em;

        min-width: 3em;
        min-height: 3em;
        max-width: 3em;
        max-height: 3em;
    }

    button:hover {
        background-color: var(--hover-background, var(--button-hover-background));
        transition: 0.2s;
    }

    img {
        width: 70%;
    }

    .hover {
        filter: var(--button-hover-filter);
    }
</style>
