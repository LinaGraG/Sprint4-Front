import { useEffect, useState } from "react";
import {
  ProductContainer,
  ProductContainerColumnLeft,
  ProductContainerColumnRight,
  ProductContainerRow,
} from "./Product.elements";
import LinearProgress from "@mui/material/LinearProgress";
import { Container, Row, Col } from "reactstrap";

import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails, clearErrors } from "../../actions/productActions";
import { useAlert } from "react-alert";

import Rating from "@mui/material/Rating";
import { Typography } from "@mui/material";

import CurrencyFormat from "react-currency-format";
import "../../assets/styles/product.css";

import { Button } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'
import { Link } from "react-router-dom";

import { FaShoppingCart } from "react-icons/fa";

const Product = () => {
  const { loading, product, error } = useSelector(
    (state) => state.productDetails
  );
  const alert = useAlert();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getProductDetails(id));
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
  }, [dispatch, alert, error, id]);

  const increaseQty = () => {
    const contador = document.querySelector(".count");

    if (contador.valueAsNumber >= product.inventario) return;

    const qty = contador.valueAsNumber + 1;
    setQuantity(qty);
  };

  const decreaseQty = () => {
    const contador = document.querySelector(".count");

    if (contador.valueAsNumber <= 1) return;

    const qty = contador.valueAsNumber - 1;
    setQuantity(qty);
  };

  console.log(product);

  return (
    <>
      {loading ? (
        <LinearProgress />
      ) : (
        <section>
          <ProductContainer>
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
              Detalles del producto
            </Typography>
            <br />
            <Container key={product._id}>
              <ProductContainerRow>
                <ProductContainerColumnLeft lg="6" md="6">
                  <div className="product__main-img">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-100"
                    />
                  </div>
                </ProductContainerColumnLeft>
                <ProductContainerColumnRight lg="6" md="6">
                  <br />
                  <h2>{product.title}</h2>
                  <p id="product_sku">Código del Producto {product.sku}</p>
                  <p className="category mb-5">
                    Categoria: <span>{product.category}</span>
                  </p>
                  <hr />
                  <Rating
                    name="read-only"
                    value={product.rating}
                    precision={0.1}
                    readOnly
                  />

                  <span id="No_de_reviews">
                    ({product.qualifications} opiniones)
                  </span>
                  <hr />
                  <h3>
                    Precio:{" "}
                    <CurrencyFormat
                      value={product.price}
                      displayType={"text"}
                      thousandSeparator={true}
                      prefix={"$"}
                    />
                  </h3>

                  <div className="stockCounter d-inline">
                    <Button
                      circular
                      icon="minus"
                      negative
                      onClick={decreaseQty}
                    />
                    <input
                      type="number"
                      className="form-control count d-inline"
                      value={quantity}
                      readOnly
                    />
                    <Button
                      circular
                      icon="plus"
                      positive
                      onClick={increaseQty}
                    />
                  </div>

                  <button
                    type="button"
                    id="carrito_btn"
                    className="btn btn-primary d-inline ml-4 order__btn"
                    disabled={product.inventory === 0}
                    style={{
                      margin: 20,
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    <Link
                      to="/products"
                      style={{
                        textDecoration: "none",
                        color: "white",
                      }}
                    >
                      Agregar al Carrito
                    </Link>
                  </button>
                  <hr />
                  <p>
                    Estado:{" "}
                    <span
                      id="stock_stado"
                      className={
                        product.inventory > 0 ? "greenColor" : "redColor"
                      }
                    >
                      {product.inventory > 0 ? "En existencia" : "Agotado"}
                    </span>
                  </p>
                  <hr />
                  <h4 className="mt-2">Descripción:</h4>
                  <p>{product.description}</p>
                  <hr />
                  <p id="vendedor">
                    Vendido por: <strong>{product.seller}</strong>
                  </p>
                  <button
                    id="btn_review"
                    type="button"
                    className="btn btn-primary mt-4 order__btn"
                    data-toggle="modal"
                    data-target="#ratingModal"
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    <Link
                      to="/products"
                      style={{
                        textDecoration: "none",
                        color: "white",
                      }}
                    >
                      Deja tu opinión
                    </Link>
                  </button>
                  <div className="alert alert-danger mt-5" type="alert">
                    Inicia sesión para dejar tu opinión
                  </div>

                  {/*Mensaje emergente para dejar opinion y calificacion*/}
                  <div className="row mt-2 mb-5">
                    <div className="rating w-50">
                      <div
                        className="modal fade"
                        id="ratingModal"
                        tabIndex="-1"
                        role="dialog"
                        aria-labelledby="ratingModalLabel"
                        aria-hidden="true"
                      >
                        <div className="modal-dialog" role="document">
                          <div className="modal-content">
                            <div className="modal-header">
                              <h5 className="modal-title" id="ratingModalLabel">
                                Enviar Review
                              </h5>
                              <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                              >
                                <span aria-hidden="true">&times;</span>
                              </button>
                            </div>
                            <div className="modal-body">
                              <ul className="stars">
                                <li className="star">
                                  <i className="fa fa-star"></i>
                                </li>
                                <li className="star">
                                  <i className="fa fa-star"></i>
                                </li>
                                <li className="star">
                                  <i className="fa fa-star"></i>
                                </li>
                                <li className="star">
                                  <i className="fa fa-star"></i>
                                </li>
                                <li className="star">
                                  <i className="fa fa-star"></i>
                                </li>
                              </ul>

                              <textarea
                                name="review"
                                id="review"
                                className="form-control mt3"
                              ></textarea>

                              <button
                                className="btn my-3 float-right review-btn px-4 text-white"
                                data-dismiss="modal"
                                aria-label="Close"
                              >
                                Enviar
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ProductContainerColumnRight>
              </ProductContainerRow>
            </Container>
          </ProductContainer>
        </section>
      )}
    </>
  );
};

export default Product;
