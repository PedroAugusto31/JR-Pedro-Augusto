<script setup lang="ts">
const props = defineProps({ show: Boolean });
</script>

<template>
	<Transition name="modal">
		<div
			v-if="show"
			class="modal-wrapper w-full h-full bg-black/50 fixed flex justify-center items-center transition-opacity duration-500 ease-linear z-10"
			@click.self="$emit('close')"
		>
			<div
				class="modal-container bg-gray-200 text-black w-xl min-h-20 rounded-md px-3 py-2 transition-transform duration-300 ease-linear"
			>
				<slot name="body"></slot>
			</div>
		</div>
	</Transition>
</template>
