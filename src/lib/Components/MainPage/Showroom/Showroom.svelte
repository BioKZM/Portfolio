<script>
    let tabs = [
        {
            name: "GNML",
            description: "Multi-functional content library",
            src : "./gnml.jpeg",
            href: "/projects/GNML"
        },
        {
            name: "Colonist",
            description: "Multi-functional Discord Bot",
            src : "",
            href: "/projects/Colonist"
        },
        {
            name: "Fate",
            description: "Character sheet generator & editor for fantasy game setup Fate",
            src: "",
            href:"/projects/Fate"
        }
    ]
    let activeIndex = 0;
</script>

<div class = "main">
    <div class = "myProjects">
        <div>
            My Projects 
        </div>
        <div class = "button">
            <a href = "/projects" class = "seeAll">See all</a>
        </div>
    </div>
    
    <div class = "panel">
        <div class = "tabs">
            {#each tabs as tab,index}
            <!-- svelte-ignore a11y_click_events_have_key_events -->
            <!-- svelte-ignore a11y_no_static_element_interactions -->
            <div class = "tab {activeIndex == index ? 'active' : 'inactive'}" onclick = {() => activeIndex = index}>
                {tab.name}
            </div>
        {/each}
        </div>
        
        <!-- <a href = "/projects" class = "linkToProjects">
            >
        </a> -->
        
    </div>
    
    <div class = "background">
        <!-- {#each tabs as tab,index} -->
            <div class = "description">
                
                <span><img class = "srcImg" src = "{tabs[activeIndex].src}" alt = ""> 
                    <!-- {tabs[activeIndex].name} -->
                </span>
                <span>
                    {tabs[activeIndex].description}
                </span>
                <a href = "{tabs[activeIndex].href}" class = "learnMore">Learn More ></a>
            </div>
        <!-- {/each} -->
        <!-- <div class="description"></div> -->
    </div>
</div>

<style>
    .main
    {
        width:100%;
        height: 800px;
        justify-content: center;
        display:flex;
        align-items: center;
        flex-direction: column;
        margin:50px 0;
    }
    .tabs
    {
        /* background-color: rgba(179, 178, 178, 0.2);  */
        width: 70%;
        height: 85px; 
        display:flex;
        flex-direction: row;
    }
    .panel
    {
        background-color: rgba(179, 178, 178, 0.2); 
        width: 70%;
        height: 85px; 
        display:flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }
    .background
    {
        background-color: white;
        display:flex;
        align-items: center;
        justify-content: center;
        width: 70%;
        height: 100%;
    }
    .tab
    {
        margin-right:2px;
        font-size:20px; 
        display:flex;
        align-items: center;
        justify-content: center;
        width: 150px;
        /* height: 74px; */
        transition: all 0.5s ease;
    }
    .inactive
    {
        background-color: rgba(179, 178, 178, 0.2);
        color: white;
        height: 100%;
    }
    .active
    {
        color: black;
        background-color: white;
        height: 100%;
        font-weight:bold;
    }
    .myProjects
    {
        display:flex;
        justify-content: center;
        font-size:72px;
        margin:50px;
        align-items: center;
    }
    .description
    {
        display:flex;
        /* justify-content:center; */
        flex-direction:column;
        color:black;
        align-items: center;
    }
    .srcImg
    {
        /* width: 20%;
        height: 20%; */
        /* width: 100%;
        height: 100%; */
        width: 600px;
        height: 300px;
    }
    .learnMore
    {
        text-decoration: none;
        color:black;
        background-color: transparent;
        border: 2px black dashed;
        font-size:16px;
        padding:8px 16px;
        margin:25px;
        font-weight: bold;
    }
    /* .linkToProjects
    {
        display:flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color:white;
        margin:0 20px;
        font-size:24px;
        width: 24px;
        height: 24px;
        border:2px solid white;
        border-radius: 25px;
    } */
    .seeAll
    {
        color:white;
        text-decoration:none;
        font-size:24px;
        border: 2px dashed white;
        margin:20px;
        padding: 5px 10px;
        /* background-color: white; */
        /* border-radius: 20px; */
        /* width:24px;
        height:24px; */
    }
    .button
    {
        display:flex;
        justify-content: center;
    }
    
</style>