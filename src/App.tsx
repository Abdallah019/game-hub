import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
    >
      {/* Nav */}
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>

      {/* Aside */}
      <Show above="lg">
        <GridItem area={"aside"}>aside</GridItem>
      </Show>

      {/* Main */}
      <GridItem area={"main"}>main</GridItem>
    </Grid>
  );
}

export default App;
