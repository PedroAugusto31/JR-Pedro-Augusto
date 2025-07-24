import type { AddEditGameProps } from "../types";

export async function addGame(gameInfo: AddEditGameProps) {
	const request = await fetch("http://localhost:3000/games", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			...gameInfo,
		}),
	});
}

export async function fetchData() {
	const request = await fetch("http://localhost:3000/games", {
		method: "GET",
	});
	const data = await request.json();

	return data;
}

export async function changeGameInfo(id: number, gameDataToBeChanged: AddEditGameProps) {
	const request = await fetch(`http://localhost:3000/games/${id}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			...gameDataToBeChanged,
		}),
	});
}

export async function deleteGame(id: number) {
	const request = await fetch(`http://localhost:3000/games/${id}`, {
		method: "DELETE",
	});
}
