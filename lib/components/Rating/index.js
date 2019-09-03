import "@mdi/font/css/materialdesignicons.css";
import React, { Component } from "react";
import classNames from "classnames";
import "./Rating.sass";

export default class Rating extends Component {
  static defaultProps = {};

  renderRating = () => {
    const rate = [];
    for (let step = 0; step < 5; step++) {
      if (this.props.rating > step) {
        rate.push(<i key={step} className="mdi mdi-star" />);
      } else {
        rate.push(<i key={step} className="mdi mdi-star-outline" />);
      }
    }
    return rate;
  };

  render() {
    const { reviewCount } = this.props;
    let classes = classNames("Rating");
    return (
      <div className={classes}>
        {this.renderRating()} {reviewCount && <p>({reviewCount})</p>}
      </div>
    );
  }
}
