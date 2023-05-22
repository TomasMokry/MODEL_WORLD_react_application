import { Button } from "@chakra-ui/react";
import React from "react";

interface Props {
  onClear: () => void;
}

const ClearButton = ({ onClear }: Props) => {
  return <Button onClick={onClear}>Show all</Button>;
};

export default ClearButton;
