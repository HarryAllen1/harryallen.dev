<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import FileTextIcon from '@lucide/svelte/icons/file-text';
	import GithubIcon from './GithubIcon.svelte';
	import LinkedIn from './LinkedIn.svelte';
</script>

<div class="container mx-auto my-8 max-w-3xl">
	<h1 class="text-3xl font-bold">Harry Allen</h1>

	<div>
		<Button href="https://github.com/HarryAllen1" size="icon" variant="ghost" target="_blank">
			<GithubIcon />
			<span class="sr-only"> Github </span>
		</Button>
		<Button
			href="https://www.linkedin.com/in/harry-m-allen/"
			size="icon"
			variant="ghost"
			target="_blank"
		>
			<LinkedIn />
			<span class="sr-only"> LinkedIn </span>
		</Button>

		<Button href="/Harry Allen_Resume.pdf" size="icon" variant="ghost" target="_blank">
			<FileTextIcon />
			<span class="sr-only"> CV </span>
		</Button>
	</div>

	<div class="mt-2">
		<p class="leading-7 not-first:mt-6">
			Hello! I'm a second year computer science undergraduate at King's College London. My
			experience primarily lies in software development (web development, computer vision), but I'm
			always curious about branching out into different fields, such as cybersecurity, machine
			learning, and IoT.
		</p>
		<p class="leading-7 not-first:mt-6">I also rock climb a lot.</p>
	</div>
</div>
