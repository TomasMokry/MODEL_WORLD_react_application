import ProductCards from "./ProductCards";
import { SimpleGrid } from "@chakra-ui/react";

export interface Product {
  id: number;
  name: string;
  image: string;
  description: string;
  type: string;
}

interface Props {
  products: Product[];
  selectedType: string;
}

const ProductGrid = ({ products, selectedType }: Props) => {
  const getPersonsWithSameAge = (arr: Product[], type: string): Product[] => {
    if (type === "") return arr;
    return arr.filter((person) => person.type === type);
  };

  const newArray = getPersonsWithSameAge(products, selectedType);

  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        paddingTop={5}
      >
        {newArray.map((product) => (
          <ProductCards key={product.id} product={product} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default ProductGrid;
