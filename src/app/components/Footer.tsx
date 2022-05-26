import { Flex, HStack, Link, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Flex align="center" justify="center" w="92%" bg="white" direction="column">
        <VStack align="start" py={2} spacing={1}>
            <HStack fontSize="sm" >
                <Link color="gray.700" _hover={{color:"black"}}>Trabajá con nosotros</Link>
                <Link color="gray.700" _hover={{color:"black"}}>Términos y condiciones</Link>
                <Link color="gray.700" _hover={{color:"black"}}>Cómo cuidamos tu privacidad</Link>
                <Link color="gray.700" _hover={{color:"black"}}>Información al usuario financiero</Link>
                <Link color="gray.700" _hover={{color:"black"}}>Ayuda</Link>
                <Link color="gray.700" _hover={{color:"black"}}>Defensa al consumidor</Link>
                <Link color="gray.700" _hover={{color:"black"}}>Información sobre seguros</Link>
            </HStack>
            <Text fontSize="xs" color="gray.500" >Copyright © 1999-2022 MercadoLibre S.R.L.</Text>
            <Text fontSize="xs" color="gray.500" >Av. Caseros 3039, Piso 2, CP 1264, Parque Patricios, CABA</Text>
        </VStack>
    </Flex>
  )
}

export default Footer