import React from "react";

import { chakra, extendTheme, ChakraProvider, Flex, Box, SimpleGrid, Button, Image } from "@chakra-ui/react";

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

import whyImg from "/images/stamp/jalav_ocre_azul_20cm.png";

const WhyArtelak = () => {
  return (
    <>
      <ChakraProvider theme={theme}>
          <Box
            shadow="xl"
            bg="white"
            p={10}
            mx="auto"
          >
            <SimpleGrid
              alignItems="center"
              columns={{
                base: 1,
                md: 2,
              }}
              flexDirection="column-reverse"
              spacingY={{
                base: 10,
                md: 32,
              }}
              spacingX={{
                base: 10,
                md: 24,
              }}
            >
              <Box
                order={{
                  base: "initial",
                  md: 2,
                }}
              >
                <chakra.h1
                mb={4}
                fontSize={{ base: "4xl", md: "4xl", lg: "5xl" }}
                fontWeight="bold"
                color="brand.100"
                lineHeight="shorter"
                textShadow="2px 0 currentcolor"
              >
                ¿Por qué <chakra.span color="brand.300">Artelak</chakra.span>? 
              </chakra.h1>
                <chakra.p 
                  mb={5}
                  textAlign={{
                    base: "left",
                    sm: "left",
                  }}
                  color="brand.100"
                  fontSize={{
                    md: "lg",
                  }}
                >
                  Porque necesitamos productos reales, procesos honestos y
                  rigurosos que permitan contribuir con una alimentación rica en
                  valores nutricionales.
                  <chakra.br />
                  <chakra.br />
                  Nuestros productos hablan de nuestros valores, esos que
                  nuestra familia nos ha inculcado y ese valor agregado sí que
                  hace competencia.
                  <chakra.br />
                  <chakra.br />
                  No nos interesa lucrarnos por engañar a nuestros clientes, nos
                  interesa un negocio justo, donde el comprador recibe lo que se
                  le ofrece. Un comprador exigente que tiene conciencia y
                  entendimiento de llevar a su hogar productos que cuiden su
                  salud. Al fin y al cabo saldrá más costoso curar una
                  enfermedad que prevenirla con comida de verdad.
                </chakra.p>
              </Box>
              <Image src={whyImg} alt="Logo" />
            </SimpleGrid>
          </Box>
      </ChakraProvider>
    </>
  );
};

export default WhyArtelak;
