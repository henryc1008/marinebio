<script lang="ts">
    import bottlenosedolphin from "$lib/images/bottlenose dolphin.avif"
    import Animalcontent from "./Animalcontent.svelte";
    import Animaldiet from "./Animaldiet.svelte";
    import Animalhabitat from "./Animalhabitat.svelte";

    let {Habitat = "ocean"} = $props();
</script>

<div class="container">
	<div class="row">
        <img src={bottlenosedolphin} alt="" class=box>
        <div class=box>
            <Animalcontent> </Animalcontent> 
        </div>
    </div>
	<div class="row">
        <div class=box>
            <Animalhabitat {Habitat}/>
        </div>
        <div class=box>
            <Animaldiet/> 
        </div>
    </div>
</div>

<style lang="scss">
    .row {
        display:flex;
        justify-content: space-between;
    }
    .box {
        width: calc(50% - 0.75rem);
    }
    .container {
        background: #002c4c;
        color: white;
        max-width: 75%;
        position: relative;
        margin: auto;
        padding: 2.25rem;
        display:flex;
        flex-direction: column;
    }
</style>
