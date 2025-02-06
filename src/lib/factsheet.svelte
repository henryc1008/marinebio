<script>
    let {name = "AAAA",
        habitat = "",
        diet = "",
        behaviors = ""
    } = $props();
</script>

<h1> {name}</h1>
<h4> Scientific Name</h4>
<h2> General Facts</h2>
<p> Habitat - {habitat}</p>
<p> Diet - {diet}</p>
<p> Behaviors - {behaviors}</p>

<h2> Other things</h2>
<p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
<style lang="scss">
h1, h4 {
display: block;
text-align : center;
}
</style>
