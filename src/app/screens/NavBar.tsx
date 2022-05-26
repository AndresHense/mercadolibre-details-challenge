import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Icon,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { BiCart } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { BsSearch } from "react-icons/bs";
const NavBar = () => {
  return (
    <Flex
      direction="column"
      bg="#fff159"
      w="100%"
      py={2}
      m={0}
      alignItems="center"
      px={0}
    >
      <Box w="75%" pl={24}>
        <HStack spacing={16} w="100%">
          <Button variant="unstyled">Comercio abierto</Button>
          <InputGroup bg="white" w="50%">
            <Input placeholder="Buscar productos, marcas y más..." />
            <InputRightElement w="4rem">
              <Divider orientation="vertical" pr={3} />
              <Icon as={BsSearch} />
            </InputRightElement>
          </InputGroup>
          <Text>
            Subscribite al nivel 6 por solo{" "}
            <Text as="span" fontWeight="bold">
              $399
            </Text>
          </Text>
        </HStack>
        <HStack spacing={4} mb={-2}>
          <Button variant="unstyled">
            <HStack spacing={1} >
              <Icon as={GoLocation}  fontSize="2xl" color="gray.600"/>
              <VStack lineHeight={1} align="start" spacing={0}>
                <Text color="gray.500" fontSize="xs" fontWeight="normal">Enviar a </Text>
                <Text color="gray.900" fontSize="sm" fontWeight="normal">Capital Federal</Text>
              </VStack>
            </HStack>
          </Button>

          <HStack pt={3} alignItems="space-between" justify="space-around" w="100%">
            <HStack   spacing={4}>
              <Text color="gray.600" fontSize="sm" _hover={{color:"black"}}>Categorias</Text>
              <Link color="gray.600" fontSize="sm" _hover={{color:"black"}}>
                Ofertas
              </Link>
              <Link color="gray.600" fontSize="sm" _hover={{color:"black"}}>Historial</Link>
              <Link color="gray.600" fontSize="sm" _hover={{color:"black"}}>Supermercado</Link>
              <Link color="gray.600" fontSize="sm" _hover={{color:"black"}}>Moda</Link>
              <Link color="gray.600" fontSize="sm" _hover={{color:"black"}}>Vender</Link>
              <Link color="gray.600" fontSize="sm" _hover={{color:"black"}}>Ayuda</Link>
            </HStack>
            <HStack  spacing={4}>
              <Link color="gray.800" fontSize="sm" _hover={{color:"black"}}>Creá tu cuenta</Link>
              <Link color="gray.800" fontSize="sm" _hover={{color:"black"}}>Ingresá</Link>
              <Link color="gray.800" fontSize="sm" _hover={{color:"black"}}>Mis compras</Link>
              <IconButton
                variant="unstyled"
                aria-label="changito"
                icon={<BiCart />}
                fontSize="2xl"
                color="gray.600"
              />
            </HStack>
          </HStack>
        </HStack>
      </Box>
    </Flex>
  );
};

export default NavBar;
