<script>
    let socials = [
        {
            name: "GitHub",
            logo: "./github.png",
            src : "https://www.github.com/BioKZM"
        },
        {
            name: "LinkedIn",
            logo: "./linkedin.png",
            src : "https://www.linkedin.com/in/berke-akbay-a98795229/"
        },
        {
            name: "Dev",
            logo: "./dev.png",
            src: "https://dev.to/qrnt"
        }
    ]
</script>

<div class = "footer">
    <div id = "contribution">
        <span>Icons created by Pavani TLN,Freepik,Google,raijulislam,Anatoly,Uniconlabs,Pixel perfect from</span>
        <a href="https://www.flaticon.com" title="">FlatIcon</a>
    </div>
    <!-- <span>
        2024 | Berke Akbay
    </span> -->
    <div class = "socials">
        {#each socials as social}
            <div class = "logos">
                <img class = "logo" src = {social.logo} alt = {social.name}>
                <a href = "{social.src}">{social.name}</a>
            </div>
        {/each}
    </div>
</div>

<style>
    .footer
    {
        display:flex;
        /* position: absolute; */
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        height: 100px;
        background-color:rgb(43, 43, 43);
        bottom:0;
        /* flex-direction: column; */
    }
    .logos
    {
        display:flex;
        margin:10px 10px;
        /* justify-content: center; */
        align-items: center;

    }
    .socials
    {
        /* margin: 0 20px; */
        /* margin:5px; */
        display:flex;
        /* flex-direction: column; */
    }
    a
    {
        color:white;
        text-decoration: none;
    }
    .logo
    {
        width: 24px;
        height: 24px;
        margin: 10px;
    }
</style>