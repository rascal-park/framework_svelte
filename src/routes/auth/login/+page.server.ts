import type { Actions, RequestEvent } from './$types';
import { redirect, fail } from '@sveltejs/kit';

// 가짜 유저 DB
const users = [
	{ id: 1, username: 'systemout', password: '1111' },
	{ id: 2, username: 'rascal', password: '1111' }
];

export const actions: Actions = {
	default: async ({ request, cookies }: RequestEvent) => {
		const form = await request.formData();
		const username = form.get('username');
		const password = form.get('password');

		const found = users.find((user) => user.username === username && user.password === password);

		if (!found) {
			return fail(401, { message: 'Unauthorized' });
		}

		// 쿠키에 로그인 세션 저장 (예시)
		cookies.set('session_id', `mock-session-${found.id}`, {
			path: '/',
			maxAge: 60 * 60 * 24
		});

		throw redirect(303, '/main');
	}
};
