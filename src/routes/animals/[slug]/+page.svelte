<script>
	let { data } = $props();
	import Animalcard from '$lib/Animalcard/Animalcard.svelte';
	import DolphinImage from '$lib/images/bottlenose dolphin.avif';
</script>

<Animalcard
	name={data.animal.name}
	description={data.animal.description}
	size={data.animal.size}
	image={DolphinImage}
    diet={data.animal.diet}
    behavior={data.animal.behavior}
    habitat={data.animal.habitat}
></Animalcard>
