import React from "react";

import {
  chakra,
  extendTheme,
  ChakraProvider,
  Box,
  SimpleGrid,
  Icon,
  Flex,
} from "@chakra-ui/react";

import { FaLeaf, FaMedal, FaHandsHelping } from "react-icons/fa";

const theme = extendTheme({
  colors: {
    brand: {
      100: "#12284C",
      200: "#dce0e5",
      300: "#cc9e6a",
      400: "#f2d9c7",
    },
  },
});

const Features = () => {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Box shadow="xl" bg="white" p={10} mx="auto">
          <Box
            textAlign="center"
          >
            <chakra.h2
              color="brand.100"
              fontWeight="semibold"
              textTransform="uppercase"
              letterSpacing="wide"
            >
              Características
            </chakra.h2>
            <chakra.p
              mt={2}
              fontSize={{
                base: "3xl",
                sm: "4xl",
              }}
              lineHeight="8"
              fontWeight="extrabold"
              letterSpacing="tight"
              color="brand.100"
            >
              Comida real para personas inteligentes
            </chakra.p>
            <chakra.p
              mt={4}
              maxW="2xl"
              fontSize="xl"
              mx={{
                lg: "auto",
              }}
              color="brand.100"
            >
              Somos 100% kosher Jalav Israel en Colombia.
            </chakra.p>
          </Box>

          <SimpleGrid
            columns={{
              base: 1,
              md: 2,
              lg: 3,
            }}
            pt={10}
            spacing={20}
            mx="auto"
          >
            <Box>
              <Flex direction="row" align="center" justify="center">
                <FaLeaf size={25}/>
                <chakra.h1
                  mb={3}
                  fontSize="lg"
                  lineHeight="shorter"
                  fontWeight="bold"
                  color="brand.100"
                  textAlign="center"
                  marginLeft={2}
                >
                  Productos naturales
                </chakra.h1>
              </Flex>
              <chakra.p lineHeight="tall" color="brand.100" mt={3}>
                Nuestros productos no contienen almidones ni espesantes.
              </chakra.p>
            </Box>

            <Box>
              <Flex direction="row" align="center" justify="center">
                <FaMedal size={25}/>
                <chakra.h1
                  mb={3}
                  fontSize="lg"
                  lineHeight="shorter"
                  fontWeight="bold"
                  color="brand.100"
                  textAlign="center"
                  marginLeft={2}
                >
                  Productos de calidad
                </chakra.h1>
              </Flex>
              <chakra.p lineHeight="tall" color="brand.100" mt={3}>
                Contamos con certificación Kosher Jalav Israel. Nuestra
                producción es responsable, apoyamos el silvo-pastoreo, práctica
                verde.
              </chakra.p>
            </Box>

            <Box>
              <Flex direction="row" align="center" justify="center">
                <FaHandsHelping size={25}/>
                <chakra.h1
                  mb={3}
                  fontSize="lg"
                  lineHeight="shorter"
                  fontWeight="bold"
                  color="brand.100"
                  textAlign="center"
                  marginLeft={2}
                >
                  Atención personalizada
                </chakra.h1>
              </Flex>
              <chakra.p lineHeight="tall" color="brand.100" mt={3}>
                Nos encargamos de realizar seguimiento desde a tu solicitud de
                pedido, hasta que llegue a la puerta de tu casa.
              </chakra.p>
            </Box>
          </SimpleGrid>
        </Box>
      </ChakraProvider>
    </>
  );
};

export default Features;
