<script lang="ts">
	let src = '/images/placeholder-image-square.jpg';
	function handleSubmit() {}
	let title: string;
	let photoUrl;
	let notes;
</script>

<form>
	<h2 class="text-4xl font-semibold">New Entry</h2>
	<div class="grid grid-flow-row sm:grid-cols-2 py-6 gap-6">
		<div class="">
			<img class="max-w-full object-cover aspect-3/2 sm:aspect-square" {src} alt="Preview" />
		</div>
		<div class="flex flex-col gap-6">
			<label class="flex flex-col">
				<h3 class="pb-3 font-semibold text-2xl">Title</h3>
				<input required bind:value={title} type="text" />
			</label>
			<label class="flex flex-col">
				<h3 class="pb-3 font-semibold text-2xl">Photo URL</h3>
				<input required type="text" />
			</label>
		</div>
		<div class="sm:col-span-2">
			<label class="flex flex-col">
				<h3 class="pb-3 font-semibold text-2xl">Notes</h3>
				<textarea required class="min-h-[8rem]" />
			</label>
		</div>
		<button
			on:click|preventDefault={handleSubmit}
			class="sm:col-span-2 place-self-end bg-purple-900 px-5 py-1 rounded-md text-white"
			>SAVE</button
		>
	</div>
</form>

<style>
	input,
	textarea {
		@apply rounded-md;
	}
	input:focus,
	textarea:focus {
		@apply border-transparent ring-2 ring-purple-900;
	}
</style>
