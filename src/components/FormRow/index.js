import "@mdi/font/css/materialdesignicons.css";
import React, { Component } from "react";
import classNames from "classnames";

export default class FormRow extends Component {
  render() {
    const { children, plain } = this.props;
    let classes = classNames("FormRow", { plain });
    return <div className={classes}>{children}</div>;
  }
}
