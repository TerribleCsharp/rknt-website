<script lang="ts">
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
</script>

<svelte:head>
	<style>
		@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&family=Roboto:wght@100;300;400;500;700;900&display=swap');
	</style>
</svelte:head>

<Header />
<slot />
<Footer />

<style global lang="scss">
	:root {
		--c-text: #eee;
		--c-text-secondary: #bbb;

		--c-bg: #181818;
		--c-accent-dark: rgb(89, 33, 46);
		--c-accent-light: rgb(109, 38, 54);

		--max-width: 1700px;
	}

	html {
		scroll-behavior: smooth;
	}

	body {
		margin: 0px;
		padding: 0px;
		// font-family: 'Segoe UI';
		// font-family: 'Raleway', sans-serif;
		font-family: 'Roboto', sans-serif;
		// font-family: 'Helvetica Neue';
		background: #181818;
		color: #eee;
		cursor: default;
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	h1 {
		text-transform: uppercase;
		text-align: center;
		font-size: 4em;
		font-weight: 700;

		@media (max-width: 900px) {
			font-size: 3em;
		}
	}

	// * {
	// 	border: purple 1px dotted;
	// }
</style>
