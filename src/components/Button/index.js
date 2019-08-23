import "@mdi/font/css/materialdesignicons.css";
import React, { Component } from "react";
import classNames from "classnames";
import "./Button.sass";

export default class Button extends Component {
  static defaultProps = {
    type: "primary",
    size: "regular",
    icon: null,
    onColor: false,
    fullwidth: false
  };

  render() {
    const { children, type, icon, onColor, size, fullwidth } = this.props;
    let classes = classNames("Button", type, size, fullwidth, {
      withIcon: icon && children,
      iconRight: icon && icon.position === "right",
      atEdge: icon && icon.atEdge,
      iconButton: icon && !children,
      onColor,
      fullwidth
    });
    return (
      <button className={classes}>
        {icon && <i className={`mdi mdi-${icon.symbol}`} />}
        {children && <span>{children}</span>}
      </button>
    );
  }
}
