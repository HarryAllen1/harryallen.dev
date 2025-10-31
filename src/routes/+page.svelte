<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import FileTextIcon from '@lucide/svelte/icons/file-text';
	import GithubIcon from '@lucide/svelte/icons/github';
	import LinkedInIcon from '@lucide/svelte/icons/linkedin';
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
			<LinkedInIcon />
			<span class="sr-only"> LinkedIn </span>
		</Button>

		<Button href="/Harry Allen_Resume.pdf" size="icon" variant="ghost" target="_blank">
			<FileTextIcon />
			<span class="sr-only"> CV </span>
		</Button>
	</div>
</div>
