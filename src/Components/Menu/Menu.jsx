import { NavLink } from "react-router-dom";
import "../../styles/menu.scss";
import "../../styles/form.scss";
import "../../styles/table.scss";

function Menu() {
  return (
    <nav>
      <div className="nav-item-left">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/department">Department Management</NavLink>
        <NavLink to="/account">Account Management</NavLink>
      </div>
      <div className="nav-item-right">
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Sign Up</NavLink>
      </div>
    </nav>
  );
}

export default Menu;
