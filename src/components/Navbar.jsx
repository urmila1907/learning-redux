import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartProducts = useSelector(state=>state.cart);
  return (
    <>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="">
            Redux toolkit
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/product"
                >
                  Products
                </Link>
              </li>
            </ul>
            <Link to="/cart" style={{ textDecoration: "none" }}>
              <div className="d-flex justify-content-end gap-3">
                <p className="text-white">My bag</p>
                <p className="text-white">{cartProducts.length}</p>
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
