<script lang="ts">
	import image from '$lib/images/Website Background.jpg';
</script>

<!-- //Centered towards the top of the screen
//Top header also transparent for more clean look?
//Animals Page About/Contact Page Taking Action Page -->

<div class="container">
	<img src={image} style="width:100%" />
	<div class="centered">
		<h1>"One line Phrase About wanting to know more about endanged marine animals"</h1>
	</div>
</div>

<style>
	.container {
		position: relative;
		text-align: center;
        color: white;
	}
	h1 {
		text-align: center;
	}
	.centered {
		position: absolute;
        top:30%;
        left:50%;
        transform:translate(-50%,-50%)
	}
</style>
