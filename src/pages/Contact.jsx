import React from "react";
import { Fragment } from "react";
import MetaData from "../components/layout/metadata/MetaData";

import {
  Container,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Stack,
  Button,
  Heading,
  useColorModeValue,
  VStack,
  Flex,
  Text,
  Icon,
  Divider,
  extendTheme,
  ChakraProvider,
} from "@chakra-ui/react";

import { MdSchedule } from "react-icons/md";
import { BsPhone } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

import { Link as ReachLink } from "react-router-dom";

const contactOptions = [
  {
    label: "Horario",
    value: "Lunes a Viernes de 8:00 am a 5:30 pm",
    icon: MdSchedule,
  },
  {
    label: "Llámanos",
    value: "+57 320 552-9060",
    icon: BsPhone,
  },
  {
    label: "Correo",
    value: "artelak@example.com",
    icon: HiOutlineMail,
  },
];

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

const Contact = () => {
  return (
    <>
      <MetaData title="Ingresar" />

      <ChakraProvider theme={theme}>
        <Container maxW="7xl" py={10} px={{ base: 5, md: 8 }}>
          <Stack spacing={10}>
            <Flex align="center" justify="center" direction="column">
              <Heading fontSize="4xl" mb={2} color="brand.100">
                Contáctanos
              </Heading>
              <Text fontSize="md" textAlign="center" color="brand.100">
                Conocer la opinión de nuestros clientes es muy importante para
                nosotros, extendemos la invitación a llenar nuestro formulario
                para solicitar información sobre los servicios y productos que
                ofrecemos. A la brevedad posible, uno de nuestros representantes
                atenderá la solicitud.
              </Text>
            </Flex>
            <Stack
              spacing={{ base: 6, md: 0 }}
              direction={{ base: "column", md: "row" }}
              justify="space-between"
            >
              {contactOptions.map((option, index) => (
                <Fragment key={index}>
                  <Stack
                    spacing={3}
                    direction="column"
                    justify="center"
                    alignItems="center"
                    px={3}
                    color="brand.100"
                  >
                    <Icon as={option.icon} w={10} h={10} color="brand.100" />
                    <Text fontSize="lg" fontWeight="semibold">
                      {option.label}
                    </Text>
                    <Text fontSize="md" textAlign="center">
                      {option.value}
                    </Text>
                  </Stack>
                  {contactOptions.length - 1 !== index && (
                    <Flex d={{ base: "none", md: "flex" }}>
                      <Divider orientation="vertical" />
                    </Flex>
                  )}
                </Fragment>
              ))}
            </Stack>
            <VStack
              as="form"
              spacing={8}
              w="100%"
              bg={useColorModeValue("white", "gray.700")}
              rounded="lg"
              boxShadow="lg"
              p={{ base: 5, sm: 10 }}
            >
              <VStack spacing={4} w="100%">
                <Stack
                  w="100%"
                  spacing={3}
                  direction={{ base: "column", md: "row" }}
                  color="brand.100"
                >
                  <FormControl id="name">
                    <FormLabel>Nombre: </FormLabel>
                    <Input type="text" placeholder="Ingresa tu nombre" rounded="md" />
                  </FormControl>
                  <FormControl id="email">
                    <FormLabel>Correo:</FormLabel>
                    <Input
                      type="email"
                      placeholder="tu-correo@ejemplo.com"
                      rounded="md"
                    />
                  </FormControl>
                </Stack>
                <FormControl id="subject">
                  <FormLabel>Asunto:</FormLabel>
                  <Input
                    type="text"
                    placeholder="Ingresa el asunto de tu mensaje"
                    rounded="md"
                  />
                </FormControl>
                <FormControl id="message">
                  <FormLabel>Mensaje:</FormLabel>
                  <Textarea
                    size="lg"
                    placeholder="Ingresa el contenido de tu mensaje"
                    rounded="md"
                  />
                </FormControl>
              </VStack>
              <VStack w="100%">
                <Button
                  loadingText="Enviando"
                  bg={"#12284C"}
                  color={"white"}
                  rounded="md"
                  w={{ base: "100%", md: "max-content" }}
                  _hover={{
                    bg: "#cc9e6a",
                  }}
                >
                  Enviar mensaje
                </Button>
              </VStack>
            </VStack>
          </Stack>
        </Container>
      </ChakraProvider>
    </>
  );
};

export default Contact;
