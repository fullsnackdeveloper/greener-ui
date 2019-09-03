import "@mdi/font/css/materialdesignicons.css";
import React, { Component } from "react";
import classNames from "classnames";
import "./TextLink.sass";

export default class TextLink extends Component {
  static defaultProps = {};

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
