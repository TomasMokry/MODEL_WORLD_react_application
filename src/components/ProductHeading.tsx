import { Heading } from "@chakra-ui/react";

interface Props {
  productType: string;
}

const ProductHeading = ({ productType }: Props) => {
  let fullHeading = "3D MODELS " + productType;

  return (
    <Heading marginY="5px" as="h1">
      {fullHeading}
    </Heading>
  );
};

export default ProductHeading;
