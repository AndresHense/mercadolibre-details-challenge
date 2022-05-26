import React from "react";
import type { Product } from "./types";
import { VStack, Text, Image, Divider, HStack } from "@chakra-ui/react";

type Props = {
  max: number;
  title: string;
  products: Product[];
};
const ListProducts = ({ max, title, products }: Props) => {
  return (
    <VStack align="start">
      <Text fontSize="2xl">{title}</Text>
      <HStack spacing={4}>
        {products.slice(0, max).map((product,index) => (
          <VStack
            w="224px"
            borderColor="grey.200"
            bg="white"
            pb={5}
            borderRadius={5}
            borderWidth="1px"
            align="start"
            _hover={{ boxShadow: "1px 1px 4px gray" }}
            key={index}
          >
            <Image
              src={product.pictures[0].url}
              w="224px"
              h="224px"
              borderRadius={5}
            />
            <Divider />
            <Text fontSize="2xl" px={3}>
              ${product.price}
            </Text>
            <Text px={3}>{product.title}</Text>
          </VStack>
        ))}
      </HStack>
    </VStack>
  );
};

export default ListProducts;
