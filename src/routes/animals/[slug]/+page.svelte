<script lang="ts">
	let { data } = $props();
	import Animalcard from '$lib/Animalcard/Animalcard.svelte';
	// import AnimalImage from '$lib/images/{data.animal.image}'
	// let picture="$lib/images/"+{data.animal.image}
</script>

<Animalcard
	name={data.animal.name}
	description={data.animal.description}
	size={data.animal.size}
	image={data.animal.image}
    diet={data.animal.diet}
    behavior={data.animal.behavior}
    habitat={data.animal.habitat}
></Animalcard>
