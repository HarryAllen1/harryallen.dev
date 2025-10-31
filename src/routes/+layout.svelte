<script lang="ts">
	import type { Snippet } from 'svelte';
	import '../app.css';

	interface Props {
		children?: Snippet;
	}

	let { children }: Props = $props();
</script>

<svelte:head>
	<title>Harry Allen</title>
</svelte:head>

<main>
	{@render children?.()}
</main>

<style>
	@keyframes fade-in {
		from {
			transform: translateY(-5px);
			opacity: 0;
		}
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}

	@media (prefers-reduced-motion: no-preference) {
		main {
			animation: fade-in normal 0.5s;
		}
	}
</style>
