import "@mdi/font/css/materialdesignicons.css";
import React, { Component } from "react";
import Avatar from "../Avatar";
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
                <a href="#search">
                  <i className="mdi mdi-magnify" />
                </a>
              </li>
              <li>
                <a href="#search">
                  <Avatar
                    size="tiny"
                    image="https://images.unsplash.com/photo-1535441577682-5a7bc0702a7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                  />
                </a>
              </li>
              <li>
                <a href="#search">
                  <i className="mdi mdi-cart-outline" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
