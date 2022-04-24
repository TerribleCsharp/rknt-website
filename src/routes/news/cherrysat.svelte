<script lang="ts">
	import Image from '$lib/Image.svelte';
</script>

<article class="news">
	<header>
		<h1>CherrySat</h1>
		<!-- <h2>25 marca</h2> -->
	</header>
	<p>
		CherrySat to najnowszy projekt RKNT Invenio, którego celem jest budowa mini-satelity wielkości
		puszki po napoju, w ramach międzynarodowego konkursu CanSat. Satelita przygotowywana jest na
		edycję 2022/2023, jednak już teraz postanowiliśmy rozpocząć nad nią prace, tak aby finalny
		produkt jak najlepiej odzwierciedlał nasze plany i oczekiwania. Podstawowym zadaniem naszej
		konstrukcji jest pomiar jakości powietrza, uwzględniając w tym takie parametry jak stężenie CO2,
		tlenków siarki, obecności pyłów itd.
	</p>
	<Image src="/images/news/cherrysat/logo.png" alt="Logo misji" caption="Logo misji" />
	<p>
		Cechą wyróżniającą CherrySata na tle konkurencji jest możliwość wylądowania nim, w dokładnie
		wyznaczonym wcześniej punkcie. Wzorem najlepszych, którzy tak jak Elon Musk, dostrzegli
		potencjał w wielokrotnym wykorzystywaniu rakiet oraz lądowania nimi tak precyzyjnie jak to tylko
		możliwe, postanowiliśmy wyposażyć naszą satelitę w zestaw specjalnie składanych skrzydeł, które
		rozkładając, a następnie manewrując nimi w odpowiednim momencie lotu, pozwalają nam sterować
		naszą konstrukcją w sposób nieporównywalnie bardziej dokładny, od standardowego rozwiązania,
		jakie stanowią spadochrony.
	</p>
	<Image
		src="/images/news/cherrysat/model.png"
		alt="Model 3D CherrySata"
		caption="Model 3D CherrySata"
	/>
	<p>
		Takie rozwiązanie pozwala osiągnąć nam kilka korzyści jednocześnie - po pierwsze, zwiększa ono
		czas, w trakcie którego nasz cansat znajduje się w powietrzu, a co za tym idzie pozwala dłużej
		prowadzić badania jego jakości, co przekłada się na dokładniejsze i bardziej wiarygodne wyniki.
		Po drugie, pozwala wykorzystać tę samą satelitę do wielu lotów, zaoszczędzając w ten sposób na
		materiałach i nie produkując zbędnych ilości śmieci, które pozostają po jednorazowych
		satelitach. Dzięki systemowi skrzydeł jesteśmy bowiem w stanie uniknąć zgubienia naszego
		satelity, co często ma miejsce w przypadku jednostek posługujących się spadochronem, szczególnie
		przy niekorzystnych wiatrach. Dodatkowo znacznie minimalizujemy także szanse na uszkodzenie
		naszej konstrukcji, co dzieje się w wielu przypadkach, w których spadochron cansata nie otworzy
		się, lub zostanie uszkodzony.
	</p>
	<Image src="/images/news/cherrysat/szkic.jpg" alt="Szkic satelity" caption="Szkic satelity" />
</article>
