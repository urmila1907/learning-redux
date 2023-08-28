import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeFromCart = (id)=>{
   dispatch(remove(id));
  }

  const cards = products.map((product) => {
    return (
      <div key={product.id}>
        <div className="card" style={{ width: "18rem", height: "25rem" }}>
          <img
            src={product.image}
            className="card-img-top"
            alt="product image"
            style={{
              width: "10rem",
              height: "10rem",
              objectFit: "contain",
              alignSelf: "center",
            }}
          />
          <div className="card-body">
            <h5 className="card-title" style={{ textAlign: "center" }}>
              {product.title}
            </h5>
            <p className="card-text" style={{ textAlign: "center" }}>
              INR: {product.price}
            </p>
          </div>
          <div className="d-flex align-items-center justify-content-center m-3">
            <button
              className="btn btn-danger"
              onClick={() => removeFromCart(product.id)}
            >
              Remove from cart
            </button>
          </div>
        </div>
      </div>
    );
  });
  return (
    <>
      <div className="d-flex flex-wrap gap-4 m-3">{cards}</div>
    </>
  );
};

export default Cart;
