<script lang="ts">
    import Animalcontent from "./Animalcontent.svelte";
    import Animaldiet from "./Animaldiet.svelte";
    import Animalhabitat from "./Animalhabitat.svelte";
    import Animalbehavior from "./Animalbehavior.svelte";
    import Animalsize from "./Animalsize.svelte"
    import { base } from "$app/paths";

    let {
        habitat = "ocean",
        name="animalname",
        diet="animaldiet",
        description="animaldescription",
        behavior="animalbehavior",
        size="animalsize",
        image} = $props();
</script>

<div class="container">
	<div class="row">
        <img src="{base}/{image}" alt="" class=box>
        <div class=box>
            <Animalcontent {name} {description}> </Animalcontent> 
        </div>
    </div>
	<div class="row">
        <div class=box>
            <Animalhabitat {habitat}/>
        </div>
        <div class=box>
            <Animaldiet {diet}/> 
        </div>
    </div>
    <div class="row">
        <div class=box>
            <Animalbehavior {behavior}/>
        </div>
        <div class=box>
            <Animalsize {size}/> 
        </div>
    </div>
</div>

<style lang="scss">
    .row {
        display:flex;
        justify-content: space-between;
        margin-top: 10px;
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
        border: 2px dotted;
    }
</style>
