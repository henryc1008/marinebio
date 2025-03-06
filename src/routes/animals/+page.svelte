<script>
    let {data} =$props();
    import {base} from "$app/paths";
    import Navcard from "./navcard.svelte";
</script>

<h1> Animals</h1>

<ul>
    {#each data.summaries as {slug, title}}
    <li><a href="{base}/animals/{slug}">{title}</a></li>
    {/each}
</ul>

{#each data.cards as {slug, title, image, description} }
    <Navcard {slug} name={title} {image} {description}> </Navcard>
{/each}