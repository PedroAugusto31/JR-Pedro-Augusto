<script setup lang="ts">
import { onMounted, ref } from "vue";
import type { GameProps } from "../types";

const gamesList = ref<GameProps[]>([]);
//  onMounted(() => {
//  	requisição aqui
//  });
</script>

<template>
	<div id="list-wrapper" class="h-[35rem] md:h-[42rem] mt-4 overflow-y-auto">
		<ul role="list" class="list-disc pl-8 marker:text-orange-600">
			<li v-for="game in gamesList">
				{{ game }}
			</li>
		</ul>
	</div>
</template>
