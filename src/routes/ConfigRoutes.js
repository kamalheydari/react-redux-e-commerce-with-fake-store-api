import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { Loading } from "../components";

//? Redux
import { fetchProducts } from "../redux/products/productsAction";
import { useDispatch } from "react-redux";

const HomePage = React.lazy(() => import("../pages/HomePage"));
const ProductsPage = React.lazy(() => import("../pages/ProductsPage"));
const AboutPage = React.lazy(() => import("../pages/AboutPage"));
const ErrorPage = React.lazy(() => import("../pages/ErrorPage"));
const SingleProductPage = React.lazy(() =>
  import("../pages/SingleProductPage")
);
const CartPage = React.lazy(() => import("../pages/CartPage"));
const CheckoutPage = React.lazy(() => import("../pages/CheckoutPage"));

const ConfigRoutes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <React.Suspense fallback={<Loading lazy />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:id" element={<SingleProductPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </React.Suspense>
  );
};

export default ConfigRoutes;
