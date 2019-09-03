import "@mdi/font/css/materialdesignicons.css";
import React, { Component } from "react";
import classNames from "classnames";
import "./Commenter.sass";
import List, { ListItem } from "../List";
import Meta from "../Meta";
import Avatar from "../Avatar";
import Input from "../Input";
import FormRow from "../FormRow";
import TextLink from "../TextLink";

const avatar2 = (
  <Avatar image="https://images.unsplash.com/photo-1531750026848-8ada78f641c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
);

export default class Commenter extends Component {
  static defaultProps = {};

  render() {
    let classes = classNames("Commenter");
    return (
      <div className={classes}>
        <div className="Commenter-comments">
          <List>
            {this.props.comments.map(c => {
              return (
                <ListItem>
                  <Meta
                    avatar={avatar2}
                    alt
                    center
                    title={c.name}
                    subTitle={c.comment}
                  />
                </ListItem>
              );
            })}
          </List>
        </div>
        <div className="Commenter-comment">
          <FormRow plain>
            <Input placeholder="Make a comment..." plain />
            <TextLink>Post</TextLink>
          </FormRow>
        </div>
      </div>
    );
  }
}
