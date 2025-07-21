<script setup lang="ts">
import { ref } from "vue";
import Modal from "./Modal.vue";
import Button from "./Button.vue";
import type { GameProps } from "../types";

const props = defineProps<{ isShowingModal: boolean; closeModalFunc: () => void; game?: GameProps }>();
const newGame = ref<GameProps>(
	props.game
		? props.game
		: {
				title: "",
				releaseYear: 0,
				platforms: "",
				rating: 0,
		  }
);

const emit = defineEmits<{
	addGame: [newGame: GameProps];
}>();

function handleFormSubmit() {
	if (newGame) {
		emit("addGame", newGame.value);
	}
}
</script>

<template>
	<Modal :show="isShowingModal" @close="closeModalFunc()">
		<!--  -->
		<template #body>
			<form @submit.prevent="handleFormSubmit()" class="flex flex-col">
				<label>
					Título do jogo*
					<input
						type="text"
						class="border border-indigo-600 rounded-sm p-1 mb-4 outline-none"
						v-model="newGame.title"
					/>
				</label>
				<label>
					Ano de lançamento*
					<input
						type="number"
						class="border border-indigo-600 rounded-sm p-1 mb-4 outline-none"
						v-model="newGame.releaseYear"
					/>
				</label>
				<label>
					Plataformas*
					<input
						type="text"
						class="border border-indigo-600 rounded-sm p-1 mb-4 outline-none"
						v-model="newGame.platforms"
					/>
				</label>
				<label>
					Nota do jogo*
					<input
						type="number"
						class="border border-indigo-600 rounded-sm p-1 mb-4 outline-none"
						v-model="newGame.rating"
					/>
				</label>
			</form>
		</template>
		<template #button-area>
			<div class="flex justify-end mb-1">
				<Button
					button-background-color="black"
					button-text-color="white"
					button-text="fechar"
					@click="closeModalFunc()"
				/>

				<Button
					class="ml-2"
					button-background-color="cyan-500"
					button-text="adicionar"
					button-text-color="black"
					type="submit"
				/>
			</div>
		</template>
	</Modal>
</template>
