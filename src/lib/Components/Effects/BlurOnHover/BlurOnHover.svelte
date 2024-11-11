<script lang="ts">
  import type { Snippet } from "svelte";
  import BlurFade from "../BlurFade/BlurFade.svelte";

  let isHovering = $state(false);
  let { children }: { children: Snippet<[]> } = $props();
</script>

<!-- <BlurFade> -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div onmouseenter={() => {isHovering = true}} onmouseleave = {() => {isHovering=false}}>
        {#if isHovering}
        <!-- <BlurFade> -->
            <div class = "outer border-2 border-white/10 rounded-md">
                 <div class = "inner font-bold text-red-600">
                   See Details
                 </div>
                 <div class = "inner blur-md">
                    {@render children()}
                 </div>
            </div>
        <!-- </BlurFade> -->
        {:else}
        <!-- <BlurFade> -->
            {@render children()}
        <!-- </BlurFade> -->
        {/if}
    </div>
<!-- </BlurFade> -->

<style>
    .outer
    {
        display:grid;
        place-items: center;
        grid-template-areas: "inner-div";
    }
    .inner
    {
        grid-area: inner-div;
    }

</style>
