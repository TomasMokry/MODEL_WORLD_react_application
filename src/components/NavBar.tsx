import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/8297677932_8c634899-707c-4689-86c4-f3b40961e3e5.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="170px" h="85px" padding="10px" />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
