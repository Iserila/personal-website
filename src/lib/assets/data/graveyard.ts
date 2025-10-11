import type { GraveyardProject } from '$lib/types/global.interface';

const graveyardProjects: GraveyardProject[] = [
	{
		title: 'PixMatch',
		description:
			'An idea suggested by a friend. A platform to find matching profile pictures for you and your friends.',
		type: 'website',
		tags: ['profile', 'pictures'],
		image: {
			type: 'landscape',
			url: '/graveyard/pixmatch.png'
		}
	},
	{
		title: 'Hypixel Stats',
		description: 'A Discord bot that retrieves Hypixel player stats.',
		type: 'bot',
		tags: ['hypixel'],
		image: {
			type: 'landscape',
			url: '/graveyard/hypixel-stats.png'
		}
	},
	{
		title: 'RandomReddit',
		description: 'A Discord bot that retrieves random Reddit posts from subreddits you specify.',
		type: 'bot',
		tags: ['reddit'],
		image: {
			type: 'square',
			url: '/graveyard/random-reddit.png'
		}
	},
	{
		title: 'Divecloud Blogs',
		description:
			"A 'blogging' platform to write about news & stuff two friends and I find interesting.",
		type: 'website',
		tags: ['blog'],
		groupSize: 3
	},
	{
		title: 'Flower Language Wiki',
		description: 'A wiki about the language of flowers.',
		type: 'website',
		tags: ['wiki', 'flowers']
	},
	{
		title: 'Scarlet',
		description: 'Yet another general purpose Discord bot.',
		type: 'bot',
		tags: [],
		groupSize: 3
	},
	{
		title: 'FyxDash',
		description: 'A personal dashbaord to manage my CND assets on Cloudflare R2.',
		type: 'website',
		tags: ['dashboard', 'cloudflare'],
		image: {
			type: 'landscape',
			url: '/graveyard/fyxdash.png'
		}
	},
	{
		title: 'PreventSuicide',
		description:
			'A Discord bot focussed on preventing suicide by providing information and (at least an attempt at) recognizing messages indicating suicidal ideation.',
		type: 'bot',
		tags: ['suicide'],
		image: {
			type: 'landscape',
			url: '/graveyard/prevent-suicide.png'
		}
	},
	{
		title: 'MyHomework',
		description:
			'A platform meant to keep track, organize and plan your homework & tests. Never made it further than a really, really shitty design. I really have come a long way since then...',
		type: 'website',
		tags: ['homework'],
		image: {
			type: 'landscape',
			url: '/graveyard/myhomework.png'
		}
	},
	{
		title: 'Florida Man Calendar',
		description: 'A calendar that shows Florida Man activities for each day.',
		type: 'website',
		tags: [],
		groupSize: 2
	},
	{
		title: 'Mathy',
		description: 'A website to improve your mental math.',
		type: 'website',
		tags: ['math']
	},
	{
		title: 'exstare.eu',
		description: 'My first hosted website, back when I was called "Exstare".',
		type: 'website',
		tags: [],
		killed: true
	},
	{
		title: 'Card Collecting Game',
		description:
			'Self-explanatory. Ability to collect and trade cards from many different categories & subcategories.',
		type: 'website',
		tags: ['game', 'cards']
	}
];

export default graveyardProjects;
