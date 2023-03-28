import { sveltekit } from '@sveltejs/kit/vite';
import { presetTypography } from '@unocss/preset-typography';
import { presetUno } from '@unocss/preset-uno';
import { extname } from 'node:path';
import { extractorSvelte, presetAttributify } from 'unocss';
import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vite';
import { imagetools } from 'vite-imagetools';

const supportedExtensions = ['.png', '.jpg', '.jpeg'];

export default defineConfig({
	plugins: [
		imagetools({
			defaultDirectives: (url) => {
				const extension = extname(url.pathname);
				if (supportedExtensions.includes(extension)) {
					return new URLSearchParams({
						format: 'avif;webp;' + extension.slice(1),
						picture: 'true',
					});
				}
				return new URLSearchParams();
			},
		}),
		UnoCSS({
			extractors: [extractorSvelte],
			presets: [presetUno(), presetTypography(), presetAttributify()],
			theme: {
				colors: {
					red: 'var(--md-sys-color-error, #b3261e)',
					grey: 'var(--md-sys-color-outline, #79747e)',
					gray: 'var(--md-sys-color-outline, #79747e)',
				},
			},
		}),
		sveltekit(),
	],

	build: {
		sourcemap: true,
	},
});
