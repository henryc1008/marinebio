<script>
	let { data } = $props();
	import { base } from '$app/paths';
	import Navcard from './navcard.svelte';
</script>


<!-- <ul>
    {#each data.summaries as {slug, title}}
    <li><a href="{base}/animals/{slug}">{title}</a></li>
    {/each}
</ul> -->

<div class="container">
	{#each data.cards as { slug, title, image, description }}
		<div class="flexitem">
			<Navcard {slug} name={title} {image} {description}></Navcard>
		</div>
	{/each}
</div>

<style lang="scss">
	.container {
		display: flex;
		flex-wrap: wrap;
		box-sizing: border-box;
	}
	.flexitem {
		width: 30%;
		flex-grow: 1;
		box-sizing: border-box;
		margin: 0 5px 10px;
		justify-content: space-between;
	}
</style>
