import { Product } from "./ProductGrid";

import { Card, Image, CardBody, Heading, Text } from "@chakra-ui/react";

interface Props {
  product: Product;
}

const ProductCards = ({ product }: Props) => {
  return (
    <Card borderRadius={10} overflow={"hidden"}>
      <Image src={product.image} />
      <CardBody>
        <Heading fontSize="2xl">{product.name}</Heading>
        <Text>{product.description}</Text>
      </CardBody>
    </Card>
  );
};

export default ProductCards;
