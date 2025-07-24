import type { GameProps } from "../types";

export function validateForm(gameData: GameProps) {
	const formErrors = {
		titleError: false,
		releaseYearError: false,
		platformError: false,
		ratingError: false,
		isFormValid: false,
	};
	if (gameData.title.trim().length < 3) {
		formErrors.titleError = true;
	}
	if (gameData.releaseYear < 1958) {
		formErrors.releaseYearError = true;
	}
	if (gameData.platforms.length == 0) {
		formErrors.platformError = true;
	}
	if (gameData.rating > 10) {
		formErrors.ratingError = true;
	}
	if (
		formErrors.titleError == false &&
		formErrors.releaseYearError == false &&
		formErrors.platformError == false &&
		formErrors.ratingError == false
	) {
		formErrors.isFormValid = true;
	}
	return formErrors;
}
