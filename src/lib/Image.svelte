<script lang="ts">
	export let src = '';
	export let alt = '';
	export let caption = null;
	export let variant = '1';
</script>

<figure>
	<!-- <img src="/images/news/zzt/logo_ING.svg" alt="Logo ING" /> -->
	<img {src} {alt} />
	{#if caption}
		<figcaption>{caption}</figcaption>
	{/if}
</figure>

{#if variant == '1'}
	<style lang="scss">
		figure {
			padding: 1rem;
			box-shadow: 0 0 15px 12px #111;
		}
	</style>
{:else}
	<style lang="scss">
		figure {
			img {
				box-shadow: 0 0 15px 12px #111;
				padding: 1rem;
			}
		}
	</style>
{/if}

<style lang="scss">
	figure {
		margin: 1.5rem auto;
		width: fit-content;

		img {
			display: block;
			max-width: 100%;
			max-height: 80vh;
			margin: auto;

			@media (min-width: 800px) {
				max-height: 50vh;
			}
		}
		figcaption {
			margin-top: 1rem;
			text-align: right;
			font-size: 1.1rem;
			font-weight: 300;
			color: var(--c-text-secondary);
		}
	}
</style>
