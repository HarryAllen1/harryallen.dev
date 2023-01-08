import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST = (() => {
	throw redirect(301, 'https://github.com/HarryAllen1');
}) satisfies RequestHandler;
