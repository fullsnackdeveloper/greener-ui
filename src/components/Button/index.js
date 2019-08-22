import React, { Component } from "react";
import classNames from "classnames";
import "./Button.sass";

export default class Button extends Component {
  render() {
    const { children, type } = this.props;
    let classes = classNames("Button", type);
    return <button className={classes}>{children}</button>;
  }
}
