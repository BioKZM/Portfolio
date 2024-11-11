<script lang="ts">
    let {href="", src="", alt="" } = $props();
    let isHovering = $state(false);
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class = "logo {isHovering ? 'hover' : ''}" onmouseenter={() => {isHovering = true;}} onmouseleave = {() => {isHovering=false;}}>
    <a {href} >
        <img {src} {alt}>
    </a>
</div>


<style lang="postcss">
    .logo
    {
        background-color:rgba(0,0,0,0.9);
        border-radius:50px;
        margin:5px 5px;
        padding: 10px 10px;
        width:48px;
        height:48px;
        transition: transform ease 0.3s;
    }
    .hover
    {
        box-shadow: 0px 4px 8px rgba(0, 0, 0,);
        transform: translateY(-8px);
        
    }
   
    
</style>
