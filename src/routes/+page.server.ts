import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ cookies }) => {
	const session = cookies.get('session_id');

	if (session) {
		// 로그인한 경우 → 대시보드로
		throw redirect(302, '/main');
	}

	// 로그인 안 한 경우 → 로그인 페이지로
	throw redirect(302, '/auth/login');
};
