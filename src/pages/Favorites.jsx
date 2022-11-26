import React from "react";
import MetaData from "../components/layout/metadata/MetaData";

import CommonSection from "../components/UI/common-section/CommonSection";
import { CartContainer } from "../components/UI/Cart.element";
import { FaTrashAlt, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import CurrencyFormat from "react-currency-format";

import "bootstrap/dist/css/bootstrap.css";
import "../assets/styles/cart-page.css";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#12284C",
    color: theme.palette.common.white,
    fontSize: 18,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 18,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(id, image, productName, price, details) {
  return { id, image, productName, price, details };
}

const rows = [
  createData(
    1,
    "../images/products/quesos_frescos/Queso_tipo_mozzarella-Tajado_500gr.png",
    "Queso tipo mozzarella",
    26182
  ),
  createData(
    2,
    "../images/products/quesos_frescos/Queso_tipo_mozzarella-Tajado_500gr.png",
    "Queso tipo mozzarella",
    26182
  ),
  createData(
    3,
    "../images/products/quesos_frescos/Queso_tipo_mozzarella-Tajado_500gr.png",
    "Queso tipo mozzarella",
    26182
  ),
  createData(
    4,
    "../images/products/quesos_frescos/Queso_tipo_mozzarella-Tajado_500gr.png",
    "Queso tipo mozzarella",
    26182
  ),
  createData(
    5,
    "../images/products/quesos_frescos/Queso_tipo_mozzarella-Tajado_500gr.png",
    "Queso tipo mozzarella",
    26182
  ),
];

const Favorites = () => {
  return (
    <>
      <MetaData title="Favoritos" />

      <CommonSection title="" />
      <section>
        <CartContainer>
          <Typography
            component="strong"
            mb={0}
            variant="h2"
            align="center"
            style={{
              color: "#12284C",
              paddingTop: "0px",
              fontFamily: "Nunito Sans",
            }}
          >
            Favoritos
          </Typography>
          <br />
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">Imagen</StyledTableCell>
                  <StyledTableCell align="center">
                    Nombre del producto
                  </StyledTableCell>
                  <StyledTableCell align="center">Precio</StyledTableCell>
                  <StyledTableCell align="center">Ver detalles</StyledTableCell>
                  <StyledTableCell align="center">Borrar</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <StyledTableRow key={row.id}>
                    <StyledTableCell component="th" scope="row" align="center">
                      <img src={row.image} alt={row.productName} width="100" />
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row.productName}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <CurrencyFormat
                        value={row.price}
                        displayType={"text"}
                        thousandSeparator={true}
                        prefix={"$"}
                      />
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <FaEye size={25} />
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <FaTrashAlt size={25} />
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CartContainer>
      </section>
    </>
  );
};

export default Favorites;
