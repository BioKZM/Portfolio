<script>
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';

    export let redirectTo = '/'; // Yönlendirmek istediğimiz sayfanın URL'si
    let delay = 1000;     // Bekleme süresi (milisaniye cinsinden)

    onMount(() => {
        setTimeout(() => {
        goto(redirectTo); // Belirtilen URL'ye yönlendir
        }, delay);
    });
</script>

<div class = "loading">
    <div class = "spinner">

    </div>
    <span>
        Did you know: I am actually a good FPS player
    </span>    
</div>

<style>
    .loading
    {
        display:flex;
        flex-direction:column;
        align-items: center;
        justify-content:center;
    }
    .spinner 
    {
        width: 40px;
        height: 40px;
        border: 4px solid #ccc;
        border-top: 4px solid #333;
        border-radius: 50%;
        animation: spin 1s linear infinite;
    }

    @keyframes spin {
        from {
        transform: rotate(0deg);
        }
        to {
        transform: rotate(360deg);
        }
    }
</style>