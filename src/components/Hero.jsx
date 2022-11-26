import React from "react";

import {
  chakra,
  extendTheme,
  ChakraProvider,
  Flex,
  Box,
  SimpleGrid,
  Button,
  Image,
  Icon,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";

import orderNowImg from "../assets/images/content/delivery72RESO.png";

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


const Hero = () => {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Box shadow="xl" bg="white" p={10} mx="auto">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={0}>
            <Flex
              direction="column"
              alignItems="start"
              justifyContent="center"
              px={{ base: 4, md: 8, lg: 20 }}
              py={24}
              zIndex={3}
            >
              <chakra.span
                color="brand.100"
                fontSize="lg"
                textTransform="uppercase"
                fontWeight="extrabold"
              >
                Realiza tu pedido fácilmente
              </chakra.span>
              <chakra.h1
                mb={4}
                fontSize={{ base: "4xl", md: "4xl", lg: "5xl" }}
                fontWeight="bold"
                color="brand.100"
                lineHeight="shorter"
                textShadow="2px 0 currentcolor"
              >
                <chakra.span color="brand.300">¿Con antojos?</chakra.span>{" "}
                Porqué no darte un gusto{" "}
                <chakra.span color="brand.300">ahora.</chakra.span>
              </chakra.h1>
              <chakra.p
                pr={{ base: 0, lg: 16 }}
                mb={4}
                fontSize="lg"
                color="brand.600"
                _dark={{ color: "gray.400" }}
                letterSpacing="wider"
              >
                ¡Descubre los deliciosos sabores de nuestros productos!
              </chakra.p>
              <Button
                bg={"#12284C"}
                color={"white"}
                _hover={{
                  bg: "#cc9e6a",
                }}
              >
                <Link
                  to="/products"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Ordena ahora
                </Link>
              </Button>
            </Flex>
            <Flex>
              <Image
                src={orderNowImg}
                alt="Ordena ahora"
                fit="cover"
                w="full"
                h={{ base: 64, md: "full" }}
              />
            </Flex>
          </SimpleGrid>
        </Box>
      </ChakraProvider>
    </>
  );
};

export default Hero;
