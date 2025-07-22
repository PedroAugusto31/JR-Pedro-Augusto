<script setup lang="ts">
import { onMounted, ref } from "vue";
import type { GameProps } from "../types";
import Button from "./Button.vue";
import { modals, openModal } from "../utils/modalUtils";

const gamesList = ref<GameProps[]>([
	{
		id: 0,
		title: "Kingdom Hearts",
		releaseYear: 2002,
		platforms: ["Playstation"],
		rating: 10,
	},
	{
		id: 1,
		title: "Kingdom Hearts 2",
		releaseYear: 2005,
		platforms: ["Playstation"],
		rating: 10,
	},
]); // Inital value just for testing reasons

function deleteGameFromList(id: number) {
	gamesList.value = gamesList.value.filter((game) => game.id !== id);
	// TODO: Reorganize logic to DELETE request
}

//  onMounted(() => {
//  	TODO: Make GET request to get game list
//  });
function openEditModal(game: GameProps) {
	openModal("addEditModal");
	modals.value["addEditModal"].game = game;
}
</script>

<template>
	<div id="list-wrapper" class="h-[35rem] md:h-[42rem] mt-4 overflow-y-auto">
		<table class="mx-auto w-[77rem] overflow-y-auto">
			<thead class="border-b border-b-white">
				<tr>
					<th>Título</th>
					<th>Ano de Lançamento</th>
					<th>Plataformas</th>
					<th class="w-40">Nota</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="game in gamesList" class="text-center even:bg-blue-500/40 border-b border-b-white h-14 group">
					<td>{{ game.title }}</td>
					<td>{{ game.releaseYear }}</td>
					<td class="w-72 break-words">
						{{ game.platforms.join(", ") }}
					</td>
					<td class="relative w-80">
						{{ `${game.rating}/10` }}
						<div
							class="absolute cursor-pointer right-0 top-1/5 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition duration-400 ease-in-out"
						>
							<Button
								button-background-color="green-600"
								button-text-color="white"
								button-text="Editar"
								@click="openEditModal(game)"
							/>
							<Button
								button-background-color="red-500"
								button-text-color="white"
								button-text="Apagar"
								class="mx-1"
								@click="deleteGameFromList(game.id)"
							/>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
