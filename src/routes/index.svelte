<script>
	import Hero from '$lib/Hero.svelte';
</script>

<Hero />
<h1>Nowości</h1>
<section class="news-container" id="news">
	<article class="news-item">
		<img src="/images/news/rknt_logo.png" alt="" class="news-image" />
		<p class="news-date">28 grudnia, 2021</p>
		<h2 class="news-title">podsumowanie roku i plany na przyszłość</h2>
		<a href="/news/podsumowanie" class="news-button">Zobacz więcej</a>
	</article>
	<article class="news-item">
		<img src="/images/news/zrzutka.png" alt="" class="news-image" />
		<p class="news-date">19 grudnia, 2021</p>
		<h2 class="news-title">sukces zrzutki</h2>
		<a href="/news/zrzutka" class="news-button">Zobacz więcej</a>
	</article>
	<article class="news-item">
		<img src="/images/news/wtryskiwacze.jpg" alt="" class="news-image" />
		<p class="news-date">10 grudnia, 2021</p>
		<h2 class="news-title">pierwszy test podzespołów silnika Bieli3K - wtryskiwacze</h2>
		<a href="/news/wtryskiwacze" class="news-button">Zobacz więcej</a>
	</article>
	<article class="news-item">
		<img src="/images/news/zzt.png" alt="" class="news-image" />
		<p class="news-date">2 grudnia, 2021</p>
		<h2 class="news-title">RKNT bierze udział w ZZT</h2>
		<a href="/news/zzt" class="news-button">Zobacz więcej</a>
	</article>
</section>

<style lang="scss">
	.news-container {
		display: flex;
		flex-flow: row wrap;
		justify-content: center;
		gap: 1rem 0;

		width: 95%;
		max-width: var(--max-width);
		margin: 0 auto 1rem;

		@media (min-width: 800px) {
			gap: 4rem 2rem;
		}
	}

	.news-item {
		width: 100%;
		// padding-bottom: 8%;

		@media (min-width: 800px) {
			width: calc(50% - 1rem);
			width: 47%;
		}
	}

	.news-image {
		width: 100%;
		// height: 50%;
		aspect-ratio: 16/9;
		object-fit: cover;
		object-position: center;

		// @media (min-width: 800px) {
		// 	height: 72%;
		// }
	}

	.news-date {
		margin: 0.5rem 0;
		font-size: 1.4em;
		font-weight: 300;
		text-transform: lowercase;
		color: #bbb;

		@media (min-width: 800px) {
			margin: 3rem 0 0;
		}
	}

	.news-title {
		margin: 1rem 0 2rem;
		font-size: 1.8em;
		font-weight: 800;
		text-transform: uppercase;

		@media (min-width: 800px) {
			margin: 1rem 0 4rem;
		}
	}

	.news-button {
		// --c-gradient-start: #59212e;
		// --c-gradient-end: #9f0e37;
		--c-gradient-start: #592137;
		--c-gradient-end: #d0154a;

		display: block;
		width: calc(100% - 1rem);
		height: 3rem;
		margin: auto;
		font-size: 0.9em;
		font-weight: 500;
		text-align: center;
		text-transform: uppercase;
		line-height: 3rem;
		color: transparent;
		border: 2px solid #fff;
		background: linear-gradient(90deg, var(--c-gradient-start), var(--c-gradient-end));
		border-image: linear-gradient(0deg, var(--c-gradient-start), var(--c-gradient-end)) 1;
		background-clip: text;
		-webkit-background-clip: text;
		transition: all 200ms ease-out;
		filter: grayscale(1) brightness(5);

		&:hover {
			filter: grayscale(0) brightness(1);
			animation: gradientrotation 2.5s linear infinite;
			-moz-animation: none;
			font-size: 0.95em;
		}

		@media (min-width: 800px) {
			width: 11rem;
			margin: 0;

			&::after {
				content: ' >';
				line-height: 3rem;
				font-size: 1.2rem;
			}
		}
	}

	@keyframes gradientrotation {
		0% {
			border-image: linear-gradient(0deg, var(--c-gradient-start), var(--c-gradient-end)) 1;
		}
		25% {
			border-image: linear-gradient(90deg, var(--c-gradient-start), var(--c-gradient-end)) 1;
		}
		50% {
			border-image: linear-gradient(180deg, var(--c-gradient-start), var(--c-gradient-end)) 1;
		}
		75% {
			border-image: linear-gradient(270deg, var(--c-gradient-start), var(--c-gradient-end)) 1;
		}
		100% {
			border-image: linear-gradient(360deg, var(--c-gradient-start), var(--c-gradient-end)) 1;
		}
	}
</style>
