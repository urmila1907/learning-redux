import Cart from "./components/Cart";
import Dashboard from "./components/Dashboard";
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
      </Provider>
    </>
  );
}

export default App;
