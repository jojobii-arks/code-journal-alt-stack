<script>
	import Header from '../lib/components/Header.svelte';
	import EntryForm from '$lib/components/EntryForm.svelte';
	let currentView = EntryForm;
</script>

<svelte:head>
	<link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
</svelte:head>

<Header {currentView} />

<div class="p-6 flex justify-center">
	<div class="max-w-screen-md">
		<svelte:component this={currentView} />
	</div>
</div>
