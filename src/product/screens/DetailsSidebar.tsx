import {
  Badge,
  HStack,
  Icon,
  IconButton,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import mock from "../mock";
import {FiTruck} from 'react-icons/fi'
import {IoIosReturnLeft} from 'react-icons/io'

const DetailsSidebar = () => {
  return (
    <VStack w="100%" alignSelf="start" py={5} position="sticky" top="-16px">
      <VStack
        borderWidth="1px"
        borderColor="gray.300"
        borderRadius={5}
        px={5}
        py={6}
      >
        <Text w="100%" fontSize="xs" color="gray.500" textAlign="start">
          Nuevo | 1242 vendidos
        </Text>
        <HStack justify="space-between" align="start" w="100%">
          <Text fontSize="xl" fontWeight="semibold" w="70%" lineHeight={1.25}>
            {mock.product.title}
          </Text>
          <IconButton
            variant="unstyled"
            icon={<AiOutlineHeart />}
            aria-label="likes"
            fontSize="3xl"
            color="blue.500"
          />
        </HStack>
        <HStack justify="start" w="100%" spacing={0.5}>
          <Icon as={AiFillStar} color="blue.400" />
          <Icon as={AiFillStar} color="blue.400" />
          <Icon as={AiFillStar} color="blue.400" />
          <Icon as={AiFillStar} color="blue.400" />
          <Icon as={AiFillStar} color="blue.400" />
          <Text fontSize="sm" pl={1} color="gray.500">
            64 opiniones
          </Text>
        </HStack>
        <HStack justify="start" w="100%">
          <Badge bg="orange.400" color="white">
            MÁS VENDIDO
          </Badge>
          <Link fontSize="xs">9° en Peluches</Link>
        </HStack>
        <VStack spacing={0}>
          <Text fontSize="3xl" w="100%" textAlign="start">
            $ 1.190
          </Text>
          <Text
            textAlign="start"
            fontSize="lg"
            alignSelf="start"
            lineHeight={1}
            w="80%"
          >
            en 12x de $ 211 pagando con Mercado Crédito
          </Text>
          <Link alignSelf="start" pt={1} fontSize="sm">Ver los medios de pago</Link>
        </VStack>
        <VStack  w="100%" align="start" py={3} spacing={3}>
            <HStack  w="100%" align="start">
                <Icon as={FiTruck} fontSize="xl"color="green.500"/>
                <VStack  w="100%" align="start" spacing={0}>
                    <Text color="green.500">Llega mañana</Text>
                    <Link fontSize="sm">Ver más formas de entrega</Link>
                </VStack>
            </HStack>
            <HStack  w="100%" align="start">
                <Icon as={IoIosReturnLeft} fontSize="2xl" color="green.500"/>
                <VStack  w="100%" align="start" spacing={0}>
                    <Text color="green.500">Devolución gratis</Text>
                    <Text fontSize="sm">Tenés 30 días desde que lo recibís</Text>
                    <Link fontSize="sm">Conocér más</Link>
                </VStack>
            </HStack>
        </VStack>
        <Text fontWeight="semibold" alignSelf="start">Stock disponible</Text>
      </VStack>
    </VStack>
  );
};

export default DetailsSidebar;
