<script>
    let {data} =$props();
</script>

<h1> Animals</h1>

<ul>
    {#each data.summaries as {slug, title}}
    <li><a href="/animals/{slug}">{title}</a></li>
    {/each}
</ul>