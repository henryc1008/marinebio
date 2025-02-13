<script>
	import { base } from '$app/paths';
	import Animalnavigation from '$lib/animalnavigation/animalnavigation.svelte';

	let animals = ['Animal1', 'Animal2', 'Animal3',];
</script>

<div>
	{#each animals as animal}
		<div>
			<Animalnavigation name={animal} />
		</div>
	{/each}
</div>

<style lang="scss">
	div {
		display: flex;
		justify-content: space-evenly;
		> * {
			width: 25%;
		}
	}
</style>
