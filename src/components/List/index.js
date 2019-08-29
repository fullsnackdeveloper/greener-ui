import "@mdi/font/css/materialdesignicons.css";
import React, { Component } from "react";
import classNames from "classnames";
import "./List.sass";

export class ListItem extends Component {
  render() {
    let classes = classNames("List");
    const { children } = this.props;
    return <div className={classes}>{children}</div>;
  }
}

export class List extends Component {
  render() {
    let classes = classNames("List");
    const { children } = this.props;
    return <div className={classes}>{children}</div>;
  }
}
