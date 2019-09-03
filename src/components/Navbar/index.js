import "@mdi/font/css/materialdesignicons.css";
import React, { Component } from "react";
import classNames from "classnames";
import "./Navbar.sass";
import Logo from "../../img/greener-logo.png";

export default class Navbar extends Component {
  static defaultProps = {
    menuItems: []
  };

  render() {
    const { menuItems } = this.props;
    let classes = classNames("Navbar");
    return (
      <div className={classes}>
        <div className="Navbar-container">
          <div className="Navbar-nav">
            <div className="Navbar-logo">
              <img src={Logo} alt="greener-logo" />
            </div>
            <nav>
              <ul>
                {menuItems.map(item => (
                  <li
                    key={item}
                    className={classNames({ hasSubMenu: item.subMenu })}
                  >
                    <a href={item.link}>
                      {item.title}
                      {item.subMenu && <i className="mdi mdi-menu-down" />}
                    </a>
                    {item.subMenu && (
                      <div className="subMenu">
                        <ul>
                          {item.subMenu.map(subItem => (
                            <li key={subItem}>
                              <a href={subItem.link}>{subItem.title}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          <div className="Navbar-actions">
            <ul>
              <li>
                <a href="#account">Avatar</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
