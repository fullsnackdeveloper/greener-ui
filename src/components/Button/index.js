import "@mdi/font/css/materialdesignicons.css";
import React, { Component } from "react";
import classNames from "classnames";
import "./Button.sass";

export default class Button extends Component {
  render() {
    const { children, type, icon, onColor } = this.props;
    let classes = classNames("Button", type, {
      withIcon: icon && children,
      iconRight: icon && icon.position === "right",
      iconButton: icon && !children,
      onColor
    });
    return (
      <button className={classes}>
        {icon && <i className={`mdi mdi-${icon.symbol}`} />}
        {children && <span>{children}</span>}
      </button>
    );
  }
}
