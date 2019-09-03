import "@mdi/font/css/materialdesignicons.css";
import React, { Component } from "react";
import classNames from "classnames";

export default class Avatar extends Component {
  render() {
    const { shape, size, image, status } = this.props;
    let classes = classNames("Avatar", size, shape, `status-${status}`, {
      status
    });
    return (
      <div className={classes} style={{ backgroundImage: `url(${image})` }} />
    );
  }
}

Avatar.defaultProps = {
  image: null,
  shape: "cicle",
  size: "regular",
  status: null
};
