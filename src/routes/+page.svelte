<script>
	import Footer from '$lib/components/footer.svelte';
</script>

<svelte:head>
	<title>Iserila ✨</title>
</svelte:head>

<div class="bg-stars flex h-screen flex-col items-center justify-center text-cosmic-sparkle px-5">
	<main class="text-center">
		<h1 class="mb-6 font-great-vibes text-5xl">🌙 Hiya, welcome!</h1>
		<p class="max-w-xl text-center text-xl">
			Hi, I'm Iserila👋 This is my corner of the web. Make yourself at home! 💫
		</p>

		<span class="cat-divider"></span>

		<nav class="mt-8 flex flex-wrap justify-center gap-8 font-cinzel">
			<a rel="me" href="/about" class="sparkle-link text-2xl"> 👋 About Me </a>
			<a rel="me" href="/now" class="sparkle-link text-2xl"> 🌟 Now </a>

			<!-- TODO: Soon..? -->
			<!-- <a rel="me" href="/journal" class="sparkle-link text-2xl"> 📖 Journal </a> -->
			<!-- <a rel="me" href="/projects" class="sparkle-link text-2xl"> 💻 Projects </a> -->
			<!-- <a rel="me" href="/cats" class="sparkle-link text-2xl"> 🐱 Kitties!! </a> -->
			<!-- <a rel="me" href="/uses" class="sparkle-link text-2xl"> 🛠️ What I use </a> -->
		</nav>
	</main>
	<Footer />
</div>
