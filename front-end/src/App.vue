<script setup lang="ts">
import { ref } from "vue";
import TableList from "./components/TableList.vue";
import type { GameProps } from "./types";

const game = ref<GameProps>({
	title: "",
	releaseYear: 0,
	platforms: [],
	rating: 0,
});
const gamesList = ref<GameProps[]>([]);

function handleGameRegistry(game: GameProps) {
	if (game) {
		gamesList.value.push(game);
	}
}
</script>

<template>
	<div class="mx-auto px-6 mt-6 w-2xl md:w-7xl flex flex-col">
		<h1 class="text-5xl mb-2">Coleção de Jogos</h1>
		<input type="text" class="border border-indigo-600 rounded-sm p-1 mb-4 outline-none" v-model="game?.title" />

		<div class="button-wrapper flex justify-end mt-2">
			<button
				class="cursor-pointer inline-flex items-center justify-evenly px-3 w-30 h-8 rounded-sm bg-green-600 transition duration-400 ease-in-out hover:brightness-75"
				@click="handleGameRegistry(game)"
			>
				Adicionar <PhPlus :size="15" color="white" weight="regular" />
			</button>
		</div>

		<TableList :gamesList="gamesList" />
	</div>
</template>
