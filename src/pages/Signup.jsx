import React from "react";
import MetaData from "../components/layout/metadata/MetaData";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  extendTheme,
  ChakraProvider,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

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

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <MetaData title="Registro" />
      <ChakraProvider theme={theme}>
        <Flex minH={"50vh"} align={"center"} justify={"center"}>
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Stack align={"center"} color="brand.100">
              <Heading fontSize={"4xl"} textAlign={"center"}>
                Regístrate
              </Heading>
              <Text fontSize={"lg"} color={"brand.100"}>
                Para acceder al contenido de{" "}
                <Link color={"brand.300"}>Artelak</Link>
              </Text>
            </Stack>
            <Box
              rounded={"lg"}
              bg={useColorModeValue("white", "gray.700")}
              boxShadow={"lg"}
              p={8}
            >
              <Stack spacing={4}>
                <HStack>
                  <Box>
                    <FormControl id="firstName" isRequired>
                      <FormLabel>Nombres:</FormLabel>
                      <Input type="text" />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl id="lastName">
                      <FormLabel>Apellidos:</FormLabel>
                      <Input type="text" />
                    </FormControl>
                  </Box>
                </HStack>
                <FormControl id="email" isRequired>
                  <FormLabel>E-mail:</FormLabel>
                  <Input type="email" />
                </FormControl>
                <FormControl id="password" isRequired>
                  <FormLabel>Contraseña:</FormLabel>
                  <InputGroup>
                    <Input type={showPassword ? "text" : "password"} />
                    <InputRightElement h={"full"}>
                      <Button
                        variant={"ghost"}
                        onClick={() =>
                          setShowPassword((showPassword) => !showPassword)
                        }
                      >
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Stack spacing={10} pt={2}>
                  <Button
                    loadingText="Enviando"
                    bg={"#12284C"}
                    color={"white"}
                    _hover={{
                      bg: "#cc9e6a",
                    }}
                  >
                    Registrarse
                  </Button>
                </Stack>
                <Stack pt={6}>
                  <Text align={"center"}>
                    ¿Ya eres usuario?{" "}
                    <Link
                      as={ReachLink}
                      to="/login"
                      color={"brand.100"}
                      style={{ fontWeight: "bold" }}
                      _hover={{ textDecoration: "none", color: "brand.300" }}
                    >
                      Ingresar
                    </Link>
                  </Text>
                </Stack>
              </Stack>
            </Box>
          </Stack>
        </Flex>
      </ChakraProvider>
    </>
  );
};

export default Signup;
