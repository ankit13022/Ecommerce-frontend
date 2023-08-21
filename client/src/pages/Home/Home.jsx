import React from "react";
import "./Home.scss";
import Slider from "../../components/Slider/Slider";
import FreaturedProducts from "../../components/FeaturedProducts/FreaturedProducts";
import Categories from "../../components/Categories/Categories";
import Contact from "../../components/Contact/Contact";
const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FreaturedProducts type="featured" />
      <Categories />
      <FreaturedProducts type="trending" />
      <Contact />
    </div>
  );
};

export default Home;
