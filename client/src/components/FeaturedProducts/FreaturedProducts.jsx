import React from "react";
import "./FeaturedProducts.scss";
import Card from "../Card/Card";

const FreaturedProducts = ({ type }) => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/16179987/pexels-photo-16179987/free-photo-of-analog-vibes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      img2: "https://images.pexels.com/photos/15193733/pexels-photo-15193733/free-photo-of-smiling-man-in-hat-with-thumb-up.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      title: "long sleve",
      isNew: true,
      oldPrice: 19,
      Price: 12,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/16521274/pexels-photo-16521274/free-photo-of-sombras.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      title: "long sleve",
      oldPrice: 219,
      Price: 112,
    },
    {
      id: 3,
      img: "https://images.pexels.com/photos/17142299/pexels-photo-17142299/free-photo-of-woman-in-a-dress-sitting-in-an-opened-wooden-closet-with-dresses-hanging-on-the-rack.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      title: "long sleve",
      oldPrice: 190,
      Price: 120,
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/17987491/pexels-photo-17987491/free-photo-of-fashion-woman-summer-girl.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      title: "long sleve",
      oldPrice: 109,
      Price: 102,
    },
  ];
  return (
    <div className="freaturedProducts">
      <div className="top">
        <h1>{type} Products</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          earum qui incidunt aspernatur accusantium deserunt facere rerum soluta
          dolorem tempora!
        </p>
      </div>
      <div className="bottom">
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FreaturedProducts;
