<script>
	let { name = 'animalname', description = "animaldescription"} = $props();
</script>

<div>
	<h1>{name}</h1>
	<p>
		{description}
	</p>
</div>
