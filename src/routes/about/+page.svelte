<script lang="ts">
	const TimelineItems = [
		{
			emoji: '🐥',
			year: 2004,
			text: 'My birth'
		},
		{
			emoji: '🏡',
			year: 2011,
			text: 'Moved to the place I live now'
		},
		{
			emoji: '🐈',
			year: 2014,
			text: 'Got our very first cats! Tijger (translated Tiger), and Minoes'
		},
		{
			emoji: '🧊',
			year: 2018,
			text: 'Played my first (proper) game, Minecraft (yes, I was quite late)'
		},
		{
			emoji: '🤖',
			year: 2020,
			text: 'My first lines of code, following a Discord bot tutorial'
		},
		{
			emoji: '🌐',
			year: 2021,
			text: 'My first (proper) attempt at making a website'
		},
		{
			emoji: '🥰',
			year: 2024,
			text: 'Visited my very first cat café (Chalon de Thé, Metz, France)'
		},
		{
			emoji: '📖',
			year: 2025,
			text: 'My first attempt at an IndieWeb site (this one!) ✨'
		},
		{
			emoji: '🧑‍💻',
			year: 2025,
			text: 'My first hackathon, it was well-organized and an amazing experience'
		},
		{
			emoji: '🤔',
			year: 2026,
			text: 'To be continued...'
		}
	];
</script>

<!-- Meta -->
<svelte:head>
	<title>About Me 👋 | Iserila</title>
	<meta
		name="description"
		content="Learn more about me — My little corner on the internet, come take a look!"
	/>

	<meta property="og:title" content="About Me ✨ | Iserila" />
	<meta
		property="og:description"
		content="Learn more about me — My little corner on the internet, come take a look!"
	/>
	<meta property="og:url" content="https://iserila.com/about" />

	<meta name="twitter:title" content="About Me ✨ | Iserila" />
	<meta
		name="twitter:description"
		content="Learn more about me — My little corner on the internet, come take a look!"
	/>
</svelte:head>

<div
	class="bg-stars flex min-h-screen flex-col items-center justify-start gap-8 p-8 px-2 text-cosmic-sparkle"
>
	<main>
		<header class="mt-8 mb-8 text-center">
			<h1 class="mb-2 font-great-vibes text-5xl">👋 About Me</h1>
			<p class="mx-auto max-w-xl text-lg">
				Welcome to my corner of the web! Online I go by the name of Iserila, a cat enthusiast
				🌙🐱✨. This page is all about me, my quirks, and my favorite things.
			</p>
		</header>

		<section class="mx-auto mb-12 max-w-xl space-y-6">
			<h2 class="mb-4 font-cinzel text-2xl">💫 Me, Myself & I</h2>
			<div class="space-y-2">
				<p>🌍 Lives in the Netherlands</p>
				<p>🐾 Loves cats, and (somewhat) cute things</p>
				<p>🩷 My favorite color is pink</p>
				<p>💻 I write some buggy code, basically just websites</p>
				<p>⏱️ Secret superpower: expert procrastinator</p>
			</div>
		</section>

		<section class="mx-auto mb-12 max-w-xl space-y-6">
			<h2 class="mb-4 font-cinzel text-2xl">🗺️ Small Timeline</h2>
			<div class="space-y-2">
				{#each TimelineItems as item}
					<p>{item.emoji} {item.year} → {item.text}</p>
				{/each}
			</div>
		</section>
	</main>

	<footer class="mt-auto mb-8 text-center">
		<a href="/" class="sparkle-link text-2xl">🏠 Back to Home</a>
	</footer>
</div>
