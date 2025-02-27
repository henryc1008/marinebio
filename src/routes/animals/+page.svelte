<script>
    let {data} =$props();
    import {base} from "$app/paths";
</script>

<h1> Animals</h1>

<ul>
    {#each data.summaries as {slug, title}}
    <li><a href="{base}/animals/{slug}">{title}</a></li>
    {/each}
</ul>