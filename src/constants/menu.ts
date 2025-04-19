export interface MenuItem {
	id: string;
	name: string;
	parentId: string | null;
	order: number;
	url?: string; // ✅ 이동할 URL (없으면 폴더)
	isFolder?: boolean; // ✅ 폴더 여부
}

export const MENU_ITEMS: MenuItem[] = [
	{ id: 'home', name: 'main', parentId: null, order: 1, url: '/main' },
	{ id: 'dashboard', name: '대시보드', parentId: null, order: 2, url: '/dashboard' },
	{ id: 'menu', name: '메뉴 관리', parentId: null, order: 3, isFolder: true },
	{ id: 'menu-list', name: '메뉴 목록', parentId: 'menu', order: 1, url: '/menu' },
	{ id: 'menu-add', name: '메뉴 추가', parentId: 'menu', order: 2, url: '/menu/add' }
];
