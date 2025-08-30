<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<!-- Basic SEO -->
	<title>Iserila ✨</title>
	<meta name="description" content="My little corner on the internet, come take a look!" />
	<meta
		name="keywords"
		content="indieweb, personal site, cats, journal, sparkles, dreamy, iserila"
	/>
	<meta name="author" content="Your Name" />

	<!-- Open Graph / social sharing -->
	<meta property="og:title" content="Iserila ✨" />
	<meta property="og:description" content="My little corner on the internet, come take a look!" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://iserila.com" />
	<meta property="og:image" content="https://iserila.com/iserila-button-highres.gif" />

	<!-- Twitter Cards -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Iserila ✨" />
	<meta name="twitter:description" content="My little corner on the internet, come take a look!" />
	<meta name="twitter:image" content="https://iserila.com/iserila-button-highres.gif" />

	<!-- Favicons -->
	<link rel="icon" href={favicon} />

	<!-- Font. -->
	<!-- <link rel="preload" href="/fonts/GreatVibes-Regular.woff2" as="font" type="font/woff2"> -->
</svelte:head>

{@render children?.()}
