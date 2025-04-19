import flowbitePlugin from 'flowbite/plugin';

export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite/**/*.{js,ts}' // ✅ 이거 반드시 있어야 함!
	],
	plugins: [flowbitePlugin]
};
