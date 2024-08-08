import React from "react";
import img1 from "../assets/ronesans-dream.png";

  const Card = props => {
  return (
    <div className="card text-center">
      <div className="overflow">
          <img src={img1} alt="Image-1"/>
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">Card Title</h4>
        <p className="card-text text-secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta aliquid quas deleniti eveniet voluptate. Amet eveniet est quae recusandae architecto.
        </p>
        <a href="#" className="btn btn-outline-success">Read More</a>
      </div>
    </div>
  );
}

export default Card;