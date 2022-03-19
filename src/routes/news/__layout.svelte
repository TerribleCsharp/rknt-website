<slot />

<style global lang="scss">
	.news {
		position: relative;
		margin: 1rem auto;
		width: calc(100% - 2rem);
		font-size: 1.1rem;
		text-align: left;

		@media (min-width: 800px) {
			width: 60%;
			max-width: var(--max-width);
			padding: 1rem;
			text-align: justify;
			// text-align: left;
		}
		header {
			margin: 0.8rem auto;
			width: fit-content;
			// width: 100%;
		}
		h1,
		h2 {
			margin: 0;
		}
		h1 {
			font-size: 3rem;
		}
		h2 {
			font-size: 2rem;
			font-weight: 200;
			color: var(--c-text-secondary);
			text-align: right;
		}
		p {
			margin: 0rem;
			a {
				color: var(--c-accent-light);
				font-weight: 800;
				// color: darkred;
			}
		}

		figure {
			margin: 1.5rem auto;
			// padding: 1rem;
			width: fit-content;
			max-width: var(--max-width);
			// box-shadow: 0 0 15px 12px #111;

			img {
				display: block;
				max-width: 90%;
				box-shadow: 0 0 15px 12px #111;
				padding: 1rem;
				@media (min-width: 800px) {
					max-width: 50vw;
					// max-width: calc(100% - 2rem);
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
	}

	.bg-image {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-image: url('/images/news/rknt_logo.png');
		background-size: cover;
		background-position: center;
		z-index: -1;
		opacity: 0.1;
		filter: brightness(1) blur(5px);
		border-radius: 2rem;
	}
</style>
