<script setup lang="ts">
import type { ColorOptions } from "../types";
const props = defineProps<{
	buttonBackgroundColor: ColorOptions;
	buttonTextColor: ColorOptions;
	buttonText: String;
}>();
</script>

<template>
	<button
		:class="`bg-${buttonBackgroundColor} text-${buttonTextColor} w-fit min-w-24 p-2 cursor-pointer inline-flex items-center justify-evenly rounded-md transition duration-400 ease-in-out hover:brightness-75`"
	>
		{{ buttonText }}
	</button>
</template>
