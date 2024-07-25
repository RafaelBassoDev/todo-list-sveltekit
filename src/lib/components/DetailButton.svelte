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

        background-color: #f1f2f6;
        border: none;
        padding: 0;
        border-radius: 0.5em;

        min-width: 3em;
        min-height: 3em;
        max-width: 3em;
        max-height: 3em;
    }

    button:hover {
        background-color: var(--hover-color, #d7d8dd);
        transition: 0.2s;
    }

    img {
        width: 70%;
    }

    .hover {
        filter: invert(100%) sepia(12%) saturate(7464%) hue-rotate(289deg) brightness(113%)
            contrast(117%);
    }
</style>
