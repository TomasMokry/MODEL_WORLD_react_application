import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import data from "./gameData.json";
import { BsChevronDown } from "react-icons/bs";
import { Game } from "./GameGrid";

interface Props {
  games: Game[];
  onSelectType: (type: string) => void;
}

const TypesSelector = ({ games, onSelectType }: Props) => {
  const removeDuplicateAges = (arr: Game[]): Game[] => {
    const uniqueAges: string[] = [];
    return arr.reduce((result: Game[], person: Game) => {
      if (!uniqueAges.includes(person.type)) {
        uniqueAges.push(person.type);
        result.push(person);
      }
      return result;
    }, []);
  };

  const newArray = removeDuplicateAges(games);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Select model type
      </MenuButton>
      <MenuList>
        {newArray.map((item) => (
          <MenuItem onClick={() => onSelectType(item.type)} key={item.id}>
            {item.type}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default TypesSelector;
