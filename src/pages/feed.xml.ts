import rss from '@astrojs/rss';
import { getCollection, type CollectionEntry } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
    const blog = (await getCollection("blog")).sort(
        (a, b) => b.data.date.valueOf() - a.data.date.valueOf(),
    );

    return rss({
        title: 'Iserila\'s Blog',
        description: 'Random thoughts/rants about anything that matters to me.',
        site: context.site!,
        stylesheet: '/rss/styles.xsl',
        items: blog.map((post: CollectionEntry<'blog'>) => ({
            title: post.data.title,
            pubDate: post.data.date,
            description: post.data.description,
            link: `/blog/${post.id}`
        })),
    });
}