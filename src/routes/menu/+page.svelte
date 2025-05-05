<script lang="ts">
	import { writable } from 'svelte/store';
	import { MENU_ITEMS, type MenuItem } from '$constants/menu';
	import { onMount } from 'svelte';

	const menuItems = writable<MenuItem[]>([]);

	onMount(() => {
		menuItems.set([...MENU_ITEMS]);
	});

	const addRow = () => {
		menuItems.update((items) => [
			...items,
			{
				id: '',
				name: '',
				parentId: null,
				order: items.length + 1,
				url: '',
				isFolder: false
			}
		]);
	};

	const deleteRow = (index: number) => {
		menuItems.update((items) => {
			const updated = [...items];
			updated.splice(index, 1);
			return updated;
		});
	};

	const validateItem = (item: MenuItem) => {
		if (!item.id.trim() || !item.name.trim()) return false;
		if (isNaN(item.order)) return false;
		return true;
	};

	const save = () => {
		menuItems.update((items) => {
			if (items.some((item) => !validateItem(item))) {
				alert('모든 필드를 올바르게 입력해주세요.');
				return items;
			}
			// 저장 로직 (ex. 파일 쓰기 or 콘솔 출력)
			console.log('✅ 저장된 메뉴:', JSON.stringify(items, null, 2));
			return items;
		});
	};
</script>

<div class="p-4 space-y-4">
	<div class="flex justify-between items-center">
		<h2 class="text-xl font-bold">📁 메뉴 관리</h2>
		<button
			on:click={save}
			class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 shadow"
		>
			저장
		</button>
	</div>

	<div class="overflow-x-auto border rounded shadow">
		<table class="min-w-full text-sm">
			<thead class="bg-gray-100 border-b">
				<tr>
					<th class="p-2">ID</th>
					<th class="p-2">이름</th>
					<th class="p-2">상위 ID</th>
					<th class="p-2">순서</th>
					<th class="p-2">URL</th>
					<th class="p-2">폴더</th>
					<th class="p-2">삭제</th>
				</tr>
			</thead>
			<tbody>
				{#each $menuItems as item, i (item.id + i)}
					<tr class="border-b hover:bg-gray-50">
						<td class="p-2">
							<input bind:value={item.id} class="w-full border rounded px-2 py-1" />
						</td>
						<td class="p-2">
							<input bind:value={item.name} class="w-full border rounded px-2 py-1" />
						</td>
						<td class="p-2">
							<input bind:value={item.parentId} class="w-full border rounded px-2 py-1" />
						</td>
						<td class="p-2">
							<input type="number" bind:value={item.order} class="w-full border rounded px-2 py-1" />
						</td>
						<td class="p-2">
							<input bind:value={item.url} class="w-full border rounded px-2 py-1" />
						</td>
						<td class="p-2 text-center">
							<input type="checkbox" bind:checked={item.isFolder} />
						</td>
						<td class="p-2 text-center">
							<button
								on:click={() => deleteRow(i)}
								class="text-red-500 hover:underline"
							>
								삭제
							</button>
						</td>
					</tr>
			{/each}
			</tbody>
		</table>
	</div>

	<div class="text-right">
		<button
			on:click={addRow}
			class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
		>
			+ 행 추가
		</button>
	</div>
</div>

<style>
	input[type='text'],
	input[type='number'] {
		outline: none;
	}
</style>
