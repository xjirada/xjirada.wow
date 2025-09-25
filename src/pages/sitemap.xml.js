export async function GET({ site }) {
const urls = ['/', '/about'];
const body = urls.map((u) => `<url><loc>${new URL(u, site).href}</loc></url>`).join('');
return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${body}</urlset>`, {
headers: { 'Content-Type': 'application/xml' }
});
}