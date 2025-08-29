<script setup lang="ts">
import type { GameProps } from "../types";
import Button from "./Button.vue";
import { modals, openModal } from "../utils/modalUtils";

const props = defineProps<{ gamesList: GameProps[] }>();

function openEditModal(game: GameProps) {
	openModal("addEditModal");
	modals.value["addEditModal"].game = game;
}
function openConfirmDeleteModal(game: GameProps) {
	openModal("confirmDeletion");
	modals.value["confirmDeletion"].game = game;
}
// TODO: Make game cover update correctly
</script>

<template>
	<div id="list-wrapper" class="h-[35rem] md:h-[42rem] mt-4 overflow-y-auto">
		<table class="mx-auto w-[77rem] overflow-y-auto">
			<thead class="border-b border-b-white">
				<tr>
					<th>Capa do jogo</th>
					<th>Título</th>
					<th>Ano de Lançamento</th>
					<th>Plataformas</th>
					<th class="w-40">Nota</th>
				</tr>
			</thead>
			<tbody>
				<tr
					class="text-center even:bg-blue-500/40 border-b border-b-white h-14 group *:w-80 *:break-words"
					v-for="game in gamesList"
					:key="game.id"
				>
					<td><img :src="game.gameCover" class="h-64 w-64 object-contain aspect-3/2" /></td>
					<td>{{ game.title }}</td>
					<td>{{ game.releaseYear }}</td>
					<td class="w-72 break-words">
						{{ game.platforms.join(", ") }}
					</td>
					<td class="relative">
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
								@click="openConfirmDeleteModal(game)"
							/>
						</div>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>
