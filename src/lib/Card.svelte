<script lang="ts">
import Factsheet from "./factsheet.svelte";
import image from "$lib/images/vampire squid.jpeg";
</script>

<div>
    <div class="picture">
<img src={image} width=100%>
    </div>
    <div class="facts">
        <Factsheet>

        </Factsheet>
    </div>
</div>
<style lang="scss">
div {
    display:flex;
    justify-content: space-between;
}

.facts{
    width: 50%;
    display:block; 
    background: greenyellow;
    padding: 10px
}

.picture {
    width: 50%;
    display:block; 
    background: rgb(47, 144, 255);
    padding: 5px
}
</style>