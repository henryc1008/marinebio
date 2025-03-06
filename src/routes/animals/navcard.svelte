<script>
	import { base } from '$app/paths';
	let { slug, name, image, description } = $props();
</script>

<!-- <a href="{base}/animals/Animal1">Animal 1 </a> -->
<div>
	<a href="{base}/animals/{slug}">
		<h1>
			{name}
		</h1>

        <img src="{base}/{image}" alt="" class=box width=20%>
		<p>
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
			labore et dolore magna aliqua.
		</p>
	</a>
</div>

<style>
	div {
		background-color: aquamarine;
	}
	a {
		color: inherit;
		text-decoration: none;
	}
</style>
