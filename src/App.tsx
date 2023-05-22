import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import UsersDetails from "./components/GameGrid";
import GameGrid from "./components/GameGrid";
import TypeList from "./components/TypeList";
import TypesSelector from "./components/TypesSelector";
import GameHeading from "./components/GameHeading";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <TypeList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <GameHeading />
        <TypesSelector />
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
