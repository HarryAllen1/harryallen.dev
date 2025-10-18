import { includeIgnoreFile } from '@eslint/compat';
import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import svelte from 'eslint-plugin-svelte';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';
import globals from 'globals';
import { fileURLToPath } from 'node:url';
import tseslint from 'typescript-eslint';
import svelteConfig from './svelte.config.js';

const gitignorePath = fileURLToPath(new URL('.gitignore', import.meta.url));

export default tseslint.config(
	includeIgnoreFile(gitignorePath),
	js.configs.recommended,
	...tseslint.configs.strictTypeChecked,
	...tseslint.configs.stylisticTypeChecked,
	...svelte.configs.recommended,
	prettier,
	...svelte.configs.prettier,
	eslintPluginUnicorn.configs.recommended,
	{
		languageOptions: {
			parserOptions: {
				extraFileExtensions: ['.svelte'],
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
			globals: {
				...globals.browser,
				...globals.node,
				google: 'readonly',
				gtag: 'readonly',
			},
		},
		rules: {
			// Ensures that correct values are returned, which is often a problem when generating directions.
			'@typescript-eslint/explicit-function-return-type': [
				'error',
				{
					allowExpressions: true,
				},
			],
			// Makes Svelte snippets unusable
			'@typescript-eslint/no-confusing-void-expression': 'off',
			// conflicts with Svelte $props rune
			'@typescript-eslint/no-unsafe-assignment': 'off',
			'@typescript-eslint/no-unsafe-call': 'off',
			'@typescript-eslint/only-throw-error': 'off',
			'@typescript-eslint/prefer-nullish-coalescing': 'off',
			'@typescript-eslint/prefer-promise-reject-errors': 'off',
			'@typescript-eslint/restrict-template-expressions': [
				'error',
				{
					allowAny: false,
					allowBoolean: true,
					allowNullish: false,
					allowNumber: true,
					allowRegExp: false,
					allowNever: false,
				},
			],
			'@typescript-eslint/unbound-method': 'off',
			'unicorn/no-array-reduce': 'off',
			'unicorn/no-await-expression-member': 'off',
			// prettier edits the fix away
			'unicorn/no-nested-ternary': 'off',
			'unicorn/filename-case': 'off',
			'unicorn/prefer-spread': 'off',
			'unicorn/prevent-abbreviations': [
				'error',
				{
					allowList: {
						$$Props: true,
						// arguments is often an illegal variable name
						args: true,
						dev: true,
						i: true,
						param: true,
						prod: true,
						Props: true,
						props: true,
						Ref: true,
						ref: true,
						src: true,
						utils: true,
					},
				},
			],
			curly: ['error', 'multi-line'],
			eqeqeq: 'error',
			'func-style': ['error', 'expression', { allowArrowFunctions: true }],
			'no-console': ['warn', { allow: ['warn', 'error'] }],
			yoda: 'error',
		},
		linterOptions: {
			reportUnusedDisableDirectives: 'error',
		},
	},
	{
		files: ['**/*.svelte', '**/*.svelte.ts', '**/*.svelte.js'],
		ignores: ['eslint.config.js', 'svelte.config.js'],
		languageOptions: {
			parserOptions: {
				projectService: true,
				extraFileExtensions: ['.svelte'],
				parser: tseslint.parser,
				svelteConfig,
			},
		},
		rules: {
			'unicorn/prefer-top-level-await': 'off',
			'@typescript-eslint/no-floating-promises': 'off',
		},
	},
	{
		ignores: [
			'src/lib/components/ui/',
			'src/lib/utils.ts',
			'static',
		],
	},
);
