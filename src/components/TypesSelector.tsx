import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import data from "./gameData.json";

const TypesSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button}>Types</MenuButton>
      <MenuList>
        {data.map((item) => (
          <MenuItem>{item.type}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default TypesSelector;
