import Cart from "./components/Cart";
import Dashboard from "./components/Dashboard";
import Product from "./components/Product/Product";
import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Dashboard/>}/>
          <Route path="/cart" element={<Cart/>}/>
        
        </Routes>
      </BrowserRouter>
      <div className="app">
        <Product/>
      </div>
    </>
  );
}

export default App;
