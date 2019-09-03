import { storiesOf } from "@storybook/react";
import React from "react";
import Meta from "./";
import Avatar from "../Avatar";

const avatar = (
  <Avatar image="https://images.unsplash.com/photo-1498507201412-ab62bad37273?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80" />
);
const avatars = [
  <Avatar image="https://images.unsplash.com/photo-1498507201412-ab62bad37273?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80" />,
  <Avatar image="https://images.unsplash.com/photo-1556822256-05a527652985?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" />,
  <Avatar image="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80" />
];

const lotsAvatars = [
  <Avatar image="https://images.unsplash.com/photo-1498507201412-ab62bad37273?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80" />,
  <Avatar image="https://images.unsplash.com/photo-1556822256-05a527652985?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" />,
  <Avatar image="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80" />,
  <Avatar image="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80" />,
  <Avatar image="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80" />,
  <Avatar image="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80" />
];

storiesOf("Basic | Meta", module)
  .add("default", () => (
    <div>
      <div className="story-spacer">
        <Meta
          avatar={avatar}
          preTitle="It's going down"
          title="Do you remember?"
          subTitle="Tonight, it's happening"
        />
      </div>
      <div className="story-spacer">
        <Meta
          avatar={avatar}
          preTitle="It's going down"
          title="Do you remember?"
          content="This could possibly be a comment or something you want smaller"
        />
      </div>
      <div className="story-spacer">
        <Meta
          avatar={avatar}
          title="Rachel Green"
          content="This could possibly be a comment or something you want smaller"
        />
      </div>
      <div className="story-spacer">
        <Meta
          avatar={avatar}
          preTitle="It's going down"
          title="Do you remember?"
        />
      </div>
      <div className="story-spacer">
        <Meta avatar={avatar} center title="Do you remember?" />
      </div>
    </div>
  ))
  .add("multiple avatars", () => (
    <div>
      <div className="story-spacer">
        <Meta
          avatar={avatars}
          preTitle="It's going down"
          title="With three avatars"
        />
      </div>
      <div className="story-spacer">
        <Meta
          avatar={lotsAvatars}
          preTitle="It's going down"
          title="Anything over 3 avatars"
        />
      </div>
    </div>
  ))
  .add("vertical", () => (
    <div>
      <div className="story-spacer">
        <Meta
          vertical
          avatar={avatar}
          preTitle="It's going down"
          title="With three avatars"
        />
      </div>
    </div>
  ))
  .add("alt", () => (
    <div>
      <div className="story-spacer">
        <Meta
          alt
          avatar={avatar}
          subTitle="It's going down"
          title="With three avatars"
        />
      </div>
    </div>
  ));
