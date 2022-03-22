<!-- <script context="module">
	// import * as pkg from '../../package.json';
	import { readFileSync } from 'fs';
	import { fileURLToPath } from 'url';

	export async function load() {
		const file = fileURLToPath(new URL('../../package.json', import.meta.url));
		const json = readFileSync(file, 'utf8');
		const pkg = JSON.parse(json);
		return { props: { pkg } };
	}
</script> -->
<script>
	const author = 'Filip Komińczuk';
	const github = 'https://github.com/TerribleCsharp/rknt-website';
	const version = '0.1.3';

	// const [author] = pkg.author?.match('^([a-ż]*[A-Ż]* ){2}') || ['undefined'];
	// const github = pkg.repository;
	// const version = pkg.version;
</script>

<section class="link-gallery" id="partners">
	<h1>Sponsorzy</h1>
	<a href="https://www.igus.pl"><img src="/images/sponsors/igus.svg" alt="IGUS" /></a>
	<a href="https://technosystem.pl">
		<img src="/images/sponsors/Techno_system.svg" alt="Techno system" />
	</a>
	<a href="https://ultrarobotics.pl">
		<img src="/images/sponsors/Ultra_robotics.svg" alt="Ultra robotics" />
	</a>
	<a href="https://pl.dmgmori.com/"><img src="/images/sponsors/DMG_MORI.svg" alt="DMG MORI" /></a>
</section>
<section class="link-gallery">
	<h1>Patroni medialni</h1>
	<a href="https://www.youtube.com/c/Rakietomania">
		<img src="/images/patrons/rakietomania.svg" alt="Logo Rakietomania" />
	</a>
	<a href="https://naukatolubie.pl/">
		<img src="/images/patrons/nauka.svg" alt="Logo Nauka To Lubię" />
	</a>
	<a href="https://pffn.org.pl"><img src="/images/patrons/PFFN.svg" alt="Logo PFFN" /></a>
</section>
<footer>
	<nav>
		<a href="/">HOME</a>
		<a href="/#news">NOWOŚCI</a>
		<a href="/#news">PROJEKTY</a>
		<a href="#about">O NAS</a>
		<a href="#partners">PARTNERZY</a>
	</nav>
	<div class="categories">
		<section id="contact">
			<h2>Kontakt</h2>
			<address>
				<ul>
					<li><a href="mailto:rknt.invenio@gmail.com">rknt.invenio@gmail.com</a></li>
					<li><a href="tel:+48 602 742 622">+48 602 742 622</a></li>
					<!-- <li><a href=".">ul. Wiśniowa 56<br />02-520 Warszawa</a></li> -->
					<li>ul. Wiśniowa 56</li>
					<li>02-520 Warszawa</li>
				</ul>
			</address>
		</section>
		<section id="about">
			<h2>O kole</h2>
			<ul>
				<li><a href="#about">Kim jesteśmy</a></li>
				<li><a href="#partners">Z kim współpracujemy</a></li>
				<li><a href="/#news">Nowości</a></li>
			</ul>
		</section>
		<section>
			<h2>Projekty</h2>
			<ul>
				<li><a href=".">BieliK</a></li>
				<li><a href=".">Orlik</a></li>
			</ul>
		</section>
		<section>
			<h2>Media</h2>
			<!-- <h2>Bądź na bieżąco</h2> -->
			<ul>
				<li><a href="https://twitter.com/RInvenio">Twitter</a></li>
				<li><a href="https://www.instagram.com/rknt_invenio/">Instagram</a></li>
				<li>YouTube</li>
			</ul>
		</section>
		<section class="hide">
			<h2>Dołącz</h2>
			<!-- <h2>Dołącz do nas</h2> -->
			<ul>
				<li><a href="https://discord.gg/V9ZcNXsn4d">Discord</a></li>
			</ul>
		</section>
	</div>
	<div class="credits">
		<img src="/images/logo_cropped.svg" alt="RKNT Invenio" />
		<p class="wide">
			Made by <b>{author}</b> | Source on <b><a href={github}>GitHub</a></b> | Version {version}
		</p>
		<div class="compact">
			<p>Made by <b>{author}</b> | Source on <b><a href={github}>GitHub</a></b></p>
			<p>Version {version}</p>
		</div>
	</div>
</footer>

<style lang="scss" src="./footer.scss"></style>
