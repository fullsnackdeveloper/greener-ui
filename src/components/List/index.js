import "@mdi/font/css/materialdesignicons.css";
import React, { Component } from "react";
import classNames from "classnames";

export class ListItem extends Component {
  render() {
    let classes = classNames("ListItem");
    const { children } = this.props;
    return <div className={classes}>{children}</div>;
  }
}

export default class List extends Component {
  render() {
    let classes = classNames("List");
    const { children } = this.props;
    return <div className={classes}>{children}</div>;
  }
}
