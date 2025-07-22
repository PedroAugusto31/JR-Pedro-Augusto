import { ref } from "vue";
import type { GameProps } from "../types";

export const modals = ref<Record<string, { isModalOpen: boolean; game?: GameProps }>>({
	addEditModal: { isModalOpen: false },
	confirmDeletion: { isModalOpen: false },
});

export function openModal(name: string) {
	modals.value[name].isModalOpen = true;
}

export function closeModal(name: string) {
	modals.value[name].isModalOpen = false;
}
