<script lang="ts">
	import { goto } from '$app/navigation';
	import { expanded, toggle, getChildren } from '$stores/menuStore';
	import type { MenuItem } from '$constants/menu';
	import MenuNode from './MenuNode.svelte';

	export let menu: MenuItem;
</script>

<div class="ml-2">
	<!-- ✅ 버튼 또는 링크로 변경 -->
	{#if menu.isFolder}
		<!-- 폴더인 경우: 토글 버튼 -->
		<button
			type="button"
			class="w-full text-left flex items-center gap-1 hover:text-blue-600 focus:outline-none"
			on:click={() => toggle(menu.id)}
		>
			<span>{$expanded[menu.id] ? '📂' : '📁'}</span>
			<span>{menu.name}</span>
		</button>
	{:else}
		<!-- 메뉴인 경우: 링크 -->
		<a href={menu.url} class="block pl-6 py-1 hover:text-blue-600 text-sm">
			{menu.name}
		</a>
	{/if}

	<!-- 자식 재귀 -->
	{#if menu.isFolder && $expanded[menu.id]}
		<div class="ml-4 space-y-1">
			{#each getChildren(menu.id) as child}
				<MenuNode menu={child} />
			{/each}
		</div>
	{/if}
</div>
