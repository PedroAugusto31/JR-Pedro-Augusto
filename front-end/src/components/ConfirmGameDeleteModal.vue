<script setup lang="ts">
import Modal from "./Modal.vue";
import Button from "./Button.vue";
import type { GameProps } from "../types";
import { onUpdated } from "vue";
import { modals } from "../utils/modalUtils";

const props = defineProps<{
	isShowingModal: boolean;
	closeModalFunc: () => void;
	gamesList: GameProps[];
}>();

const emit = defineEmits<{
	(e: "delete", id: number): void;
}>();

function deleteGameFromList(id: number) {
	const index = props.gamesList.findIndex((game) => game.id! == id);

	if (index !== -1 && modals.value["confirmDeletion"].game?.id) {
		emit("delete", id);
		props.closeModalFunc();
	}
}

function closeModal() {
	props.closeModalFunc();
}
</script>

<template>
	<Modal :show="isShowingModal" @close="closeModal()">
		<template #body>
			<div class="h-20 flex items-center flex-col">
				<p class="text-lg">Tem certeza que deseja apagar o jogo da coleção?</p>
			</div>

			<div class="flex justify-end mb-1">
				<Button
					button-background-color="black"
					button-text-color="white"
					button-text="fechar"
					@click.prevent="closeModal()"
				/>

				<Button
					class="ml-2"
					button-background-color="red-600"
					button-text-color="white"
					button-text="Deletar"
					@click="deleteGameFromList(modals['confirmDeletion'].game!.id!)"
				/>
			</div>
		</template>
	</Modal>
</template>
