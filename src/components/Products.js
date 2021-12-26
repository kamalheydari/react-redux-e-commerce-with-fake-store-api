import React, { useEffect } from "react";

//? Components
import { Loading, Error, GridProducts, ListProducts } from ".";

//? Redux
import { useSelector, useDispatch } from "react-redux";
import {
  filterProducts,
  loadProducts,
  sortProducts,
} from "../redux/filter/filterAction";

const Products = () => {
  const dispatch = useDispatch();
  const {
    products_loading: loading,
    products_error: error,
    products,
  } = useSelector((state) => state.productsState);

  const { filtered_products, grid_view, sort, filters } = useSelector(
    (state) => state.filterState
  );

  useEffect(() => {
    dispatch(loadProducts(products));
  }, [products]);

  useEffect(() => {
    dispatch(filterProducts());
    dispatch(sortProducts());
  }, [filters, sort]);

  if (error) {
    return <Error />;
  }

  if (loading) {
    return <Loading />;
  }

  if (filtered_products.length < 1) {
    return <h5>Sorry, no products matched your search...</h5>;
  }

  if (grid_view === false) {
    return <ListProducts products={filtered_products} />;
  }
  return <GridProducts products={filtered_products} />;
};

export default Products;
