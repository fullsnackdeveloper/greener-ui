import "@mdi/font/css/materialdesignicons.css";
import React, { Component } from "react";
import classNames from "classnames";

export default class ActionBar extends Component {
  render() {
    const {
      liked,
      comment,
      share,
      likeCount,
      commentCount,
      shareCount,
      contributorCount
    } = this.props;
    let classes = classNames("ActionBar");
    return (
      <div className={classes}>
        <div className="ActionBar-actions">
          {liked ? (
            <i className="mdi mdi-heart mdi-24px" />
          ) : (
            <i className="mdi mdi-heart-outline mdi-24px" />
          )}
          {comment && <i className="mdi mdi-comment-text-outline mdi-24px" />}
          {share && <i className="mdi mdi-share-outline mdi-24px" />}
        </div>
        <div className="ActionBar-info">
          {likeCount && <p>{likeCount} Likes</p>}
          {commentCount && <p>{commentCount} Comments</p>}
          {contributorCount && <p>{contributorCount} Contributors</p>}
          {shareCount && <p>{shareCount} Shares</p>}
        </div>
      </div>
    );
  }
}

ActionBar.defaultProps = {
  like: true,
  comment: true,
  share: true,
  liked: false,
  commentCount: null,
  shareCount: null,
  contributorCount: null
};
