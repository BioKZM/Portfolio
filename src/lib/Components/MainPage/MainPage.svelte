<script>
    import Intro from "./Intro/Intro.svelte";
    import Showroom from "./Showroom/Showroom.svelte";
    import Whoami from "./whoami/whoami.svelte";
    import BlurFade from "../Effects/BlurFade/BlurFade.svelte";
</script>

<BlurFade delay = {0.2}>
    <Intro/>
</BlurFade>
<BlurFade delay = {0.2}>
    <Whoami/>
</BlurFade>
<BlurFade delay = {0.2}>
    <Showroom/>
</BlurFade>


<style>
   
</style>
