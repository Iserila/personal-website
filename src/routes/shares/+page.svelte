<script>
	import shares from '$lib/assets/data/shares';
</script>

<!-- Meta -->
<svelte:head>
	<title>Shares 📤 | Iserila</title>
	<meta
		name="description"
		content="A small collection of stuff I felt like sharing. — My little corner on the internet, come take a look!"
	/>

	<meta property="og:title" content="Shares 📤 | Iserila" />
	<meta
		property="og:description"
		content="A small collection of stuff I felt like sharing. — My little corner on the internet, come take a look!"
	/>
	<meta property="og:url" content="https://iserila.com/graveyard" />

	<meta name="twitter:title" content="Shares 📤✨ | Iserila" />
	<meta
		name="twitter:description"
		content="A small collection of stuff I felt like sharing. — My little corner on the internet, come take a look!"
	/>
</svelte:head>

<div
	class="bg-stars flex min-h-screen flex-col items-center justify-start gap-8 p-8 px-5 text-cosmic-sparkle lg:px-32"
>
	<main>
		<header class="mt-8 mb-8 text-center">
			<h1 class="mb-2 font-great-vibes text-5xl">📤 Shares</h1>
			<p class="mx-auto my-4 max-w-xl italic">
				A collection of random stuff I felt like sharing. Though so far it only seems to contain
				YouTube videos...
			</p>
		</header>

		<div class="grid gap-4 xl:grid-cols-3">
			{#each shares as share}
				<div
					class="flex h-full flex-col rounded-lg border-2 border-cosmic-pink/50 p-4 transition-colors hover:border-cosmic-pink hover:bg-cosmic-bg/50"
				>
					<h3 class="font-semibold">{share.title}</h3>
					<p class="mb-2 text-sm text-neutral-600 dark:text-neutral-400">{share.description}</p>
					<div class="mt-auto">
						{#if share.type === 'youtube'}
							<iframe
								width="560"
								height="315"
								src={share.url}
								title="YouTube video player"
								frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								referrerpolicy="strict-origin-when-cross-origin"
								allowfullscreen
								class="w-full"
							></iframe>
						{/if}
					</div>

					<!-- {#if project.image}
						<img
							src={project.image.url}
							alt={project.title}
							class={`my-6 rounded-md object-contain ${project.image.type === 'square' ? 'w-3xs' : project.image.type === 'portrait' ? 'w-2xs' : 'w-full'}`}
							loading="lazy"
						/>
					{/if}
					<div class="mt-auto flex flex-wrap gap-2">
						<p class="rounded-md bg-cosmic-pink/50 px-2 text-sm">{project.type}</p>
						{#each project.tags as tag}
							<p class="rounded-md border-2 border-cosmic-pink/50 px-2 text-sm">{tag}</p>
						{/each}
					</div> -->
				</div>
			{/each}
		</div>
	</main>

	<footer class="mt-auto mb-8 text-center">
		<a href="/" class="sparkle-link text-2xl">🏠 Back to Home</a>
	</footer>
</div>
