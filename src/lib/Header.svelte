<script>
	export let showNav = true;
	export let transparentNav = true;
	export let active = false;
	const treshold = 95;

	let currentPosition;
	let offset = 0;
	let oldPosition = 0;
	let oldDirection = true;
	const scroll = () => {
		active = false;

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

	const toggle = () => {
		active = !active;
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
	<div class="nav-menu" class:active />
	<div class="nav-menu__button" class:active on:click={toggle}>
		<svg width="100%" height="100%" viewBox="0 0 100 100">
			<path
				class="line top"
				d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
			/>
			<path class="line middle" d="M 20,50 H 80" />
			<path
				class="line bottom"
				d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
			/>
		</svg>
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
		overflow-x: clip;
		// overflow: clip visible;

		.nav-container {
			width: 90%;
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
		.nav-menu {
			position: absolute;
			top: 0;
			right: 0;
			width: 50%;
			//height greater than 100vh protects against animations messing with the menu
			height: 120vh;
			max-width: 400px;
			background-color: aqua;
			transform: translateX(100%);
			transition: all 600ms ease;
			&.active {
				transform: none;
			}
		}
		.nav-menu__button {
			position: absolute;
			// top: 25%;
			// right: 2%;
			// height: 50%;
			// aspect-ratio: 1/1;
			top: 25%;
			right: 1rem;
			width: 2rem;
			height: 2rem;
			// background-color: #00aaaa;

			.line {
				fill: none;
				stroke: white;
				stroke-width: 6;

				transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
					stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1), transform 600ms ease;
			}
			.top,
			.bottom {
				stroke-dasharray: 60 207;
			}
			.bottom {
				transform: scale(-1, 1) translate(-100%, 0);
			}
		}
		.active .top,
		.active .bottom {
			stroke-dasharray: 62 207;
			stroke-dashoffset: -140;
		}
		.active .middle {
			transform: scale(1.1, 1) translate(-25%, 50%) rotate(-45deg);
		}
		@media (min-width: 800px) {
			height: 6rem;
			text-align: left;

			.nav-element {
				display: inline-block;
				vertical-align: bottom;
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
					width: 3px;
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

			.nav-menu__button {
				top: 1.5rem;
				right: 2rem;
				width: 3rem;
				height: 3rem;
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
