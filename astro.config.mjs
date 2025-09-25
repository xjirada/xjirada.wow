import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import netlify from '@astrojs/netlify/functions';


export default defineConfig({
site: 'https://your-domain.example', // replace if using custom domain
output: 'static',
integrations: [tailwind({ applyBaseStyles: false }), mdx()],
adapter: netlify(),
markdown: {
remarkPlugins: [import('remark-gfm').then(m => m.default)],
rehypePlugins: [import('rehype-slug').then(m => m.default)],
shikiConfig: {
theme: 'github-dark',
wrap: true
}
}
});