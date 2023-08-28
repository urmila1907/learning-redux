import Product from "./components/Product/Product";
import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/product" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
