<script lang="ts">
	import Footer from '$lib/components/footer.svelte';

	const TimelineItems = [
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
			emoji: '🥰',
			year: 2024,
			text: 'Visited my very first cat café (Chalon de Thé, Metz, France)'
		},
		{
			emoji: '📖',
			year: 2025,
			text: 'My first attempt at an IndieWeb site (this one!) ✨'
		}
	];
</script>

<div
	class="bg-stars flex min-h-screen flex-col items-center justify-start gap-8 p-8 text-cosmic-sparkle"
>
	<header class="mt-8 mb-8 text-center">
		<h1 class="mb-2 font-great-vibes text-5xl">👋 About Me</h1>
		<p class="mx-auto max-w-xl text-lg">
			Welcome to my corner of the web! I go by the name of Iserila, a cat enthusiast 🌙🐱✨. This
			page is all about me, my quirks, and my favorite things.
		</p>
	</header>

	<section class="mx-auto mb-12 max-w-xl space-y-6">
		<h2 class="mb-4 font-great-vibes text-2xl">💫 Me, Myself & I</h2>
		<div class="space-y-2">
			<p>🌍 Lives in the Netherlands</p>
			<p>🐾 Loves cats, and (somewhat) cute things</p>
			<p>💻 I write some buggy code, basically just websites</p>
			<p>🍵 Secret superpower: expert procrastinator</p>
		</div>
	</section>

	<section class="mx-auto mb-12 max-w-xl space-y-6">
		<h2 class="mb-4 font-great-vibes text-2xl">🗺️ Small Timeline</h2>
		<div class="space-y-2">
			{#each TimelineItems as item}
				<p>{item.emoji} {item.year} → {item.text}</p>
			{/each}
		</div>
	</section>

	<footer class="mt-auto mb-8 text-center">
		<a href="/" class="sparkle-link text-2xl">🏠 Back to Home</a>
	</footer>
</div>
