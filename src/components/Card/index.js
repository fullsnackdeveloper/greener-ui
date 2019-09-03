import "@mdi/font/css/materialdesignicons.css";
import React, { Component } from "react";
import classNames from "classnames";
import "./Card.sass";

class CardTagline extends Component {
  static defaultProps = {
    trunkateAt: 150
  };
  trunkate = (amount, string) => {
    console.log(amount, string);
    let trunkedString = string;
    if (string.length <= amount) {
      return string;
    }
    return trunkedString.slice(0, amount).concat("...");
  };
  render() {
    const { tagline, trunkateAt } = this.props;
    return (
      <div className="Card-Tagline">{this.trunkate(trunkateAt, tagline)}</div>
    );
  }
}

export default class Card extends Component {
  static defaultProps = {};

  static Header = ({ children }) => (
    <div className="Card-Header">{children}</div>
  );

  static Tagline = CardTagline;

  static Image = ({ image, square, padding, contain }) => (
    <div className={classNames("Card-Image", { square, padding, contain })}>
      {!contain && (
        <div
          className="Card-Image-image"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}
      {contain && <img src={image} alt={image} />}
    </div>
  );

  static Title = ({ children }) => (
    <div className="Card-Title">
      {children}
      <i className="mdi mdi-chevron-right mdi-24px title-arrow" />
    </div>
  );

  render() {
    const { children, bookmarkable } = this.props;
    let classes = classNames("Card");
    return (
      <div className={classes}>
        {bookmarkable && (
          <i className="mdi mdi-bookmark-outline mdi-24px bookmark" />
        )}
        {children}
      </div>
    );
  }
}
