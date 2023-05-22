import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";

import GameGrid from "./components/GameGrid";
import TypeList from "./components/TypeList";
import TypesSelector from "./components/TypesSelector";
import GameHeading from "./components/GameHeading";
import { useState } from "react";
import data from "./components/gameData.json";
import ClearButton from "./components/ClearButton";

function App() {
  const [products, setProducts] = useState(data);
  const [selectedType, setSelectedType] = useState("");

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
        <ClearButton onClear={() => setSelectedType("")} />
        <TypesSelector
          onSelectType={(type) => setSelectedType(type)}
          games={products}
        />
        <GameGrid selectedType={selectedType} games={products} />
      </GridItem>
    </Grid>
  );
}

export default App;
