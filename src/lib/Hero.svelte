<!-- <img src="/images/splashscreendark.png" alt="Prototyp hybrydowego silnika rakietowego Bieli3k" /> -->
<section class="hero">
	<a href="/news/bieli3k_sf" class="hero__button">
		20 LUTEGO
		<h2>Bieli3k - test SF</h2>
		ZOBACZ >
	</a>
</section>

<style lang="scss">
	.hero {
		margin-top: -6rem;
		height: 100vh;
		background-image: url('/images/news/bieli3k/sf1.png');
		background-attachment: fixed;
		background-size: cover;
		background-repeat: no-repeat;
		// background-position: 10% 10%;

		&__button {
			position: absolute;
			font-size: 1.5rem;
			top: 55%;
			left: 12%;
			transition: transform 200ms ease-out, filter 400ms ease-out;

			&:hover {
				transform: scale(1.05) translateX(2%);
				filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.45));
			}
		}

		@media (max-width: 800px) {
			background-position: center;

			&__button {
				left: 5%;
			}
		}
	}
	h2 {
		font-size: 3rem;
		margin: 5px;
		line-height: normal;
		text-transform: uppercase;
	}

	@media (min-width: 800px) {
		.hero__button {
			font-size: 2em;
		}
		h2 {
			font-size: 4rem;
		}
	}
	// img {
	// 	position: fixed;
	// 	width: 100%;
	// 	transform: translateY(-10vh);
	// 	z-index: -1;
	// }
</style>
