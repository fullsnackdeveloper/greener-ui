import "@mdi/font/css/materialdesignicons.css";
import React, { Component } from "react";
import classNames from "classnames";
import "./Meta.sass";
import Avatar from "../Avatar";
import Rating from "../Rating";

export default class Meta extends Component {
  static defaultProps = {
    title: "Enter a title"
  };

  renderAvatar(avatar) {
    let newAvatars = avatar;
    if (avatar.length > 3) {
      newAvatars = avatar.slice(0, 3);
      newAvatars.push(<Avatar image="https://i.imgur.com/IgWGum2.png" />);
    }
    return newAvatars;
  }

  render() {
    const {
      preTitle,
      title,
      subTitle,
      avatar,
      content,
      center,
      vertical,
      alt,
      price,
      rating,
      wishlist
    } = this.props;
    let classes = classNames("Meta", {
      withAvatar: avatar,
      center,
      vertical,
      alt,
      multipleAvatars: avatar && avatar.length > 1,
      overThreeAvatars: avatar && avatar.length > 3
    });

    return (
      <div className={classes}>
        <div className="Meta-avatar">{avatar && this.renderAvatar(avatar)}</div>
        <div className="Meta-container">
          <div className="Meta-titles">
            {preTitle && <h3>{preTitle}</h3>}
            {title && <h1>{title}</h1>}
            {subTitle && <h2>{subTitle}</h2>}
          </div>
          {content && (
            <div className="Meta-content">
              <p>{content}</p>
            </div>
          )}
          {(rating || price || wishlist) && (
            <div className="Meta-product">
              {rating && (
                <div className="Meta-rating">
                  <Rating rating={rating} reviewCount={15} />
                </div>
              )}
              {price && (
                <div className="Meta-price">
                  <h3>{price}</h3>
                </div>
              )}
              {wishlist && (
                <div className="Meta-wishlist">
                  <a href="#addToWishlist">
                    Add to Wishlist <i className="mdi mdi-heart" />
                  </a>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}
