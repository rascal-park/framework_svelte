// menuStore.ts
import { writable } from 'svelte/store';
import { MENU_ITEMS } from '$constants/menu';

export const menuList = writable(MENU_ITEMS); // ✅ CRUD 대상

export const expanded = writable<Record<string, boolean>>({});

export const toggle = (id: string) => {
	expanded.update((map) => {
		map[id] = !map[id];
		return map;
	});
};

export const getChildren = (id: string) => {
	let items: typeof MENU_ITEMS = [];
	menuList.subscribe((v) => (items = v))(); // 즉시 구독 해제
	return items.filter((item) => item.parentId === id);
};
