import React from "react";

import { Product } from "../types";
import mock from "../mock";
import {
  Badge,
  Box,
  Container,
  Divider,
  Flex,
  HStack,
  Icon,
  IconButton,
  Image,
  Link,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import ListProducts from "../ListProducts";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import DetailsSidebar from "./DetailsSidebar";

interface Props {
  product: Product;
}

const DetailsScreen: React.FC<Props> = ({ product = mock.product }) => {
  return (
    <Flex w="100%" direction="column" align="center" bg="#ededed" m="0" py={4}>
      <VStack align="start" w="65%">
        <HStack>
          <Text as="span" fontWeight="bold" fontSize="sm">
            También puede interesarte:{" "}
          </Text>
          <Text as="button" fontSize="sm">
            encanto disney
          </Text>
          <Text fontSize="sm"> - </Text>
          <Text as="button" fontSize="sm">
            fnaf peluches
          </Text>
        </HStack>
        <HStack w="100%" justify="space-between">
          <HStack fontSize="sm" pt={2}>
            <Text>Volver al listado</Text>
            <Text color="gray.500" px={1}>
              |
            </Text>
            <Link>Juegos y juguetes</Link>
            <Text color="gray.500" px={0}>
              {">"}
            </Text>
            <Link>Peluches</Link>
            <Text color="gray.500" px={0}>
              {">"}
            </Text>
            <Link>Stitch</Link>
          </HStack>
          <HStack fontSize="sm">
            <Link>Compartir</Link>
            <Text color="gray.500" px={1}>
              |
            </Text>
            <Link>Vender uno igual</Link>
          </HStack>
        </HStack>
      </VStack>
      <HStack
        bg="#fff"
        w="65%"
        borderColor="gray.300"
        borderWidth="1px"
        px={4}
        mt={3}
      >
        <VStack w="70%">
          <HStack px={0} align="start" alignSelf="start" py={4}>
            <VStack h="100%">
              {mock.product.pictures.map((picture) => (
                <Box borderColor="gray.300" borderWidth="2px" borderRadius={7}>
                  <Image
                    key={picture.id}
                    src={picture.url}
                    w={12}
                    h={12}
                    borderRadius={7}
                    objectFit="cover"
                  />
                </Box>
              ))}
            </VStack>
            <Flex justify="center" align="center" w="100%">
            <Image justifySelf="center" w="100%" src={mock.product.pictures[0].url} w="100%" />
            </Flex>
          </HStack>
          <VStack w="100%" px={8} spacing={8}>
            <Divider />
            <ListProducts
              max={3}
              title="Publicaciones del vendedor"
              products={Array(12).fill(mock.product)}
            />
            <Text
              py={6}
              w="100%"
              as="button"
              color="blue"
              fontWeight="normal"
              fontSize="sm"
              textAlign="start"
            >
              Ver más publicaciones del vendedor
            </Text>
            <Divider />
            <Text fontSize="2xl" w="100%" Textalign="start">
              Caracteristicas Principales
            </Text>
            <TableContainer w="100%">
              <Table variant="striped">
                <Tbody>
                  <Tr>
                    <Td>Marca</Td>
                    <Td bg="grey.200">Stich</Td>
                  </Tr>
                  <Tr>
                    <Td>Modelo</Td>
                    <Td>Stich&Lilo</Td>
                  </Tr>
                  <Tr>
                    <Td>Franquicia</Td>
                    <Td>Disney</Td>
                  </Tr>
                  <Tr>
                    <Td>Animal</Td>
                    <Td>Stich</Td>
                  </Tr>
                  <Tr>
                    <Td>Personaje</Td>
                    <Td>Stich</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
            <Text fontSize="xl" w="100%" textAlign="start">
              Otras Caracteristicas
            </Text>
            <HStack
              w="70%"
              justify="space-between"
              alignSelf="start"
              fontSize="sm"
            >
              <VStack align="start">
                <HStack>
                  <Text fontWeight="bold">Material:</Text>
                  <Text fontWeight="normal">Peluche</Text>
                </HStack>
                <HStack>
                  <Text fontWeight="bold">Es material hipoalergenico:</Text>
                  <Text fontWeight="normal">No</Text>
                </HStack>
              </VStack>
              <HStack>
                <Text fontWeight="bold">Altura x ancho:</Text>
                <Text fontWeight="normal">20 cm x 0 cm </Text>
              </HStack>
            </HStack>
            <Divider />
            <Text fontSize="2xl" textAlign="start" w="100%">
              Descripcion
            </Text>
            <Text color="gray.500" fontSize="xl">
              {mock.description.map((paragraph) => (
                <Text>
                  {paragraph}
                  <br />
                </Text>
              ))}
            </Text>
            <Text fontSize="2xl" w="100%" textAlign="start">
              Preguntas y respuestas
            </Text>
            <Text fontSize="xl" w="100%" textAlign="start" fontWeight="bold">
              ¿Qué querés saber?
            </Text>
          </VStack>
        </VStack>
        <DetailsSidebar/>
      </HStack>
      <Text textAlign="end" w="65%">
        Publicacion ID:#r30224
      </Text>
      <VStack spacing={16} py={8}>
        <ListProducts
          max={5}
          title="Productos promocionadoso"
          products={Array(12).fill(mock.product)}
        />
        <ListProducts
          max={5}
          title="Quienes vieron este producto también compraron"
          products={Array(12).fill(mock.product)}
        />
        <ListProducts
          max={5}
          title="Quienes compraron este producto también compraron"
          products={Array(12).fill(mock.product)}
        />
      </VStack>
    </Flex>
  );
};

export default DetailsScreen;
