import { Button } from "@chakra-ui/react";

interface Props {
  onClear: () => void;
}

const ShowAllButton = ({ onClear }: Props) => {
  return (
    <Button marginRight={5} onClick={onClear}>
      Show all
    </Button>
  );
};

export default ShowAllButton;
