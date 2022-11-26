import styled from "styled-components";
import { Container, Row, Col } from "reactstrap";

export const ProductContainer = styled.div`
  margin: 40px;
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
`;

export const ProductContainerRow = styled(Row)`
  display: flex;
`;

export const ProductContainerColumnLeft = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProductContainerColumnRight = styled(Col)`
  color: #12284c;
`;
