import React, { useEffect } from "react";

//? Components
import { Loading, Error, GridProducts, ListProducts, Typography } from ".";

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
    return (
      <Typography.H4>Sorry, no products matched your search...</Typography.H4>
    );
  }

  if (grid_view === false) {
    return <ListProducts products={filtered_products} />;
  }
  return <GridProducts products={filtered_products} />;
};

export default Products;
