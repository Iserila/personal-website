<script>
	import graveyardProjects from '$lib/assets/data/graveyard';
</script>

<!-- Meta -->
<svelte:head>
	<title>Graveyard 🪦 | Iserila</title>
	<meta
		name="description"
		content="A painful reminder of the past. — My little corner on the internet, come take a look!"
	/>

	<meta property="og:title" content="Graveyard 🪦 | Iserila" />
	<meta
		property="og:description"
		content="A painful reminder of the past. — My little corner on the internet, come take a look!"
	/>
	<meta property="og:url" content="https://iserila.com/graveyard" />

	<meta name="twitter:title" content="Graveyard 🪦✨ | Iserila" />
	<meta
		name="twitter:description"
		content="A painful reminder of the past. — My little corner on the internet, come take a look!"
	/>
</svelte:head>

<div
	class="bg-stars flex min-h-screen flex-col items-center justify-start gap-8 p-8 px-5 text-cosmic-sparkle lg:px-32"
>
	<main>
		<header class="mt-8 mb-8 text-center">
			<h1 class="mb-2 font-great-vibes text-5xl">🪦 Graveyard</h1>
			<p class="mx-auto my-4 max-w-xl italic">
				A painful reminder of the past. Here lies in no particular order the projects that have been
				killed or didn't make the light of day. May they rest in peace and maybe one day, they'll be
				resurrected.
			</p>
			<p class="text-sm italic opacity-50">
				(I might have forgotten some projects, so this list may not be exhaustive. Also, I had to
				dig through old chats to find old screenshots & messages.)
			</p>
		</header>

		<div class="grid gap-4 xl:grid-cols-3">
			{#each graveyardProjects as project}
				<div
					class="flex h-full flex-col rounded-lg border-2 border-cosmic-pink/50 p-4 transition-colors hover:border-cosmic-pink hover:bg-cosmic-bg/50"
				>
					<h3 class="font-semibold">{project.title}</h3>
					<p class="mb-2 text-sm text-neutral-600 dark:text-neutral-400">{project.description}</p>
					{#if project.image}
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
					</div>
				</div>
			{/each}
		</div>
	</main>

	<footer class="mt-auto mb-8 text-center">
		<a href="/" class="sparkle-link text-2xl">🏠 Back to Home</a>
	</footer>
</div>
