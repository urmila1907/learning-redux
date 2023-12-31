
import { useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";

const Product = () => {
  const dispatch = useDispatch();
  const {data:products} = useSelector(state=>state.products)

  useEffect(()=>{
  // fetch("https://fakestoreapi.com/products")
  //   .then((res) => res.json())
  //   .then((result) => setProducts(result));
  dispatch(getProducts());
  },[])


  const addToCart = (product)=>{
   dispatch(add(product));
  }

  const cards = products.map((product)=>{
   return (
     <div key={product.id} >
       <div className="card" style={{ width: "18rem",height:"23rem" }}>
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
           <div className="d-flex align-items-center justify-content-center">
             <button
               className="btn btn-primary"
               onClick={()=>addToCart(product)}
             >
               Add to cart
             </button>
           </div>
         </div>
       </div>
     </div>
   );
  })

  return (
    <div className="main-box">
      <h1 className="title" style={{textAlign:'center',margin:'1.5rem'}}>Product Dashboard</h1>
      <div className="d-flex gap-4 flex-wrap m-4 p-2">{cards}</div>
    </div>
  );
}

export default Product