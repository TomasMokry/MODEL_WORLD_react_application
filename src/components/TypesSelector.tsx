import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

import { BsChevronDown } from "react-icons/bs";
import { Product } from "./ProductGrid";

interface Props {
  products: Product[];
  onSelectType: (type: string) => void;
}

const TypesSelector = ({ products, onSelectType }: Props) => {
  const removeDuplicateAges = (arr: Product[]): Product[] => {
    const uniqueAges: string[] = [];
    return arr.reduce((result: Product[], person: Product) => {
      if (!uniqueAges.includes(person.type)) {
        uniqueAges.push(person.type);
        result.push(person);
      }
      return result;
    }, []);
  };

  const newArray = removeDuplicateAges(products);

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
