<script lang="ts">
	import { MENU_ITEMS } from '$constants/menu';
	import MenuNode from '$components/common/MenuNode.svelte';

	const topMenus = MENU_ITEMS.filter((item) => item.parentId === null);
</script>

<nav class="space-y-2">
	{#each topMenus as menu}
		<MenuNode {menu} />
	{/each}
</nav>
