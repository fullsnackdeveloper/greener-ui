import "@mdi/font/css/materialdesignicons.css";
import React, { Component } from "react";
import classNames from "classnames";
import "./Meta.sass";
import Avatar from "../Avatar";

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
      alt
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
        </div>
      </div>
    );
  }
}
