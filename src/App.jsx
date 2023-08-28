import Cart from "./components/Cart";
import Dashboard from "./components/Dashboard";
import Product from "./components/Product";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route index element={<Dashboard />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
        <div className="app">
          <Product />
        </div>
      </Provider>
    </>
  );
}

export default App;
