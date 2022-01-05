import React, { useEffect } from "react";
import { HashRouter as Router } from "react-router-dom";

//? Components
import { Navbar, Sidebar, Footer } from "./components";
import ConfigRoutes from "./routes/ConfigRoutes";

//? Redux
import { fetchProducts } from "./redux/products/productsAction";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <Router>
      <Navbar />
      <Sidebar />
      <ConfigRoutes />
      <Footer />
    </Router>
  );
};

export default App;
