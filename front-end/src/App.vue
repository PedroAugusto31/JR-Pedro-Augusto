<script setup lang="ts">
import TableList from "./components/TableList.vue";
import { openModal, closeModal, modals } from "./utils/modalUtils";
import AddEditGameModal from "./components/AddEditGameModal.vue";
import Button from "./components/Button.vue";
import { onMounted, ref } from "vue";
import type { GameProps } from "./types";
import { addGame, changeGameInfo, deleteGame, fetchData } from "./utils/api";
import ConfirmGameDeleteModal from "./components/ConfirmGameDeleteModal.vue";

const gamesList = ref<GameProps[]>([]);

onMounted(() => {
	getGameList();
});

async function getGameList() {
	gamesList.value = await fetchData();
}

async function addGameToList(newGameData: GameProps) {
	await addGame({ ...newGameData, platforms: newGameData.platforms.join(",") });
	getGameList();
}

function editGameInfo(id: number, gameDataToBeChanged: GameProps) {
	const index = gamesList.value.findIndex((game) => game.id == id);

	gamesList.value[index] = gameDataToBeChanged;
	changeGameInfo(id, { ...gameDataToBeChanged, platforms: gameDataToBeChanged.platforms.join(",") });
}

async function deleteGameFromList(id: number) {
	await deleteGame(id);
	getGameList();
}
</script>

<template>
	<div class="mx-auto px-6 mt-6 w-2xl md:w-7xl flex flex-col">
		<h1 class="text-5xl mb-2">Coleção de Jogos</h1>

		<div class="button-wrapper flex justify-end mt-2">
			<Button
				buttonBackgroundColor="green-600"
				buttonTextColor="white"
				buttonText="Adicionar"
				@click="openModal('addEditModal')"
			/>
		</div>

		<TableList :gamesList @delete="deleteGameFromList" />
		<Teleport to="#app">
			<AddEditGameModal
				:isShowingModal="modals['addEditModal'].isModalOpen"
				:closeModalFunc="() => closeModal('addEditModal')"
				:gamesList
				@add="addGameToList"
				@edit="editGameInfo"
			/>
			<ConfirmGameDeleteModal
				:isShowingModal="modals['confirmDeletion'].isModalOpen"
				:closeModalFunc="() => closeModal('confirmDeletion')"
				:gamesList
				:getGameList
				@delete="deleteGameFromList"
			/>
		</Teleport>
	</div>
</template>
