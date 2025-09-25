import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';
import { SITE_TITLE, SITE_DESCRIPTION } from '@/content/config';


export async function GET(context) {
const posts = await getCollection('writeups');
return rss({
title: SITE_TITLE,
description: SITE_DESCRIPTION,
site: context.site,
items: posts.map((p) => ({
title: p.data.title,
pubDate: p.data.date,
description: p.data.summary,
link: `/writeups/${p.slug}`
}))
});
}