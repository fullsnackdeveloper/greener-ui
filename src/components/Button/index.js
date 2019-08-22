import "@mdi/font/css/materialdesignicons.css";
import React, { Component } from "react";
import classNames from "classnames";
import "./Button.sass";

export default class Button extends Component {
  render() {
    const { children, type, icon } = this.props;
    let classes = classNames("Button", type);
    return (
      <button className={classes}>
        {icon && <i className={`mdi mdi-${icon.symbol}`} />}
        {children}
      </button>
    );
  }
}
