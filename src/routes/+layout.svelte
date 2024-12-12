<script>
    let {children} = $props();
    import Navbar from "$lib/Navbar.svelte";
    import '$lib/scss/global.scss';
</script>
<Navbar />

{@render children()}
