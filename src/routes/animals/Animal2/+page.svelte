<script lang="ts">
	import Animalcard from '$lib/Animalcard/Animalcard.svelte';
	import SealImage from '$lib/images/Monk seal.jpg';
</script>

<Animalcard
	name="Hawaiian Monk Seal"
	habitat="Ocean"
	diet="Fish, Crustaceans(Shrimp, Crab, Etc), Cephalopods(Squid, Lobsters)"
	behavior="Friendly,travels in pods"
    size="Avg Length: 6-7.5 Ft Avg Weight:400-600 lbs"
	description="A beloved species, bottlenose dolphins are friendly mammals that are found throughout the world's oceans. They are playful and love to interact with humans, and can be found in coastal waters. However, this may pose harm to them, as humans are huge contributors to the dolphin death toll. Dolphins are entangled in fishing nets or ingest fishing gear which could lead to serious harm or even mortality. 
"
	image={SealImage}

></Animalcard>
