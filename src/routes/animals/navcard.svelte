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
			{description}
		</p>
	</a>
</div>

<style>
	div {
		background-color: #6b9fe3;
		transition:0.3s;
	}
	div:hover{
		background-color: #fafafa;
		color:#6b9fe3
	}
	a {
		color: inherit;
		text-decoration: none;
	}
</style>
