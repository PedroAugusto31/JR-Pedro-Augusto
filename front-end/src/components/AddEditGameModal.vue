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
				platforms: [],
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
	// this.errors.username = ''; // Clear previous errors
	if (!newGame.value.title) {
		alert("Game title field is required!");
	} else if (newGame.value.title.length < 3) {
		alert("Game title must be at least 3 characters.");
	}

	//   if (!this.errors.username) {
	//     // Form is valid, proceed with submission
	//     alert('Form submitted successfully!');
	//   }
}
</script>

<template>
	<Modal :show="isShowingModal" @close="closeModalFunc()">
		<!--  -->
		<template #body>
			<form @submit.prevent="handleFormSubmit()" class="flex flex-col">
				<label class="flex flex-col">
					Título do jogo*
					<input
						type="text"
						required
						class="border border-indigo-600 rounded-sm p-1 mb-4 outline-none"
						v-model="newGame.title"
					/>
				</label>
				<label class="flex flex-col">
					Ano de lançamento*
					<input
						type="number"
						required
						class="border border-indigo-600 rounded-sm p-1 mb-4 outline-none"
						v-model="newGame.releaseYear"
					/>
				</label>
				<label class="flex flex-col">
					Plataformas*
					<input
						type="text"
						required
						class="border border-indigo-600 rounded-sm p-1 mb-4 outline-none"
						v-model="newGame.platforms"
					/>
				</label>
				<label class="flex flex-col">
					Nota do jogo*
					<input
						type="number"
						min="0"
						max="10"
						required
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
					button-background-color="green-600"
					button-text-color="white"
					:button-text="props.game ? 'Editar' : 'Adicionar'"
					type="submit"
				/>
			</div>
		</template>
	</Modal>
</template>
