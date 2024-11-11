<script lang="ts">
    
    import { Motion } from "svelte-motion";
    let left = 0;
    let width = 0;
    let opacity = 0;
    let ref: any;
    let navs = [
      {
        name: "Projects",
        link: "/projects",
      },
      {
        name: "Home",
        link: "/",
      },
      {
        name: "About",
        link: "/about",
      },
    ];
    let positionMotion = (node: HTMLElement) => {
      let refNode = () => {
        let mint = node.getBoundingClientRect();
        left = node.offsetLeft;
        width = mint.width;
        opacity = 1;
      };
      node.addEventListener("mouseenter", refNode);
      return {
        destroy() {
          node.removeEventListener("mouseenter", refNode);
        },
      };
    };
  </script>
  <div class="py-5 w-full bg-transparent">
    <ul
      on:mouseleave={() => {
        width = width;
        left = left;
        opacity = 0;
      }}
      class="relative mx-auto flex w-fit rounded-full border-2 border-red-600 bg-transparent p-1"
    >
      {#each navs as item}
        <li
          use:positionMotion
          class="relative z-10 block cursor-pointer px-3 py-15 text-xs uppercase text-white mix-blend-color-dodge md:px-5 md:py-3 md:text-base"
         >
          <a class = "py-3"href={item.link}>{item.name}</a>
        </li>
      {/each}
      <Motion
        animate={{
          left: left,
          width: width,
          opacity: opacity,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 30,
  
        }}
        let:motion
      >
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
        <li
          use:motion
          class="absolute z-0 h-7 rounded-full bg-red-600 md:h-12"
        ></li>
      </Motion>
    </ul>
  </div>

<style>
  
</style>