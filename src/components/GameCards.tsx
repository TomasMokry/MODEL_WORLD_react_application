import React from "react";
import { Game } from "./GameGrid";

import { Card, Image, CardBody, Heading, Text } from "@chakra-ui/react";

interface Props {
  game: Game;
}

const GameCards = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={game.image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <Text>{game.description}</Text>
      </CardBody>
    </Card>
  );
};

export default GameCards;
