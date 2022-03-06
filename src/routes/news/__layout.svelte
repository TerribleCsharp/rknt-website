<slot />

<style global lang="scss">
	.news {
		position: relative;
		margin: 1rem auto;
		width: 100%;
		max-width: var(--max-width);
		font-size: 1.1rem;
		text-align: justify;

		@media (min-width: 800px) {
			width: 70%;
			padding: 1rem;
		}
		header {
			margin: 0.8rem auto;
			width: fit-content;
		}
		h1,
		h2 {
			margin: 0 1rem;
		}
		h2 {
			font-size: 2rem;
			font-weight: 200;
			color: #bbb;
			text-align: right;
		}
		p {
			margin: 1rem;
			// text-align: left;
			a {
				color: var(--c-accent-light);
				font-weight: 800;
				// color: darkred;
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
