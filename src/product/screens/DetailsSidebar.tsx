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
import { IoIosReturnLeft } from "react-icons/io";
import { RiChat4Line } from "react-icons/ri";
import { BiCheckShield } from "react-icons/bi";
import { FaMedal, FaTrophy } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsLightningFill } from "react-icons/bs";

const DetailsSidebar = () => {
  return (
    <VStack
      w="35%"
      alignSelf="start"
      py={5}
      h="100%"
      position="sticky"
      bottom="0px"
      spacing={4}
    >
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
          <Select
            placeholder="1 unidad"
            w="auto"
            maxW={32}
            variant="unstyled"
            fontWeight="medium"
            px={0}
          >
            <option value="option1">1 unidad</option>
            <option value="option2">2 unidades</option>
            <option value="option3">3 unidades</option>
            <option value="option2">4 unidades</option>
            <option value="option3">5 unidades</option>
            <option value="option2">6 unidades</option>
            <option value="option3">Más de 6 unidades</option>
          </Select>
          <Text fontSize="sm" color="gray.500">
            (968 disponibles)
          </Text>
        </HStack>
        <Text fontSize="sm" w="100%" textAlign="start" color="green.400" pb={4}>
          Ahorrá el envio comprando 4 o más unidades
        </Text>
        <VStack w="100%">
          <Button
            w="100%"
            h={12}
            bg="#3483fa"
            _hover={{ bg: "#2372e9" }}
            color="white"
          >
            Comprar ahora
          </Button>
          <Button
            w="100%"
            h={12}
            bg="#e2edfc"
            _hover={{ bg: "#d1deb" }}
            color="blue.500"
          >
            Agregar al carrito
          </Button>
          <Button
            w="100%"
            h={12}
            bg="white"
            _hovoer={{ bg: "#e2edfc" }}
            color="blue.500"
          >
            Comprar con Mercado Crédito
          </Button>
        </VStack>
        <VStack w="100%" py={4}>
          <HStack w="100%" align="start">
            <Icon as={BiCheckShield} fontSize="lg" color="gray.500" mt={1.5} />
            <Text fontSize="sm">
              <Link>Compra Protegida</Link>, recibí el producto que esperabas o
              te devolvemos tu dinero.
            </Text>
          </HStack>
          <HStack w="100%">
            <Icon as={FaTrophy} color="gray.500" />
            <Text fontSize="sm">
              <Link>Mercado Puntos</Link>, Sumás 8 puntos.
            </Text>
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
        <Text w="100%" textAlign="start" fontSize="xl">
          Información sobre el vendedor
        </Text>
        <VStack w="100%" spacing={4}>
          <HStack w="100%" align="start" spacing={2}>
            <Icon as={GoLocation} mt={1} />
            <VStack align="start" spacing={0}>
              <Text fontSize="md">Ubicación</Text>
              <Text color="gray.500" fontSize="sm">
                Balvanera, Capital Federal
              </Text>
            </VStack>
          </HStack>
          <HStack w="100%" align="start" spacing={2}>
            <Icon as={FaMedal} color="green.400" mt={1} />
            <VStack align="start" spacing={0}>
              <Text fontSize="md" color="green.400">
                MercadoLíder Platinum
              </Text>
              <Text color="gray.500" fontSize="sm">
                ¡Es uno de los mejores del sitio!
              </Text>
            </VStack>
          </HStack>
          <HStack>
            <Box bg="#fff0f0" h={2} w={14} />
            <Box bg="#fff5e8" h={2} w={14} />
            <Box bg="#fffcda" h={2} w={14} />
            <Box bg="#f1fdd7" h={2} w={14} />
            <Box bg="#39b54a" h={3} w={14} />
          </HStack>
          <HStack h="90px" w="100%" justify="center" lineHeight={1}>
            <VStack w="33%" justify="start">
              <Text fontSize="xl" fontWeight="medium">
                4109
              </Text>
              <Text fontSize="xs" textAlign="center">
                Ventas en los ultimos 60 dias
              </Text>
            </VStack>
            <Divider orientation="vertical" h="70%" />
            <VStack w="33%" justify="start">
              <Avatar icon={<RiChat4Line />} bg="white" fontSize="xl" size="sm">
                <AvatarBadge boxSize="1em" bg="green.400" />
              </Avatar>
              <Text fontSize="xs" textAlign="center">
                Brinda buena atención
              </Text>
            </VStack>
            <Divider orientation="vertical" h="70%" />
            <VStack w="33%" justify="start" pt={2}>
              <Avatar
                icon={<AiOutlineClockCircle />}
                bg="white"
                fontSize="xl"
                size="sm"
              >
                <AvatarBadge boxSize="1em" bg="green.400" />
              </Avatar>
              <Text fontSize="xs" textAlign="center">
                Despacha sus productos a tiempo
              </Text>
            </VStack>
          </HStack>
        </VStack>
        <Link fontSize="sm" w="100%" textAlign="start" pb={4}>
          Ver más datos del vendedor
        </Link>
      </VStack>

      <VStack
        borderWidth="1px"
        borderColor="gray.300"
        borderRadius={5}
        px={0}
        py={4}
        w="100%"
        spacing={4}
        align="start"
      >
        <Text px={4} fontSize="sm" fontWeight="medium">
          ¡Suscribite al nivel 6 con 67% OFF!
        </Text>
        <Divider />
        <Image
          px={4}
          src="https://http2.mlstatic.com/D_NQ_NP_915001-MLA49852464272_052022-OO.png"
        />
        <VStack w="100%" align="start" spacing={1}>
          <Text px={4}>La oferta termina el 31 de mayo</Text>
          <Text px={4} pt={-2} color="gray.500">
            Tu suscripción anual por $ 399/mes incluye Disney+, Star+, miles de
            descuentos en compras y ¡mucho más!
          </Text>
        </VStack>
        <Divider />
        <Box w="100%" px={4}>
          <Button
            w="100%"
            fontSize="sm"
            h={8}
            fontWeight="medium"
            bg="#e2edfc"
            color="blue.500"
          >
            Subscribite al nivel 6
          </Button>
        </Box>
      </VStack>
      <VStack
        borderWidth="1px"
        borderColor="gray.300"
        borderRadius={5}
        px={0}
        py={6}
        w="100%"
        spacing={7}
        align="start"
      >
        <VStack px={4} align="start" spacing={6}>
          <Text fontSize="lg">Devolución gratis</Text>
          <Text fontSize="sm" color="gray.600">
            Tenés 30 días desde que recibís el producto para devolverlo. ¡No
            importa el motivo!
          </Text>
          <Link fontSize="sm">Conocer más sobre devoluciones</Link>
        </VStack>
        <Divider />
        <VStack px={4} align="start" spacing={6}>
          <Text fontSize="lg">Garantia</Text>
          <VStack w="100%" align="start" spacing={2}>
            <Text fontSize="md">Compra Protegida con Mercado Pago</Text>
            <Text fontSize="sm" color="gray.600">
              Recibí el producto que esperabas o te devolvemos tu dinero
            </Text>
          </VStack>
          <VStack w="100%" align="start" spacing={2}>
            <Text fontSize="md">Garantía del vendedor</Text>
            <Text fontSize="sm" color="gray.600">
              Sin garantía
            </Text>
          </VStack>
          <Link fontSize="sm">Conocer más sobre garantia</Link>
        </VStack>
        <Divider />
        <VStack px={4} align="start" spacing={6}>
          <Text fontSize="lg">Medios de pago</Text>
          <VStack w="100%" align="start">
            <Text>Hasta 12 coutas sin tarjeta</Text>
            <Image src="https://http2.mlstatic.com/storage/logos-api-admin/51b446b0-571c-11e8-9a2d-4b2bd7b1bf77-m.svg" />
          </VStack>
          <VStack w="100%" align="start" spacing={0}>
            <Text>Tarjetas de crédito</Text>
            <Text fontSize="sm" color="gray.600">
              ¡Cuotas sin interés con bancos seleccionados!
            </Text>
            <HStack pt={2} spacing={5}>
              <Image src="https://http2.mlstatic.com/storage/logos-api-admin/a5f047d0-9be0-11ec-aad4-c3381f368aaf-m.svg" />
              <Image src="https://http2.mlstatic.com/storage/logos-api-admin/b2c93a40-f3be-11eb-9984-b7076edb0bb7-m.svg" />
              <Image src="https://http2.mlstatic.com/storage/logos-api-admin/992bc350-f3be-11eb-826e-6db365b9e0dd-m.svg" />
              <Image src="https://http2.mlstatic.com/storage/logos-api-admin/aa2b8f70-5c85-11ec-ae75-df2bef173be2-m.svg" />
            </HStack>
          </VStack>
          <VStack w="100%" align="start">
            <Text>Tarjetas de dédito</Text>
            <HStack spacing={5}>
              <Image src="https://http2.mlstatic.com/storage/logos-api-admin/312238e0-571b-11e8-823a-758d95db88db-m.svg" />
              <Image src="https://http2.mlstatic.com/storage/logos-api-admin/ce454480-445f-11eb-bf78-3b1ee7bf744c-m.svg" />
              <Image src="https://http2.mlstatic.com/storage/logos-api-admin/157dce60-571b-11e8-95d8-631c1a9a92a9-m.svg" />
            </HStack>
            <Image src="https://http2.mlstatic.com/storage/logos-api-admin/cb0af1c0-f3be-11eb-8e0d-6f4af49bf82e-m.svg" />
          </VStack>
          <VStack w="100%" align="start">
            <Text>Efectivo</Text>
            <HStack spacing={5}>
              <Image src="https://http2.mlstatic.com/storage/logos-api-admin/fec5f230-06ee-11ea-8e1e-273366cc763d-m.svg" />
              <Image src="https://http2.mlstatic.com/storage/logos-api-admin/443c34d0-571b-11e8-823a-758d95db88db-m.svg" />
            </HStack>
          </VStack>
          <Link fontSize="sm">Conoce otros medios de pago</Link>
        </VStack>
      </VStack>
      <VStack
        borderWidth="1px"
        borderColor="gray.300"
        borderRadius={5}
        px={4}
        py={6}
        w="100%"
        spacing={7}
        align="start"
      >
        <HStack>
          <Text>Productos promocionados</Text>
          <Link fontSize="sm">Anunciá aquí</Link>
        </HStack>
        {mock.promocioned.map((product, index) => (
          <HStack key={index}>
            <Box borderColor="gray.300" borderWidth="1px" borderRadius={7}>
              <Image
                w={20}
                h={20}
                objectFit="cover"
                borderRadius={7}
                src={product.image}
              />
            </Box>
            <VStack align="start" spacing={0}>
              <Text fontSize="sm" color="gray.500">
                <del>{product?.originalPrice || ""}</del>
              </Text>
              <HStack>
                <Text fontSize="lg">{product.price}</Text>
                <Text fontSize="sm" color="green.400">
                  {product?.discount || ""}
                </Text>
              </HStack>
              <HStack spacing={1}>
                <Text fontSize="sm" color="green.400" fontWeight="medium">
                  {product.shipping && product?.shipping?.length > 0 ? product?.shipping[0] : ""}
                </Text>
                <Icon
                  display={ product.shipping && product?.shipping?.length > 0 ? "inherit" : "none"}
                  as={BsLightningFill}
                  color="green.500"
                  fontSize="sm"
                />
                <Text
                  fontSize="xs"
                  color="green.400"
                  fontWeight="bold"
                  textStyle="italic"
                >
                  {product.shipping && product?.shipping?.length > 0 ? product?.shipping[1] : ""}
                </Text>
              </HStack>
              <Text fontSize="sm">Peluche De Stitch Con Sonido</Text>
            </VStack>
          </HStack>
        ))}
      </VStack>
      <VStack
        borderWidth="1px"
        borderColor="gray.300"
        borderRadius={5}
        px={0}
        py={0}
        w="100%"
        spacing={7}
        align="start"
      >
        <VStack w="100%" bg="#e82e8a" align="center" px={4} py={6}>
          <Text fontWeight="bold" color="white" lineHeight={1} >
            mercado <br />
            shops
          </Text>
          <Text color="white" fontWeight="medium" lineHeight={1.12}>
            Compra en tiendas como si fuera de Comercio Abierto
          </Text>
        </VStack>
        
      </VStack>
    </VStack>
  );
};

export default DetailsSidebar;
