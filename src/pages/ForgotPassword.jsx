import React from "react";
import MetaData from "../components/layout/metadata/MetaData";

import {
  Button,
  FormControl,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
  extendTheme,
  ChakraProvider,
  Link,
} from "@chakra-ui/react";

import { Link as ReachLink } from "react-router-dom";

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

const ForgotPassword = () => {
  return (
    <>
      <MetaData title="Olvidé la contraseña" />

      <ChakraProvider theme={theme}>
        <Flex minH={"50vh"} align={"center"} justify={"center"}>
          <Stack
            spacing={4}
            w={"full"}
            maxW={"md"}
            bg={useColorModeValue("white", "gray.700")}
            rounded={"xl"}
            boxShadow={"lg"}
            p={6}
            my={12}
            color="brand.100"
          >
            <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
              ¿Olvidaste tu contraseña?
            </Heading>
            <Text fontSize={{ base: "sm", sm: "md" }} color="brand.100">
              Recibirás un correo electrónico con un enlace de restablecimiento
            </Text>

            <FormControl id="email">
              <Input
                placeholder="tu-email@ejemplo.com"
                _placeholder={{ color: "gray.500" }}
                type="email"
              />
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              >
                <Link
                  as={ReachLink}
                  to="/login"
                  color={"brand.100"}
                  style={{ fontWeight: "bold" }}
                  _hover={{ textDecoration: "none", color: "brand.300" }}
                >
                  Ingresar
                </Link>
                <Link
                  as={ReachLink}
                  to="/resetPassword"
                  color={"brand.100"}
                  style={{ fontWeight: "bold" }}
                  _hover={{ textDecoration: "none", color: "brand.300" }}
                >
                  Restablecer contraseña
                </Link>
              </Stack>
              <Button
                loadingText="Enviando"
                bg={"#12284C"}
                color={"white"}
                _hover={{
                  bg: "#cc9e6a",
                }}
              >
                Solicitar el restablecimiento
              </Button>
            </Stack>
          </Stack>
        </Flex>
      </ChakraProvider>
    </>
  );
};

export default ForgotPassword;
