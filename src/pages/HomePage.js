import React from "react";

//? Components
import { PopularProducts, Services, Hero, Contact } from "../components";

const HomePage = () => {


  return (
    <main>
      <Hero />
      <Services />
      <PopularProducts />
      <Contact />
    </main>
  );
};

export default HomePage;
