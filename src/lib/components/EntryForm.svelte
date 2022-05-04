<script>
	let src = '/images/placeholder-image-square.jpg';
</script>

<form>
	<h2 class="text-4xl font-semibold">New Entry</h2>
	<div class="grid grid-flow-row sm:grid-cols-2">
		<div class="py-6">
			<img class="max-w-full object-cover aspect-3/2 sm:aspect-square" {src} alt="Preview" />
		</div>
		<div class="grid">
			<label class="grid grid-flow-row">
				<h3 class="pb-3 font-semibold text-2xl">Title</h3>
				<input type="text" />
			</label>
			<label class="grid grid-flow-row">
				<h3 class="pb-3 font-semibold text-2xl">Photo URL</h3>
				<input type="text" />
			</label>
		</div>
		<div class="sm:col-span-2">
			<label class="grid grid-flow-row">
				<h3 class="pb-3 font-semibold text-2xl">Notes</h3>
				<textarea />
			</label>
		</div>
	</div>
</form>
