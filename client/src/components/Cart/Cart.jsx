import React from "react";
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://images.pexels.com/photos/16179987/pexels-photo-16179987/free-photo-of-analog-vibes.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      img2: "https://images.pexels.com/photos/15193733/pexels-photo-15193733/free-photo-of-smiling-man-in-hat-with-thumb-up.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      title: "long sleve",
      desc: "this is best shirt you seen ever",
      isNew: true,
      oldPrice: 19,
      Price: 12,
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/16521274/pexels-photo-16521274/free-photo-of-sombras.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
      title: "long sleve",
      desc: "this is best pant you seen ever",
      oldPrice: 219,
      Price: 112,
    },
  ];
  return (
    <div className="cart">
      <h1>Products in Cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">1 x ${item.Price}</div>
          </div>
          <DeleteOutlinedIcon className="delete" />
        </div>
      ))}
      <div className="total">
        <span>SubTotal</span>
        <span>$123</span>
      </div>
      <button>Proceed to CheckOut</button>
      <span className="reset">Reset Cart</span>
    </div>
  );
};

export default Cart;
