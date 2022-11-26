import React from "react";
import MetaData from "../components/layout/metadata/MetaData";

import {
  chakra,
  extendTheme,
  ChakraProvider,
  Stack,
  SimpleGrid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Select,
  Box,
  Button,
  Flex,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

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

const Shipment = () => {
  return (
    <>
      <MetaData title="Envío" />
      <ChakraProvider theme={theme}>
        <Flex minH={"50vh"} align={"center"} justify={"center"}>
          <Stack spacing={8} mx={"auto"} py={12} px={6}>
            <Stack align={"center"} color="brand.100">
              <Heading align={"center"} fontSize={"4xl"}>
                Información de envío
              </Heading>
              <Text align={"center"} fontSize={"lg"} color={"#12284C"}>
                Registra la información para el envío de tu pedido
              </Text>
            </Stack>
            <Stack
              spacing={4}
              bg={useColorModeValue("white", "gray.700")}
              rounded={"xl"}
              boxShadow={"lg"}
              p={6}
              my={12}
              color="brand.100"
            >
              <chakra.form
                method="POST"
                shadow="base"
                rounded={[null, "md"]}
                overflow={{
                  sm: "hidden",
                }}
              >
                <Stack
                  px={4}
                  py={5}
                  p={[null, 6]}
                  bg="white"
                  _dark={{
                    bg: "#141517",
                  }}
                  spacing={6}
                >
                  <SimpleGrid columns={6} spacing={6}>
                    <FormControl as={GridItem} colSpan={[6, 3]}>
                      <FormLabel
                        htmlFor="first_name"
                        fontSize="sm"
                        fontWeight="md"
                        color="gray.700"
                        _dark={{
                          color: "gray.50",
                        }}
                      >
                        Nombres:
                      </FormLabel>
                      <Input
                        type="text"
                        name="first_name"
                        id="first_name"
                        autoComplete="given-name"
                        mt={1}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                      />
                    </FormControl>

                    <FormControl as={GridItem} colSpan={[6, 3]}>
                      <FormLabel
                        htmlFor="last_name"
                        fontSize="sm"
                        fontWeight="md"
                        color="gray.700"
                        _dark={{
                          color: "gray.50",
                        }}
                      >
                        Apellidos:
                      </FormLabel>
                      <Input
                        type="text"
                        name="last_name"
                        id="last_name"
                        autoComplete="family-name"
                        mt={1}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                      />
                    </FormControl>

                    <FormControl as={GridItem} colSpan={[6, 4]}>
                      <FormLabel
                        htmlFor="email_address"
                        fontSize="sm"
                        fontWeight="md"
                        color="gray.700"
                        _dark={{
                          color: "gray.50",
                        }}
                      >
                        Correo:
                      </FormLabel>
                      <Input
                        type="text"
                        name="email_address"
                        id="email_address"
                        autoComplete="email"
                        mt={1}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                      />
                    </FormControl>

                    <FormControl as={GridItem} colSpan={[6, 3]}>
                      <FormLabel
                        htmlFor="country"
                        fontSize="sm"
                        fontWeight="md"
                        color="gray.700"
                        _dark={{
                          color: "gray.50",
                        }}
                      >
                        País / Region
                      </FormLabel>
                      <Select
                        id="country"
                        name="country"
                        autoComplete="country"
                        placeholder="Seleccionar opción"
                        mt={1}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                      >
                        <option>Colombia</option>
                        <option>Estados Unidos</option>
                        <option>España</option>
                      </Select>
                    </FormControl>

                    <FormControl as={GridItem} colSpan={6}>
                      <FormLabel
                        htmlFor="street_address"
                        fontSize="sm"
                        fontWeight="md"
                        color="gray.700"
                        _dark={{
                          color: "gray.50",
                        }}
                      >
                        Dirección:
                      </FormLabel>
                      <Input
                        type="text"
                        name="street_address"
                        id="street_address"
                        autoComplete="street-address"
                        mt={1}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                      />
                    </FormControl>

                    <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
                      <FormLabel
                        htmlFor="city"
                        fontSize="sm"
                        fontWeight="md"
                        color="gray.700"
                        _dark={{
                          color: "gray.50",
                        }}
                      >
                        Ciudad:
                      </FormLabel>
                      <Input
                        type="text"
                        name="city"
                        id="city"
                        autoComplete="city"
                        mt={1}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                      />
                    </FormControl>

                    <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                      <FormLabel
                        htmlFor="state"
                        fontSize="sm"
                        fontWeight="md"
                        color="gray.700"
                        _dark={{
                          color: "gray.50",
                        }}
                      >
                        Estado / Provincia
                      </FormLabel>
                      <Input
                        type="text"
                        name="state"
                        id="state"
                        autoComplete="state"
                        mt={1}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                      />
                    </FormControl>

                    <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
                      <FormLabel
                        htmlFor="postal_code"
                        fontSize="sm"
                        fontWeight="md"
                        color="gray.700"
                        _dark={{
                          color: "gray.50",
                        }}
                      >
                        Código postal
                      </FormLabel>
                      <Input
                        type="text"
                        name="postal_code"
                        id="postal_code"
                        autoComplete="postal-code"
                        mt={1}
                        focusBorderColor="brand.400"
                        shadow="sm"
                        size="sm"
                        w="full"
                        rounded="md"
                      />
                    </FormControl>
                  </SimpleGrid>
                </Stack>
                <Box
                  px={{
                    base: 4,
                    sm: 6,
                  }}
                  py={3}
                  bg="gray.50"
                  _dark={{
                    bg: "#121212",
                  }}
                  textAlign="right"
                >
                  <Button
                    type="submit"
                    loadingText="Enviando"
                    bg={"#12284C"}
                    color={"white"}
                    _hover={{
                      bg: "#cc9e6a",
                    }}
                  >
                    Enviar
                  </Button>
                </Box>
              </chakra.form>
            </Stack>
          </Stack>
        </Flex>
      </ChakraProvider>
    </>
  );
};

export default Shipment;
