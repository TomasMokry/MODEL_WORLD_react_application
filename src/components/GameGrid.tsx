import data from "./gameData.json";
import GameCards from "./GameCards";
import { SimpleGrid } from "@chakra-ui/react";

export interface Game {
  id: number;
  name: string;
  image: string;
  description: string;
  type: string;
}

const GameGrid = () => {
  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={10}
        padding={10}
      >
        {data.map((game) => (
          <GameCards key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
