<script>
	import uses from '$lib/assets/data/uses';
</script>

<!-- Meta -->
<svelte:head>
	<title>Now 🛠️ | Iserila</title>
	<meta
		name="description"
		content="What stuff do I use? — My little corner on the internet, come take a look!"
	/>

	<meta property="og:title" content="Uses 🛠️ | Iserila" />
	<meta
		property="og:description"
		content="What stuff do I use? — My little corner on the internet, come take a look!"
	/>
	<meta property="og:url" content="https://iserila.com/uses" />

	<meta name="twitter:title" content="Uses 🛠️ | Iserila" />
	<meta
		name="twitter:description"
		content="What stuff do I use? — My little corner on the internet, come take a look!"
	/>
</svelte:head>

<div
	class="bg-stars flex min-h-screen flex-col items-center justify-start gap-8 p-8 px-5 text-cosmic-sparkle lg:px-32"
>
	<main>
		<header class="mt-8 mb-8 text-center">
			<h1 class="mb-2 font-great-vibes text-5xl">🛠️ Uses</h1>
			<p class="mx-auto max-w-xl text-lg">The stuff I use for.. anything basically!</p>
		</header>

		<div class="space-y-4">
			{#each uses as category}
				<section class="space-y-2">
					<h2 class="text-2xl font-bold">{category.category}</h2>
					<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{#each category.items as item}
							<div
								class="flex items-start gap-4 rounded-lg border-2 border-cosmic-pink/50 p-4 transition-colors hover:border-cosmic-pink hover:bg-cosmic-bg/50"
							>
								{#if item.icon}
									<img
										src={`https://skillicons.dev/icons?i=${item.icon}`}
										alt={item.name}
										class="h-10 w-10"
										loading="lazy"
									/>
								{/if}

								<div>
									<h3 class="font-semibold">{item.name}</h3>
									<p class="text-sm text-neutral-600 dark:text-neutral-400">{item.description}</p>
									{#if item.note}
										<p class="mt-1 text-xs text-neutral-500 italic">{item.note}</p>
									{/if}
									{#if item.image}
										{@const type = item.image.type}
										<img
											src={item.image.url}
											alt={item.name}
											class={`mt-2 rounded-md ${type === 'square' ? 'w-xs' : type === 'portrait' ? 'w-2xs' : 'w-full'}`}
											loading="lazy"
										/>
									{/if}
								</div>
							</div>
						{/each}
					</div>
				</section>
			{/each}
		</div>
	</main>

	<footer class="mt-auto mb-8 text-center">
		<a href="/" class="sparkle-link text-2xl">🏠 Back to Home</a>
	</footer>
</div>
