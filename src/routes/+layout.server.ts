import type { LayoutServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';
import { layoutExcludePaths } from '$constants/layout-exclude-paths';

export const load: LayoutServerLoad = async ({ cookies, url }) => {
	const currentPath = url.pathname;
	const session = cookies.get('session_id');

	// layout 제외 경로면 보호하지 않음
	const isExcluded = layoutExcludePaths.some(
		(path) => currentPath === path || currentPath.startsWith(`${path}/`)
	);

	if (!isExcluded && !session) {
		// 보호 대상인데 세션이 없다면 로그인으로 튕김
		throw redirect(302, `/auth/login`);
	}

	return {
		userSession: session // 세션 정보를 layout/page에서 사용할 수 있음
	};
};
