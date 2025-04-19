import { writable } from 'svelte/store';
import { MENU_ITEMS } from '$constants/menu';

export const expanded = writable<Record<string, boolean>>({});

export const toggle = (id: string) => {
	expanded.update((map) => {
		map[id] = !map[id];
		return map;
	});
};

export const getChildren = (id: string) => MENU_ITEMS.filter((item) => item.parentId === id);
