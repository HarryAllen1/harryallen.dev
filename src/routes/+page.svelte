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

	<div class="mt-8">
		<h2 class="text-2xl font-bold">Projects</h2>

		<div class="mt-4">
			<h3 class="font-semibold">TSA Teaming Wizard</h3>
			<p class="text-sm text-muted-foreground">TypeScript, Svelte, Firebase, shadcn</p>
			<a
				href="https://github.com/HarryAllen1/tsa-grouping-thing"
				target="_blank"
				class="text-sm text-muted-foreground underline"
			>
				Github
			</a>
			<p class="leading-7 not-first:mt-2">
				I built an app for my school to use to assist in running a technology club using Firebase
				and SvelteKit. It helped over 100 members and advisors form competitive event teams and
				organize chapter competitions and feedback.
			</p>
		</div>

		<div class="mt-6">
			<h3 class="font-semibold">Foodchain</h3>
			<p class="text-sm text-muted-foreground">
				TypeScript, Svelte, Supabase, SQL, HyperLedger Fablo, shadcn
			</p>
			<a
				href="https://github.com/HarryAllen1/foodchain"
				target="_blank"
				class="text-sm text-muted-foreground underline"
			>
				Github
			</a>
			<p class="leading-7 not-first:mt-2">
				I helped build an app that uses blockchain with HyperLedger Fablo to help farmers,
				consumers, and distributors securely and transparently monitor their supply chain, with a
				SvelteKit frontend.
			</p>
		</div>

		<div class="mt-6">
			<h3 class="font-semibold">Pantry Dash</h3>
			<p class="text-sm text-muted-foreground">
				TypeScript, Supabase, Flowbite, Tailwind, TensorFlow
			</p>
			<a
				href="https://github.com/HarryAllen1/pantry-dash"
				target="_blank"
				class="text-sm text-muted-foreground underline"
			>
				Github
			</a>
			<p class="leading-7 not-first:mt-2">
				I led a team to build a pantry-management web app that finds recipes based on a user's
				pantry ingredients, using Supabase/Postgres and SvelteKit, and that uses image recognition
				to track a user's fridge items with TensorFlow. It placed 3rd at the 2023 Washington TSA
				State conference and was a 2023 National TSA semifinalist for Software Development.
			</p>
		</div>
	</div>

	<div class="mt-8">
		<h2 class="text-2xl font-bold">Experience</h2>

		<div class="mt-4">
			<h3 class="font-semibold">Software Engineer Intern, Ladybug Ventures</h3>
			<p class="text-sm text-muted-foreground">June 2026 – current · Remote</p>
			<p class="leading-7 not-first:mt-2">I'm helping build a new AI-based social media app.</p>
		</div>

		<div class="mt-6">
			<h3 class="font-semibold">Software Engineer, King's Labs</h3>
			<p class="text-sm text-muted-foreground">November 2025 – current · London, UK</p>
			<p class="leading-7 not-first:mt-2">
				I built the UI for monitoring AI agent interviews using Next.js, helped create an AI
				interview agent that works over WhatsApp using ElevenLabs, and added internationalization to
				the dashboard with next-intl.
			</p>
		</div>

		<div class="mt-6">
			<h3 class="font-semibold">AI Intern, Velamentis</h3>
			<p class="text-sm text-muted-foreground">July 2025 – October 2025 · Remote</p>
			<p class="leading-7 not-first:mt-2">
				I researched the feasibility of and prototyped an AI search bot in Python that uses RAG,
				LangChain, LangGraph, and Claude tools to guide users to the right proprietary knowledge in
				a Chroma database while using guardrails. I also researched an AI chatbot that helps users
				write documentation, along with the potential pitfalls and risks of using LLMs in that
				space.
			</p>
		</div>

		<div class="mt-6">
			<h3 class="font-semibold">Software Engineer/Intern, Cartogram</h3>
			<p class="text-sm text-muted-foreground">July 2024 – August 2025 · Bellevue, WA, USA</p>
			<p class="leading-7 not-first:mt-2">
				I spearheaded a from-scratch rewrite of Cartogram's hospital wayfinding app in SvelteKit,
				improving the UI with shadcn-ui and boosting performance through server-side rendering (an
				83% reduction in first contentful paint, a 2150% reduction in direction-generation time, and
				a 178% reduction in app size). I implemented the kiosk UIs and worked directly with a
				hospital to build a custom touchscreen kiosk UI, improved accessibility, and added
				internationalization with Paraglide. I also integrated Bluetooth Low Energy wayfinding with
				Bluetooth beacons to enable live indoor navigation, added unit and end-to-end testing with
				Vitest and Playwright, re-implemented the map editor while streamlining its UI and
				authentication, built UI for multi-building hospitals, and optimized and automated
				deployment with CI/CD.
			</p>
		</div>

		<div class="mt-6">
			<h3 class="font-semibold">Chapter President, Secretary, Juanita High School TSA</h3>
			<p class="text-sm text-muted-foreground">September 2023 – June 2025 · Kirkland, WA, USA</p>
			<p class="leading-7 not-first:mt-2">
				I helped double our membership, jumping to the 5th largest chapter in Washington State, and
				built a web-based user and competition-management system.
			</p>
		</div>
	</div>
</div>
