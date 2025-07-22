<script setup lang="ts">
import { onUpdated, ref } from "vue";
import Modal from "./Modal.vue";
import Button from "./Button.vue";
import { modals } from "../utils/modalUtils";
import type { AddEditGameProps } from "../types";

const props = defineProps<{ isShowingModal: boolean; closeModalFunc: () => void }>();
const GameInfo = ref<AddEditGameProps>({
	title: "",
	releaseYear: 0,
	platforms: [],
	rating: 0,
});

const emit = defineEmits<{
	addGame: [newGame: AddEditGameProps];
}>();

function handleFormSubmit() {
	if (GameInfo) {
		emit("addGame", GameInfo.value);
	}
	// formErrors = null;  Clear previous errors
	if (!GameInfo.value.title) {
		alert("Game title field is required!");
	} else if (GameInfo.value.title.length < 3) {
		alert("Game title must be at least 3 characters.");
	}

	//   if (noFormErrors) {
	//     alert('Form submitted successfully!');
	//   }
}
function closeModal() {
	modals.value["addEditModal"].game = {
		id: 0,
		title: "",
		releaseYear: 0,
		platforms: [],
		rating: 0,
	};
	props.closeModalFunc();
}
onUpdated(() => {
	if (modals.value["addEditModal"].game) {
		GameInfo.value = modals.value["addEditModal"].game;
	}
});
</script>

<template>
	<Modal :show="isShowingModal" @close="closeModal()">
		<template #body>
			<form @submit.prevent="handleFormSubmit()" class="flex flex-col">
				<label class="flex flex-col">
					Título do jogo*
					<input
						type="text"
						required
						class="border border-gray-600 rounded-sm p-1 mb-4 outline-none"
						v-model="GameInfo.title"
					/>
				</label>
				<label class="flex flex-col">
					Ano de lançamento*
					<input
						type="number"
						required
						class="border border-gray-600 rounded-sm p-1 mb-4 outline-none"
						v-model="GameInfo.releaseYear"
					/>
				</label>
				<label>Plataformas*</label>
				<div class="*:mr-1">
					<input type="checkbox" id="ps" value="Playstation" v-model="GameInfo.platforms" />
					<label for="ps">Playstation</label>

					<input type="checkbox" id="xbox" value="Xbox" v-model="GameInfo.platforms" />
					<label for="xbox">Xbox</label>

					<input type="checkbox" id="nintendo" value="Nintendo" v-model="GameInfo.platforms" />
					<label for="nintendo">Nintendo</label>
					<input type="checkbox" id="pc" value="Pc" v-model="GameInfo.platforms" />
					<label for="pc">Pc</label>
				</div>
				<label class="flex flex-col">
					Nota do jogo*
					<input
						type="number"
						min="0"
						max="10"
						required
						class="border border-gray-600 rounded-sm p-1 mb-4 outline-none"
						v-model="GameInfo.rating"
					/>
				</label>
			</form>
		</template>
		<template #button-area>
			<div class="flex justify-end mb-1">
				<Button button-background-color="black" button-text-color="white" button-text="fechar" @click="closeModal()" />

				<Button
					class="ml-2"
					button-background-color="green-600"
					button-text-color="white"
					:button-text="GameInfo.title !== '' ? 'Editar' : 'Adicionar'"
					type="submit"
				/>
			</div>
		</template>
	</Modal>
</template>
