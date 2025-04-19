<script lang="ts">
	import { Input, Button, Alert } from 'flowbite-svelte';
	import { page } from '$app/stores';
	import { ExclamationCircleSolid } from 'flowbite-svelte-icons';

	let username = '';
	let password = '';
	let error = '';

	$: error = $page.status === 401 ? '아이디 또는 비밀번호가 틀렸습니다.' : '';
</script>

<div
	class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 px-4"
>
	<form
		method="POST"
		class="w-full max-w-md bg-white/90 backdrop-blur p-8 rounded-2xl shadow-xl space-y-6 border border-blue-100"
	>
		<h1 class="text-3xl font-extrabold text-center text-blue-700 mb-2">🔐 로그인</h1>
		<p class="text-center text-sm text-gray-500">Svelte 프레임워크에 오신 걸 환영합니다</p>

		{#if error}
			<Alert color="red" class="text-sm">
				<span slot="icon">
					<ExclamationCircleSolid class="w-5 h-5" />
				</span>
				{error}
			</Alert>
		{/if}

		<div>
			<label for="username" class="block mb-1 text-sm font-medium text-gray-700">아이디</label>
			<Input
				id="username"
				name="username"
				bind:value={username}
				placeholder="아이디를 입력하세요"
				class="focus:ring-2 focus:ring-blue-400"
				required
			/>
		</div>

		<div>
			<label for="password" class="block mb-1 text-sm font-medium text-gray-700">비밀번호</label>
			<Input
				id="password"
				name="password"
				type="password"
				bind:value={password}
				placeholder="비밀번호를 입력하세요"
				class="focus:ring-2 focus:ring-blue-400"
				required
			/>
		</div>

		<Button type="submit" color="blue" class="w-full py-2 text-lg font-semibold rounded-lg">
			🚀 로그인
		</Button>
	</form>
	<script>
	</script>
</div>
