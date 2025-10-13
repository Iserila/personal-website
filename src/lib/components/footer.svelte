<script lang="ts">
	import fanlistings from '$lib/assets/data/fanlistings';

	// I can't help but feel like there has to be an easier way
	const files: Object = import.meta.glob('/src/lib/assets/buttons/*.{png,jpg,jpeg,gif,svg}', {
		eager: true,
		import: 'default'
	});
	const buttons: string[] = Object.values(files);
</script>

<footer class="mt-16 flex flex-col items-center">
	<div class="flex flex-wrap items-center justify-center gap-4">
		{#each buttons as btn}
			<img src={btn} alt="Button" class="h-[31px] w-[88px]" />
		{/each}
	</div>

	<div class="mt-10 flex flex-col items-center text-center">
		<!-- The DevTools Lighthouse screams at me for using any heading tag, and I'm pretty sure I shouldn't use p, buuuuuut.... -->
		<p class="mb-2 font-cinzel text-2xl">🐈 Friends</p>
		<p class="mb-2">It's all about the friends we make along the way 🩷</p>

		<div class="flex flex-wrap items-center justify-center gap-2">
			<a href="https://beanrob.com">
				<img src="https://beanrob.com/static/button.gif" alt="beanrob button" />
			</a>
		</div>
		<div class="mt-6">
			<p class="italic">A lazy peasant without a ✨ button ✨</p>
			<a
				href="https://juliusdeboer.com"
				target="_blank"
				class="font-cinzel text-xl underline decoration-dotted">Julius</a
			>
		</div>
	</div>

	<div class="mt-10 flex flex-col items-center text-center">
		<!-- The DevTools Lighthouse screams at me for using any heading tag, and I'm pretty sure I shouldn't use p, buuuuuut.... -->
		<p class="mb-2 font-cinzel text-2xl">🌙 My Button</p>
		<p class="mb-2">Here's my button if you'd like to add me to your site ✨</p>

		<img
			src="/iserila-button.gif"
			class="mb-2 h-[31px] w-[88px] shadow-lg shadow-white/40"
			alt="Iserila 88x31 button"
		/>
		<div class="flex gap-2 text-xs">
			<a href="/iserila-button.gif" class="sparkle-link" rel="me" target="_blank">low-res</a>
			<a href="/iserila-button-highres.gif" class="sparkle-link" rel="me" target="_blank"
				>high-res</a
			>
		</div>
	</div>

	<div class="mt-10 flex flex-col items-center text-center">
		<p class="mb-2 font-cinzel text-2xl">🩵 Fanlistings</p>
		<p class="mb-2">Fanlistings I'm a part of (or applied to) 💫</p>
		<div class="flex flex-wrap items-center justify-center gap-2">
			{#each fanlistings as fanlisting}
				<a href={fanlisting.url}>
					<img
						src={fanlisting.image}
						alt={fanlisting.name + ' Fanlisting Icon'}
						title={fanlisting.name}
					/>
				</a>
			{/each}
		</div>
	</div>
</footer>
