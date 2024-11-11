<script lang="ts">
    import Link from "$lib/Components/About/Links.svelte";
    import {links} from "$lib/Data/links";
    import BlurFade from "$lib/Components/Effects/BlurFade/BlurFade.svelte";
    import ShimmerEffect from "$lib/Components/Effects/ShimmerEffect/ShimmerEffect.svelte";
    import BorderBeam from "$lib/Components/Effects/BorderBeam/BorderBeam.svelte";
    
    // import PulsatingButton from "$lib/Components/Effects/PulsatingButton/PulsatingButton.svelte";
    
    let halfIndex = Math.ceil(links.length/2);
    let links1 = links.slice(0,halfIndex);
    let links2 = links.slice(halfIndex);
    
</script> 
<BlurFade delay = {0.1}>


<div class = "main">
    <div class = "about">
        <span class = "title">
            About Me
        </span>
        <!-- display:flex;
        flex-direction:column;
        justify-content:center;
        align-items: center; -->
        <div class = "flex flex-col justify-center items-center">
            <span>
                I began my journey in <d class = "text-red-600">2014</d> with PHP but it was a short call.
            </span>
            <span>
                In <d class = "text-red-600">2019</d>, I programmed my first program with <d class = "bg-gradient-to-r from-blue-600 to-yellow-200 inline-block text-transparent bg-clip-text">Python</d>.
            </span>
            <span>
                And nowadays I have experience with multiple languages & frameworks.
            </span>
            <span>
                Here is a list of <d class = "text-red-600">all of them</d>.
            </span>
        </div>
        
        <div class = "langandfw">
            <div class = "logorow">
                {#each links1 as link,index}
                    <BlurFade delay = {0.07 * index}>
                        <Link href = {link.href} src = {link.src} alt = {link.alt}/>
                    </BlurFade>
                {/each}
            </div>
            <div class = "logorow">
                {#each links2 as link,index}
                    <BlurFade delay = {0.08 * index}>
                        <Link href = {link.href} src = {link.src} alt = {link.alt}/>
                    </BlurFade>
                {/each}
            </div>
        </div>
    </div>
    <div class = "projects">
        <span class = "info">
            Wanna know more about my knowledge?
        </span>
        <!-- <a href = "/projects" class = "projectButton">
            My Projects
        </a> -->
        
        <!-- <div class = "projectsButton"> -->
            <!-- <div class = "flex max-w-xl flex-col items-start justify-between relative rounded-3xl p-7 border border-gray-700/70 bg-background"> -->
                <!-- <BorderBeam size = {80} duration={12}/> -->
                <a href = "/projects" class = "projectsButton">
                    <!-- <BorderBeam size={80} duration={8} /> -->
                    <div class = "flex max-w-xl flex-col items-start justify-between relative rounded-xl p-2 border border-red-700 bg-background my-2">
                    <!-- <BorderBeam size = {30} duration={5}/> -->
                    <ShimmerEffect>
                            My Projects
                        </ShimmerEffect>
                    </div>
                </a>
            <!-- </div> -->
            <!-- <PulsatingButton pulseColor="#CC0000"> 
                My Projects
            </PulsatingButton> -->
        <!-- </div> -->
        
    </div>
</div>
</BlurFade>


<style>
    .main
    {
        margin:30px;
    }
    .about
    {
        width: 100%;
        height: 100%;
        /* margin:20px 0; */
        display:flex;
        justify-content: center;
        align-items: center;
        flex-direction:column;
    }
    .title
    {
        font-size:72px;
        font-weight: bold;
    }
    .langandfw
    {
        margin:40px;
        display:flex;
        flex-direction:column;
    }
    .logorow
    {
        display:flex;
        flex-direction:row;
        justify-content: center;
    }
    .projects
    {
        display:flex;
        flex-direction:column;
        justify-content: center;
        align-items: center;
        /* margin:20px; */
        /* padding:20px; */
    }
    .info
    {
        font-weight: bold;
    }
    .projectsButton
    {
        text-decoration: none;
        color:white;
        font-size:16px;
        /* border: 2px dashed white; */
        /* background-color: transparent; */
        /* padding:5px 10px; */
        margin:3px;
        font-weight:bold;
    }
    
</style>