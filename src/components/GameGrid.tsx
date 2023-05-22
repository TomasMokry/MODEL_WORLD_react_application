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

interface Props {
  games: Game[];
  selectedType: string;
}

const GameGrid = ({ games, selectedType }: Props) => {
  const getPersonsWithSameAge = (arr: Game[], type: string): Game[] => {
    if (type === "") return arr;
    return arr.filter((person) => person.type === type);
  };

  const newArray = getPersonsWithSameAge(games, selectedType);

  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={10}
        padding={10}
      >
        {newArray.map((game) => (
          <GameCards key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
