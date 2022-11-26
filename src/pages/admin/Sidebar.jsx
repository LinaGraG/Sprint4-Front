import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar-wrapper">
      <nav id="sidebar">
        <ul className="list-unstyled components">
          <li>
            <Link to="/Dashboard">
              <i className="fa fa-tachometer"></i> Administración
            </Link>
          </li>

          <li>
            <Link to="/productlist">
              <i className="fa fa-clipboard"></i> Listar productos
            </Link>
          </li>

          <li>
            <Link to="/newproduct">
              <i className="fa fa-plus"></i> Crear producto
            </Link>
          </li>

          <li>
            <Link to="/admin/orders">
              <i className="fa fa-shopping-basket"></i> Pedidos
            </Link>
          </li>

          <li>
            <Link to="/admin/users">
              <i className="fa fa-users"></i> Usuarios
            </Link>
          </li>

          <li>
            <Link to="/admin/reviews">
              <i className="fa fa-star"></i> Opiniones
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
