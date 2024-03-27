import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Alert } from "@chakra-ui/react";

interface Game {
	id: number;
	name: string;
}

interface GameResponse {
	count: number;
	results: Game[];
}

const GameGrid = () => {
	const [games, setGames] = useState<Game[]>([]);
	const [err, setErr] = useState("");

	useEffect(() => {
		apiClient
			.get<GameResponse>("/games")
			.then((res) => {
				setGames(res.data.results);
			})
			.catch((err) => setErr(err.message));
	});

	return (
		<>
			{err && <Alert status="error">{err}</Alert>}
			<ul>
				{games.map((game) => (
					<li key={game.id}>{game.name}</li>
				))}
			</ul>
			;
		</>
	);
};

export default GameGrid;
