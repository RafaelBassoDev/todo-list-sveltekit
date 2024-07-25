<script>
    export let icon;
</script>

<button on:click>
    <img src={icon} alt="Icon" />
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
</style>
