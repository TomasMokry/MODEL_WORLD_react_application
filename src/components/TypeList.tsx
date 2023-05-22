import React from "react";
import data from "./gameData.json";
import { HStack, List, ListItem, Image, Text } from "@chakra-ui/react";

const TypeList = () => {
  return (
    <List>
      {data.map((game) => (
        <ListItem paddingY="5px" key={game.id}>
          <HStack>
            <Image boxSize="32px" borderRadius={8} src={game.image} />
            <Text fontSize="lg">{game.type}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default TypeList;
