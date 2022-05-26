import React from "react";
import {Container, Stack, Box} from "@chakra-ui/react";

import Routes from "./routes";
import NavBar from "./screens/NavBar";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
      <Stack m={0} spacing={0}>
        <NavBar/>
        <Box>
          <Routes />
        </Box>
        <Footer/>
      </Stack>
  );
};

export default App;
