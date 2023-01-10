<script lang="ts">
	import { browser } from '$app/environment';
	import '@unocss/reset/tailwind.css';
	import { onMount } from 'svelte';
	import 'uno.css';
	import './theme.scss';

	onMount(async () => {
		if (browser) {
			const { inject } = await import('@vercel/analytics');
			inject();
		}
	});
</script>

<div class="prose max-w-full h-full">
	<slot />
</div>
