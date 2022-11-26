import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCardImage,
  CCardSubtitle,
  CCardText,
  CCardTitle,
  CContainer,
  CListGroup,
  CListGroupItem,
} from "@coreui/bootstrap-react";
import { IconButton, Rating } from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import CurrencyFormat from "react-currency-format";

import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";

const StyledButton = styled(Button, {
  name: "StyledButton",
  slot: "Wrapper",
})({
  background:"#12284c",
  color: "white",
  "&:hover": { color: "#12284c", background:"#cc9e6a"},
});


const ProductCard = ({
  id,
  sku,
  title,
  subtitle,
  image,
  category,
  description,
  ingredients,
  price,
  inventory,
  seller,
  totalSales,
  hasTaxes,
  hasDiscount,
  timeLeft,
  rating,
  qualifications,
  reviews,
  createdAt,
  updatedAt,
}) => {
  return (
    <>
      <CCard className="h-100">
        <CCardHeader className="d-flex flex-row align-items-center">
          <CContainer className="w-auto text-start">
            <CCardTitle className="h5">{title}</CCardTitle>
            <CCardSubtitle className="mb-1 text-muted">
              {subtitle}
            </CCardSubtitle>
          </CContainer>
          <CContainer className="w-auto text-end">
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CContainer>
        </CCardHeader>
        <CCardImage orientation="top" src={image} />
        <CListGroup flush>
          <CListGroupItem>
            <Rating
              name="rating"
              defaultValue={rating}
              precision={0.1}
              readOnly
            />
          </CListGroupItem>
        </CListGroup>
        <CCardBody>
          <CCardText>{description}</CCardText>
          <CCardText className="text-end">
            <span>
              <b>Precio: </b>
              <CurrencyFormat
                value={price}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
            </span>
          </CCardText>
        </CCardBody>
        <CCardFooter className="text-medium-emphasis text-center">
          <Link to={`/product/${id}`} style={{textDecoration:"none"}}>
            <StyledButton
              size="small"
              color="primary"
            >
              Ver detalles
            </StyledButton>
          </Link>
        </CCardFooter>
      </CCard>
    </>
  );
};

export default ProductCard;
