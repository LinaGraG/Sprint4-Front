import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductCard from "./ProductCard";
import { CCol, CContainer, CRow } from "@coreui/bootstrap-react";
import { Typography } from "@mui/material";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../actions/productActions";
import { useAlert } from "react-alert";

import LinearProgress from "@mui/material/LinearProgress";
import Pagination from "react-js-pagination";

import { useParams } from "react-router-dom";

import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const ProductsGrid = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([1000, 100000]);
  const { loading, products, error, resultsPerPage, productsCount } =
    useSelector((state) => state.products);
  const alert = useAlert();
  const params = useParams();
  const keyword = params.keyword;

  const dispatch = useDispatch();
  useEffect(() => {
    if (error) {
      return alert.error(error);
    }

    dispatch(getProducts(currentPage, keyword, price));
  }, [dispatch, alert, error, currentPage, keyword, price]);

  function setCurrentPageNumber(pageNumber) {
    setCurrentPage(pageNumber);
  }

  return (
    <>
      {loading ? (
        <LinearProgress />
      ) : (
        <CContainer
          fluid
          className="mt-4 mb-4 d-flex flex-column justify-content-center align-items-center"
        >
          <Slider
            range
            className="t-slider"
            marks={{
              6000: `$6000`,
              38000: `$38000`,
            }}
            min={6000}
            max={38000}
            defaultValue={[6000, 38000]}
            tipFormatter={(value) => `$${value}`}
            tipProps={{
              placement: "top",
              prefixCls: "rc-slider-tooltip",
              visible: true,
            }}
            step={1000}
            dots
            value={price}
            onChange={(price) => setPrice(price)}
          ></Slider>
          <Typography
            component="strong"
            variant="h2"
            align="center"
            style={{
              color: "#12284C",
              paddingTop: "0px",
              fontFamily: "Nunito Sans",
            }}
          >
            Productos
          </Typography>
          <CRow
            className="m-3"
            xs={{ cols: 1, gutter: 4 }}
            sm={{ cols: 2 }}
            md={{ cols: 3 }}
            xl={{ cols: 4 }}
            xxl={{ cols: 5 }}
          >
            {products.map((ProductData) => (
              <CCol xs key={ProductData._id}>
                <ProductCard
                  id={ProductData._id}
                  sku={ProductData.sku}
                  title={ProductData.title}
                  subtitle={ProductData.subtitle}
                  image={ProductData.image}
                  category={ProductData.category}
                  description={ProductData.description}
                  ingredients={ProductData.ingredients}
                  price={ProductData.price}
                  rating={ProductData.rating}
                  timeLeft={ProductData.timeLeft}
                  totalSales={ProductData.totalSales}
                />
              </CCol>
            ))}
          </CRow>
          <Pagination
            activePage={currentPage}
            itemsCountPerPage={resultsPerPage}
            totalItemsCount={productsCount}
            onChange={setCurrentPageNumber}
            nextPageText={"Siguiente"}
            prevPageText={"Anterior"}
            firstPageText={"Primera"}
            lastPageText={"Última"}
            itemClass="page-item"
            linkClass="page-link"
          />
        </CContainer>
      )}
    </>
  );
};

export default ProductsGrid;
