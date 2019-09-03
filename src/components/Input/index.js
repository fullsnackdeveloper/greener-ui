import "@mdi/font/css/materialdesignicons.css";
import React, { Component } from "react";
import classNames from "classnames";

export default class Input extends Component {
  render() {
    const { placeholder, type, size, fullwidth, plain } = this.props;
    let classes = classNames("Input", size, { fullwidth, plain });
    return <input placeholder={placeholder} type={type} className={classes} />;
  }
}

Input.defaultProps = {
  type: "text",
  placeholder: "Text",
  size: "regular"
};
