<script lang="ts">
	const dateOptions: Intl.DateTimeFormatOptions = {
		dateStyle: 'long'
	};

	const books = [
		{
			title: 'Night Circus',
			author: 'Erin Morgenstern',
			cover: 'night-circus.png'
		}
	];
</script>

<!-- Meta -->
<svelte:head>
	<title>Now ✨ | Iserila</title>
	<meta
		name="description"
		content="What am I up to right now? — My little corner on the internet, come take a look!"
	/>

	<meta property="og:title" content="Now ✨ | Iserila" />
	<meta
		property="og:description"
		content="What am I up to right now? — My little corner on the internet, come take a look!"
	/>
	<meta property="og:url" content="https://iserila.com/now" />

	<meta name="twitter:title" content="Now ✨ | Iserila" />
	<meta
		name="twitter:description"
		content="What am I up to right now? — My little corner on the internet, come take a look!"
	/>
</svelte:head>

<div
	class="bg-stars flex min-h-screen flex-col items-center justify-start gap-8 p-8 text-cosmic-sparkle"
>
	<main>
		<header class="mt-8 mb-8 text-center">
			<h1 class="mb-2 font-great-vibes text-5xl">🌟 Now</h1>
			<p class="mx-auto max-w-xl text-lg">
				Last updated: <span class="font-bold"
					>{Intl.DateTimeFormat('en-US', dateOptions).format()}</span
				>
				<br />
				<span class="text-sm"
					>Inspired by
					<a href="https://sive.rs/" target="_blank" class="sparkle-link">Derek Sivers</a>. If you
					have your own site, why not
					<a href="https://nownownow.com/about" target="_blank" class="sparkle-link"
						>create one yourself?</a
					>
				</span>
			</p>
		</header>

		<div class="flex flex-col gap-8 text-center">
			<!-- Right now -->
			<section>
				<h2 class="font-cinzel text-2xl">🌙 What I'm up to right now</h2>
				<ul class="space-y-4">
					<li>Starting my exam year (2025/2026) in <em>Smart Industry</em> (vocational school).</li>
					<li>
						Quit Instagram, Snapchat & Facebook 🎉 My screen time's still kinda high though — trying
						to swap it for reading, sketching, and running.
					</li>
					<li>
						Running fell off a bit after I started in January… but I'm getting back at it 🏃✨
					</li>
				</ul>
			</section>

			<!-- Books -->
			<section class="mt-8">
				<h2 class="mb-4 font-cinzel text-2xl">📚 Current Read(s)</h2>
				<div class="flex justify-center gap-6">
					{#each books as book}
						<div class="flex flex-col items-center">
							<img
								src={`/covers/${book.cover}`}
								alt="Night Circus cover"
								class="w-42 rounded-md object-contain shadow-md"
							/>
							<p class="mt-2 text-center text-sm">
								{book.title} - <span class="opacity-70">{book.author}</span>
							</p>
						</div>
					{/each}
				</div>
			</section>
		</div>
	</main>

	<footer class="mt-auto mb-8 text-center">
		<a href="/" class="sparkle-link text-2xl">🏠 Back to Home</a>
	</footer>
</div>
