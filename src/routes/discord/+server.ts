import { redirect } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET = (() => {
	throw redirect(301, 'https://discord.com/users/696554549418262548');
}) satisfies RequestHandler;
