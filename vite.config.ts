import { enhancedImages } from '@sveltejs/enhanced-img';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		enhancedImages(),
		tailwindcss(),
		sveltekit(),
	],
	build: {
		target: 'es2023',
	},
	server: {
		watch: {
			// test files are never imported so shouldn't ever trigger a reload
			ignored: ['**/*.test.ts', '**/*.test.js'],
		},
	},
});
