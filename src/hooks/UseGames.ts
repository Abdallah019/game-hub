import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGame = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: { genre: gameQuery.genre?.id, platforms: gameQuery.platform?.id },
    },
    [gameQuery]
  );
export default useGame;
