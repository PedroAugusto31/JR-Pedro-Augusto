<script setup lang="ts">
import { onUpdated, ref, watchEffect } from "vue";
import Modal from "./Modal.vue";
import Button from "./Button.vue";
import { modals } from "../utils/modalUtils";
import type { GameProps } from "../types";
import { validateForm } from "../utils/formValidation";

const props = defineProps<{ isShowingModal: boolean; closeModalFunc: () => void; gamesList: GameProps[] }>();

const emit = defineEmits<{
	(e: "add", newGameData: GameProps): void;
	(e: "edit", id: number, gameDataToBeChanged: GameProps): void;
}>();

const formData = ref<GameProps>({
	title: "",
	releaseYear: 0,
	platforms: [],
	rating: 0,
});

const formErrors = ref({
	titleError: false,
	releaseYearError: false,
	platformError: false,
	ratingError: false,
	isFormValid: false,
});

function handleFormSubmit() {
	if (formErrors.value.isFormValid) {
		formData.value.id !== undefined ? editGame(formData.value.id, formData.value) : addGameToList(formData.value);
		closeModal();
	}
}

function addGameToList(newGameData: GameProps) {
	emit("add", newGameData);
}

function editGame(id: number, newGameData: GameProps) {
	emit("edit", id, newGameData);
}

function closeModal() {
	modals.value["addEditModal"].game = {
		title: "",
		releaseYear: 0,
		platforms: [],
		rating: 0,
	};
	props.closeModalFunc();
}

watchEffect(() => {
	const validatedFormErrors = validateForm(formData.value);
	formErrors.value = { ...validatedFormErrors };
});

onUpdated(() => {
	if (modals.value["addEditModal"].game) {
		formData.value = { ...modals.value["addEditModal"].game };
	}
});
</script>

<template>
	<Modal :show="isShowingModal" @close="closeModal()">
		<template #body>
			<form @submit.prevent="handleFormSubmit()" class="flex flex-col" novalidate>
				<div class="h-20 flex flex-col">
					<label> Título do jogo* </label>
					<input
						type="text"
						required
						class="border border-gray-600 rounded-sm p-1 outline-none"
						v-model="formData.title"
						:aria-invalid="formErrors.titleError"
						aria-describedby="invalid-helper"
					/>
					<small class="ml-1" id="invalid-helper" v-if="formErrors.titleError"> Título inválido! </small>
				</div>
				<div class="h-20 flex flex-col">
					<label> Ano de lançamento* </label>

					<input
						type="number"
						required
						class="border border-gray-600 rounded-sm p-1 outline-none"
						v-model="formData.releaseYear"
						:aria-invalid="formErrors.releaseYearError"
						aria-describedby="invalid-helper"
					/>
					<small class="ml-1" id="invalid-helper" v-if="formErrors.releaseYearError"> Data inválida! </small>
				</div>
				<div class="h-[4.5rem] flex flex-col">
					<label>Plataformas*</label>
					<div class="*:mr-1">
						<input type="checkbox" id="ps" value="Playstation" v-model="formData.platforms" />
						<label for="ps">Playstation</label>

						<input type="checkbox" id="xbox" value="Xbox" v-model="formData.platforms" />
						<label for="xbox">Xbox</label>

						<input type="checkbox" id="nintendo" value="Nintendo" v-model="formData.platforms" />
						<label for="nintendo">Nintendo</label>
						<input type="checkbox" id="pc" value="Pc" v-model="formData.platforms" />
						<label for="pc">Pc</label>
					</div>

					<small class="ml-1" id="invalid-helper" v-if="formErrors.platformError">
						Ao menos uma plataforma deve ser selecionada!
					</small>
				</div>

				<div class="h-20 flex flex-col">
					<label> Nota do jogo* </label>
					<input
						type="number"
						min="0"
						max="10"
						required
						class="border border-gray-600 rounded-sm p-1 outline-none"
						v-model="formData.rating"
						:aria-invalid="formErrors.ratingError"
						aria-describedby="invalid-helper"
					/>
					<small class="ml-1 text-red-500" id="invalid-helper" v-if="formErrors.ratingError">
						A nota do jogo só deve ir de 0 a 10!
					</small>
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
						button-background-color="green-600"
						button-text-color="white"
						:button-text="formData.id !== undefined ? 'Editar' : 'Adicionar'"
						type="submit"
					/>
				</div>
			</form>
		</template>
	</Modal>
</template>
