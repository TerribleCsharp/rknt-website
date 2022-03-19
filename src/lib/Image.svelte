<script lang="ts">
	export let src = '';
	export let alt = '';
	export let caption = null;
</script>

<figure>
	<!-- <img src="/images/news/zzt/logo_ING.svg" alt="Logo ING" /> -->
	<img {src} {alt} />
	{#if caption}
		<figcaption>{caption}</figcaption>
	{/if}
</figure>

<style lang="scss">
	figure {
		margin: 1.5rem auto;
		padding: 1rem;
		width: fit-content;
		box-shadow: 0 0 15px 12px #111;

		img {
			display: block;
			max-width: 90%;
			// box-shadow: 0 0 15px 12px #111;
			padding: 1rem;

			@media (min-width: 800px) {
				max-width: 50vw;
			}
		}
		figcaption {
			// margin: 1rem 1rem 0;
			margin: 1rem 0 0;
			text-align: right;
			font-size: 1.1rem;
			font-weight: 300;
			color: var(--c-text-secondary);
		}
	}
</style>
