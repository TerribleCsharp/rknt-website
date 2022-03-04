<script>
	export let showNav = true;
	export let transparentNav = true;
	const treshold = 95;

	let currentPosition;
	let offset = 0;
	let oldPosition = 0;
	let oldDirection = true;
	const scroll = () => {
		offset += currentPosition - oldPosition;
		const direction = currentPosition - oldPosition > 0 ? true : false;
		if (oldDirection !== direction) offset = 0;
		oldDirection = direction;
		if (offset > treshold) {
			showNav = false;
			offset = 0;
		} else if (offset < -treshold) {
			showNav = true;
			offset = 0;
		}
		oldPosition = currentPosition;

		if (currentPosition > 100) transparentNav = false;
		else transparentNav = true;
	};
</script>

<svelte:window on:scroll={scroll} bind:scrollY={currentPosition} />

<nav class={showNav ? '' : 'nav--hidden'} class:nav--transparent={transparentNav}>
	<div class="nav-container">
		<a href="/"><img src="/images/logo_cropped.svg" alt="Logo RKNT Invenio" /></a>
		<a href="/#news" class="nav-element">Nowości</a>
		<a href="/#news	" class="nav-element">Projekty</a>
		<a href="#about" class="nav-element">O nas</a>
		<a href="#partners" class="nav-element">Partnerzy</a>
		<a href="#contact" class="nav-element">Kontakt</a>
	</div>
</nav>

<style lang="scss">
	nav {
		position: sticky;
		top: 0;
		height: 4rem;
		width: 100%;
		// margin-bottom: -6rem;
		font-size: 1.2em;
		font-weight: 600;
		text-align: center;
		background-color: rgba(#040404, 0.87);
		backdrop-filter: blur(10px);
		transition: all 200ms ease-out;
		z-index: 5;

		.nav-container {
			width: 100%;
			max-width: 1200px;
			margin: auto;
		}
		.nav-element {
			display: none;
		}
		img {
			height: 2rem;
			margin: 1rem 0 0;
		}

		@media (min-width: 800px) {
			height: 6rem;
			text-align: left;

			.nav-element {
				display: inline-block;
				margin: 0 0.5rem;
				text-transform: uppercase;
				transition: all 300ms ease-out;

				&::before,
				&::after {
					display: inline-block;
					content: '';
					position: relative;
					background-color: var(--c-accent-light);
					// background-color: #fff;
					height: 0em;
					width: 2px;
					transition: all 300ms ease-out;
				}
				&::before {
					bottom: -4px;
					left: -2px;
				}
				&::after {
					top: calc(4px - 1.2em);
					right: -2px;
				}

				&:hover {
					// filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.45));
					&::before {
						height: 1.2em;
					}
					&::after {
						height: 1.2em;
						top: 4px;
					}
				}
			}
			img {
				margin: 1.8rem 1rem 0;
			}
		}
	}
	.nav--hidden {
		transform: translateY(-6rem);
	}
	.nav--transparent {
		background: none;
	}
</style>
