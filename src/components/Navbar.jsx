import { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./Menuitems"; // if you want to use any component then first we have to import that component
import { Link } from "react-router-dom";


class Navbar extends Component {
  state = { clicked: false }; // this state is only  installing the condition

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  render() {
    // we use a render because we use extend
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">Roamify</h1>

        <div className="menu-icons" onClick={this.handleClick}>
          {/* Fixed the icon toggle logic */}
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            // what is item there and index means index of array
            return (
              // what is the meaning of key
              <li key={index}>
                {/* Link Render menu items dynamically */}
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i> {item.title}
                </Link>
              </li>
            );
          })}
          <button>Sign up</button>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
