import {
  Avatar,
  AvatarBadge,
  Badge,
  Box,
  Button,
  Divider,
  HStack,
  Icon,
  IconButton,
  Image,
  Input,
  Link,
  Select,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { AiFillStar, AiOutlineHeart } from "react-icons/ai";
import mock from "../mock";
import { FiTruck } from "react-icons/fi";
import { IoIosReturnLeft} from "react-icons/io";
import {RiChat4Line} from "react-icons/ri"
import {BiCheckShield} from 'react-icons/bi'
import {FaMedal, FaTrophy} from 'react-icons/fa'
import { GoLocation } from "react-icons/go";
import {AiOutlineClockCircle} from "react-icons/ai"

const DetailsSidebar = () => {
  return (
    <VStack w="35%" alignSelf="start" py={5}  h="100%" position="sticky" bottom="0px">
      <VStack
        borderWidth="1px"
        borderColor="gray.300"
        borderRadius={5}
        px={5}
        py={6}
        w="100%"
      >
        <Text w="100%" fontSize="xs" color="gray.500" textAlign="start">
          Nuevo | 1242 vendidos
        </Text>
        <HStack justify="space-between" align="start" w="100%">
          <Text fontSize="xl" fontWeight="medium" w="70%" lineHeight={1.25}>
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
          <Link alignSelf="start" pt={1} fontSize="sm">
            Ver los medios de pago
          </Link>
        </VStack>
        <VStack w="100%" align="start" py={3} spacing={3}>
          <HStack w="100%" align="start">
            <Icon as={FiTruck} fontSize="xl" color="green.500" />
            <VStack w="100%" align="start" spacing={0}>
              <Text color="green.500">Llega mañana</Text>
              <Link fontSize="sm">Ver más formas de entrega</Link>
            </VStack>
          </HStack>
          <HStack w="100%" align="start">
            <Icon as={IoIosReturnLeft} fontSize="2xl" color="green.500" />
            <VStack w="100%" align="start" spacing={0}>
              <Text color="green.500">Devolución gratis</Text>
              <Text fontSize="sm">Tenés 30 días desde que lo recibís</Text>
              <Link fontSize="sm">Conocér más</Link>
            </VStack>
          </HStack>
        </VStack>
        <Text fontWeight="medium" alignSelf="start">
          Stock disponible
        </Text>
        <HStack spacing={0} w="100%" align="center" justify="start">
          <Text>Cantidad:</Text>
          <Select placeholder="1 unidad" w="auto" maxW={32} variant="unstyled" fontWeight="medium" px={0}>
            <option value="option1">1 unidad</option>
            <option value="option2">2 unidades</option>
            <option value="option3">3 unidades</option>
            <option value="option2">4 unidades</option>
            <option value="option3">5 unidades</option>
            <option value="option2">6 unidades</option>
            <option value="option3">Más de 6 unidades</option>
          </Select>
          <Text fontSize="sm" color="gray.500">(968 disponibles)</Text>
        </HStack>
        <Text fontSize="sm" w="100%" textAlign="start" color="green.400" pb={4}>Ahorrá el envio comprando 4 o más unidades</Text>
        <VStack w="100%">
          <Button w="100%" h={12} bg="#3483fa" _hover={{bg:"#2372e9"}}color="white">Comprar ahora</Button>
          <Button w="100%" h={12} bg="#e2edfc" _hover={{bg:"#d1deb"}}color="blue.500">Agregar al carrito</Button>
          <Button w="100%" h={12} bg="white" _hovoer={{bg:"#e2edfc"}}color="blue.500">Comprar con Mercado Crédito</Button>
        </VStack>
        <VStack w="100%" py={4}>
          <HStack w="100%" align="start">
            <Icon as={BiCheckShield} fontSize="lg" color="gray.500" mt={1.5} />
            <Text fontSize="sm">
            <Link>Compra Protegida</Link>
            , recibí el producto que esperabas o te devolvemos tu dinero.</Text>
           
          </HStack>
          <HStack w="100%">
            <Icon as={FaTrophy} color="gray.500"/>
            <Text fontSize="sm">
            <Link>Mercado Puntos</Link>
             , Sumás 8 puntos.</Text>
          </HStack>
        </VStack>
      </VStack>
      <VStack
        borderWidth="1px"
        borderColor="gray.300"
        borderRadius={5}
        px={5}
        py={6}
        w="100%"
        spacing={6}
      >
        <Text w="100%" textAlign="start" fontSize="xl">Información sobre el vendedor</Text>
        <VStack w="100%" spacing={4}>
        <HStack w="100%" align="start" spacing={2}>
          <Icon as={GoLocation} mt={1}/>
          <VStack align="start" spacing={0}>
            <Text fontSize="md">Ubicación</Text>
            <Text color="gray.500" fontSize="sm">Balvanera, Capital Federal</Text>
          </VStack>
        </HStack>
        <HStack w="100%" align="start" spacing={2}>
          <Icon as={FaMedal} color="green.400" mt={1}/>
          <VStack align="start" spacing={0}>
            <Text fontSize="md" color="green.400">MercadoLíder Platinum</Text>
            <Text color="gray.500" fontSize="sm">¡Es uno de los mejores del sitio!</Text>
          </VStack>
        </HStack>
        <HStack>
          <Box bg="#fff0f0" h={2} w={14}/>
          <Box bg="#fff5e8" h={2} w={14}/>
          <Box bg="#fffcda" h={2} w={14}/>
          <Box bg="#f1fdd7" h={2} w={14}/>
          <Box bg="#39b54a" h={3} w={14}/>
        </HStack>
        <HStack h="90px" w="100%" justify="center" lineHeight={1}>
          <VStack w="33%" justify="start">
            <Text fontSize="xl" fontWeight="medium">4109</Text>
            <Text fontSize="xs" textAlign="center">Ventas en los ultimos 60 dias</Text>
          </VStack>
          <Divider orientation="vertical" h="70%"/>
          <VStack w="33%" justify="start">
            <Avatar icon={<RiChat4Line/>} bg="white" fontSize="xl" size="sm">
            <AvatarBadge boxSize='1em' bg='green.400' />
            </Avatar>
            <Text fontSize="xs" textAlign="center">Brinda buena atención</Text>
          </VStack>
          <Divider orientation="vertical" h="70%"/>
          <VStack w="33%" justify="start" pt={2}>
          <Avatar icon={<AiOutlineClockCircle/>} bg="white" fontSize="xl" size="sm">
            <AvatarBadge boxSize='1em' bg='green.400' />
            </Avatar>
            <Text fontSize="xs" textAlign="center">Despacha sus productos a tiempo</Text>
          </VStack>
        </HStack>
        </VStack>
        <Link fontSize="sm" w="100%" textAlign="start" pb={4}>Ver más datos del vendedor</Link>
      </VStack>

      <VStack borderWidth="1px"
        borderColor="gray.300"
        borderRadius={5}
        px={0}
        py={4}
        w="100%"
        spacing={4} align="start">
        <Text px={4} fontSize="sm" fontWeight="medium">¡Suscribite al nivel 6 con 67% OFF!</Text>
        <Divider/>
        <Image px={4} src="https://http2.mlstatic.com/D_NQ_NP_915001-MLA49852464272_052022-OO.png"/>
        <VStack w="100%" align="start" spacing={1}>
        <Text px={4}>La oferta termina el 31 de mayo</Text>
        <Text px={4} pt={-2}color="gray.500">Tu suscripción anual por $ 399/mes incluye Disney+, Star+, miles de descuentos en compras y ¡mucho más!</Text>
        
        </VStack>
       <Divider />
       <Box w="100%" px={4}>
       <Button w="100%"fontSize="sm" h={8} fontWeight="medium" bg="#e2edfc" color="blue.500">Subscribite al nivel 6</Button>
       </Box>
      </VStack>
      
    </VStack>
  );
};

export default DetailsSidebar;
