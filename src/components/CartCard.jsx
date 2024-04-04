import React, { useState, useContext } from "react";
import { UserContext } from "../App";
import '../components/CartCard.css';

function CartCard() {
  let { product, setProduct } = useContext(UserContext);

  return (
    <div className="container">
      {product.map((e, i) => {
        const discountPrice = Math.round(
          e.price * (e.discountPercentage / 100)
        );

        const [quantity, setQuantity] = useState(0);

        const addQuantity = () => {
          if (quantity < e.stock) {
            setQuantity(quantity + 1);
          }
        };

        const removeQuantity = () => {
          if (quantity > 0) {
            setQuantity(quantity - 1);
          }
        };

        return (
          <div
            key={i}
            className="card mb-5 border border-secondary"
            style={{ minWidth: "100%", maxWidth: "750px" }}
          >
            <div className="row g-0">
              <div className="col-md-3 image">
                <img 
                  src={e.image}
                  className="img-fluid rounded-start cardImage"
                  alt="..."
                />
              </div>
              <div className="col-md-9">
                <div className="card-body px-3">
                  <div className="top">
                    <div className="top-header d-flex justify-content-between align-items-center">
                      <h5 className="card-title">{e.title}</h5>
                      <h4 className="card-title">${e.price}</h4>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="card-text">
                        <b>Brand : </b>
                        {e.brand}
                      </p>
                      <p className="card-text text-success">
                        Discount Offer : <b>{e.discountPercentage}%</b>
                      </p>
                    </div>
                    <br></br>
                    <div>
                      <p className="card-text">
                        <b>Category : </b>
                        {e.category}
                      </p>
                    </div>
                    <br></br>
                    <div>
                      <p className="card-text">{e.description}</p>
                    </div>
                    <br></br>
                    <div>
                      <p className="card-text text-success">
                        In Stock : {e.stock}
                      </p>
                    </div>
                    <br></br>
                    <p className="card-text">
                      <b>Rating:</b> {e.rating}
                    </p>
                    <p>
                      {[...Array(Math.min(e.rating, 5))].map((_, index) => (
                        <i
                          key={index}
                          className="fas fa-star"
                          style={{ color: "#ffd91a" }}
                        ></i>
                      ))}
                      {[...Array(Math.max(5 - e.rating, 0))].map((_, index) => (
                        <i
                          key={index}
                          className="far fa-star"
                          style={{ color: "#f0ff1a" }}
                        ></i>
                      ))}
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex flex-row justify-content-between align-items-center">
                        <button
                          type="button"
                          className="btn btn-outline-danger"
                          style={{ marginRight: "8px" }}
                          onClick={removeQuantity}
                          disabled={quantity === 0}
                        >
                          {" "}
                          -{" "}
                        </button>
                        <div className="py-1 quantityText">{quantity}</div>
                        <button
                          type="button"
                          className="btn btn-outline-success"
                          style={{ marginLeft: "8px" }}
                          onClick={addQuantity}
                          disabled={quantity === e.stock}
                        >
                          {" "}
                          +{" "}
                        </button>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="bottom">
                    <div className="d-flex justify-content-between align-items-center">
                      Price Per Item :{" "}
                      <p className="card-text">${e.price} </p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      Total Amount :{" "}
                      <h5 className="card-text">${e.price * quantity}</h5>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary float-end my-3"
                  >
                    Proceed to pay
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CartCard;
