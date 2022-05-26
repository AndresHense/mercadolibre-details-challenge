import React from "react";
import {Container, Stack, Box, VStack, Text} from "@chakra-ui/react";

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
        <VStack align="center" bg="#f6e05e" w="100%" py={3}>
            <Text fontSize="xl">@Disclaimer: Esta pagina es un desafio, no tiene ninguna relacion con la empresa de Mercado Libre, ni es un intento de estafa mediante Phishing</Text>
        </VStack>
      </Stack>
  );
};

export default App;
