<script>
    import Card from "$lib/Components/Effects/Card/Card.svelte";
    import BlurOnHover from "$lib/Components/Effects/BlurOnHover/BlurOnHover.svelte";
    import { projects } from "$lib/Data/projects";
    import Marquee from "$lib/Components/Effects/Marquee/Marquee.svelte";
  import BlurFade from "$lib/Components/Effects/BlurFade/BlurFade.svelte";
    let firstRow = projects.slice(0,projects.length / 2);
    let secondRow = projects.slice(projects.length / 2);
    
</script>

<BlurFade>
    <div class = "p-5">
        <span class = "flex justify-center font-bold text-2xl m-5">
            Click cards for detailed explanation
        </span>
        <Marquee pauseOnHover class = "[--duration:20s]">
            {#each firstRow as project}
                    <Card {...project}/>
            {/each}
        </Marquee>
        <Marquee reverse pauseOnHover class = "[--duration:20s]">
            {#each secondRow as project}
                    <Card {...project}/>
            {/each}
        </Marquee>
    </div>
</BlurFade>

<style>
</style>