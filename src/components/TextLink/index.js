import "@mdi/font/css/materialdesignicons.css";
import React, { Component } from "react";
import classNames from "classnames";

export default class TextLink extends Component {
  render() {
    const { children, href } = this.props;
    let classes = classNames("TextLink");
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }
}
