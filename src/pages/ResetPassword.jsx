import React from "react";
import MetaData from "../components/layout/metadata/MetaData";

import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
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

const ResetPassword = () => {
  return (
    <>
      <MetaData title="Restablecer la contraseña" />

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
            color={"brand.100"}
          >
            <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
              Ingresa la nueva contraseña
            </Heading>
            <FormControl id="email" isRequired>
              <FormLabel>Correo:</FormLabel>
              <Input
                placeholder="your-email@example.com"
                _placeholder={{ color: "gray.500" }}
                type="email"
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Contraseña:</FormLabel>
              <Input type="password" />
            </FormControl>
            <Stack spacing={6}>
              <Button
                loadingText="Enviando"
                bg={"#12284C"}
                color={"white"}
                _hover={{
                  bg: "#cc9e6a",
                }}
              >
                Enviar
              </Button>
            </Stack>
          </Stack>
        </Flex>
      </ChakraProvider>
    </>
  );
};

export default ResetPassword;
