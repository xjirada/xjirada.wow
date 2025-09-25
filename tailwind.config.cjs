/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
'./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}',
'./public/**/*.html'
],
theme: {
extend: {
colors: {
bg: '#0b0f14',
card: '#111827',
text: '#e5e7eb',
accent: '#22d3ee'
}
}
},
plugins: []
};