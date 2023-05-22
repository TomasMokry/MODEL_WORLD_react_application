import { Grid, GridItem } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import ProductGrid from "./components/ProductGrid";
import TypesSelector from "./components/TypesSelector";
import ProductHeading from "./components/ProductHeading";
import { useState } from "react";
import data from "./data/gameData.json";
import ShowAllButton from "./components/ShowAllButton";

function App() {
  const [products, setProducts] = useState(data);
  const [selectedType, setSelectedType] = useState("");

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>

      <GridItem paddingX={5} paddingY={5} area="main">
        <ProductHeading productType={selectedType} />
        <ShowAllButton onClear={() => setSelectedType("")} />
        <TypesSelector
          onSelectType={(type) => setSelectedType(type)}
          products={products}
        />
        <ProductGrid selectedType={selectedType} products={products} />
      </GridItem>
    </Grid>
  );
}

export default App;
