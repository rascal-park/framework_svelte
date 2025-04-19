import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ cookies }) => {
	// 세션 쿠키 삭제
	cookies.delete('session_id', { path: '/' });

	// 로그인 페이지로 리디렉션
	throw redirect(302, '/auth/login');
};
