<script lang="ts">
  import BlurFade from "../BlurFade/BlurFade.svelte";
import BlurOnHover from "../BlurOnHover/BlurOnHover.svelte";
import BorderBeam from "../BorderBeam/BorderBeam.svelte";

    let { title, desc, tags,platforms,creationDate,favorite=false} : {title:string; desc:string; tags:Array<string>;platforms:Array<{name:string;src:string}>;creationDate:string; favorite?:boolean;} = $props();
</script>



<div
  class="relative flex flex-col gap-4 w-full bg-transparent border border-white/10 max-w-md rounded-md p-5 overflow-hidden">
    <BlurOnHover>
        <!-- <BlurFade>
            
        </BlurFade> -->
        <div class = "flex flex-row justify-between">
            <div class="flex flex-col">
                <span class="text-md font-bold text-red-600 leading-none duration-300">
                    {title}
                </span>
                <span class="text-neutral-400 text-xs">
                    {creationDate}
                </span>
            </div>
            <div>
                <!-- <BorderBeam size = {120} duration = {8}/> -->
                {#if favorite}
                <div class = "bg-transparent border-2 border-gray-500 font-bold text-xs px-1 mx-3 py-1 flex items-center rounded-md">
                    <img src = "./favorite.png" alt = "star" class = "w-2.5 h-2.5 mx-1 flex align-middle">
                    <span class = "flex items-center">
                        Favorite
                    </span>
                </div>
                {/if}
            </div>
        </div>
      <!-- svelte-ignore element_invalid_self_closing_tag -->
      <div
        class="absolute right-5 top-0 h-px w-80 bg-gradient-to-l"
      />
      <p class="text-sm leading-[1.5] my-3 text-neutral-300">
        {desc}
      </p>
      <div class = "flex flex-row">
        <!-- {#each} -->
        
        {#each tags as tag}
            <span class = "bg-red-600 mx-1 px-1 py-0.5  text-black rounded-full text-xs font-bold">
                
                {tag}
            </span>
        {/each}
      </div>
        <!-- <div class = "flex">
            {#each platforms as platform}
            <span class = "bg-transparent mx-1 flex text-gray-300 border-2 border-gray-300 rounded-sm px-2 text-xs font-bold">
                <img src = {platform.src} alt = {platform.name} class = "w-4 h-4 m-1">
                <span class = "flex items-center">
    
                    {platform.name}
                </span>
            </span>
            {/each}
        </div> -->
    </BlurOnHover>
</div>
