import React from "react";
import MetaData from "../components/layout/metadata/MetaData";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  extendTheme,
  ChakraProvider,
} from "@chakra-ui/react";

import { Link as ReachLink } from "react-router-dom";

import { useState } from "react";
import { clearErrors, login } from "../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import LinearProgress from "@mui/material/LinearProgress";

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

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("");
  const dispatch = useDispatch();
  const {isAuthenticated, error, loading} = useSelector (state => state.authUser)

  useEffect(()=>{
    if (isAuthenticated){
      navigate("/");
    }
    if (error){
      dispatch(clearErrors)
    }
  },[dispatch, isAuthenticated, error])

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email,password))
  }

  return (
    
    <>
      <MetaData title="Ingresar" />

      {loading ? (
        <LinearProgress />
      ) : (

      <ChakraProvider theme={theme}>
        <Flex minH={"50vh"} align={"center"} justify={"center"}>
          <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
            <Stack align={"center"} color="brand.100">
              <Heading align={"center"} fontSize={"4xl"}>
                Inicia sesión en tu cuenta
              </Heading>
              <Text align={"center"} fontSize={"lg"} color={"#12284C"}>
                y disfruta de todas las funciones de la página
              </Text>
            </Stack>
            <Box
              rounded={"lg"}
              bg={useColorModeValue("white", "#12284C")}
              boxShadow={"lg"}
              p={8}
            >
              <form onSubmit={submitHandler}>
              <Stack spacing={4} color="#12284C">
                <FormControl id="email" isRequired>
                  <FormLabel>E-mail:</FormLabel>
                  <Input type="email" placeholder="tu-correo@email.com" onChange={(e) => setEmail(e.target.value)}/>
                </FormControl>
                <FormControl id="password" isRequired>
                  <FormLabel >Contraseña:</FormLabel>
                  <Input type="password" placeholder="********" onChange={(e) => setPassword(e.target.value)}/>
                </FormControl>
                <Stack spacing={10}>
                  <Stack
                    direction={{ base: "column", sm: "row" }}
                    align={"start"}
                    justify={"space-between"}
                  >
                    <Link
                      as={ReachLink}
                      to="/signup"
                      color={"brand.100"}
                      style={{ fontWeight: "bold" }}
                      _hover={{ textDecoration: "none", color: "brand.300" }}
                    >
                      Crear una cuenta
                    </Link>
                    <Link
                      as={ReachLink}
                      to="/forgotPassword"
                      color={"brand.100"}
                      style={{ fontWeight: "bold" }}
                      _hover={{ textDecoration: "none", color: "brand.300" }}
                    >
                      ¿Olvidaste tu contraseña?
                    </Link>
                  </Stack>
                  <Button
                    type="submit"
                    bg={"#12284C"}
                    color={"white"}
                    _hover={{
                      bg: "#cc9e6a",
                    }}
                  >
                    Ingresar
                  </Button>
                </Stack>
              </Stack>
              </form>
            </Box>
          </Stack>
        </Flex>
      </ChakraProvider>
      )}
    </>
  );
};

export default Login;