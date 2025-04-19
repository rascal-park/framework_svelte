<script>
	import Header from '$components/common/Header.svelte';
	import Footer from '$components/common/Footer.svelte';
	import Sidebar from '$components/common/Sidebar.svelte';
	import { page } from '$app/stores';
	import { layoutExcludePaths } from '$constants/layout-exclude-paths';

	// 현재 경로가 제외 대상인지 확인
	$: noLayout = layoutExcludePaths.some(
		(path) => $page.url.pathname === path || $page.url.pathname.startsWith(`${path}/`)
	);
</script>

{#if !noLayout}
	<div class="min-h-screen flex flex-col">
		<!-- Header (위에 고정) -->
		<Header />

		<!-- Sidebar + Main: 좌우 배치 -->
		<div class="flex flex-1 min-h-0">
			<!-- Sidebar (좌측 고정 + 토글) -->
			<aside
				class={`transition-all duration-300 bg-white border-r shadow-md w-64} overflow-hidden`}
			>
				<Sidebar />
			</aside>

			<!-- Main 컨텐츠 영역 -->
			<main class="flex-1 p-6 bg-gray-50 overflow-auto">
				<slot />
			</main>
		</div>

		<!-- Footer (아래 고정) -->
		<Footer />
	</div>
{:else}
	<!-- 제외 경로에서는 레이아웃 없이 -->
	<slot />
{/if}
