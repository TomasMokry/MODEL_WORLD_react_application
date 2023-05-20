import { Button, ButtonGroup, Grid, GridItem } from "@chakra-ui/react";

function App() {
  return (
    <Grid templateAreas={`"nav" "main" `}>
      <GridItem area="nav" bg="coral">
        Nav
      </GridItem>
      <GridItem area="main" bg="dodgeblue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
