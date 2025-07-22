<script setup lang="ts">
import TableList from "./components/TableList.vue";
import { openModal, closeModal, modals } from "./utils/modalUtils";
import AddEditGameModal from "./components/AddEditGameModal.vue";
import Button from "./components/Button.vue";
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

		<TableList />
		<Teleport to="#app">
			<AddEditGameModal
				:isShowingModal="modals['addEditModal'].isModalOpen"
				:closeModalFunc="() => closeModal('addEditModal')"
			/>
		</Teleport>
	</div>
</template>
