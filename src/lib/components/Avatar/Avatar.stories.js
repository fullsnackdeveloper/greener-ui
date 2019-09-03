import { storiesOf } from "@storybook/react";
import React from "react";
import Avatar from "./";

storiesOf("Basic | Avatar", module)
  .add("default", () => (
    <div>
      <div className="story-spacer">
        <Avatar
          size="small"
          image="https://images.unsplash.com/photo-1498507201412-ab62bad37273?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
        />
      </div>
      <div className="story-spacer">
        <Avatar image="https://images.unsplash.com/photo-1498507201412-ab62bad37273?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80" />
      </div>
      <div className="story-spacer">
        <Avatar
          size="large"
          image="https://images.unsplash.com/photo-1498507201412-ab62bad37273?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
        />
      </div>
      <div className="story-spacer">
        <Avatar
          size="huge"
          image="https://images.unsplash.com/photo-1498507201412-ab62bad37273?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
        />
      </div>
    </div>
  ))
  .add("status", () => (
    <div>
      <div className="story-spacer">
        <Avatar
          status={1}
          size="small"
          image="https://images.unsplash.com/photo-1498507201412-ab62bad37273?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
        />
      </div>
      <div className="story-spacer">
        <Avatar
          status={2}
          image="https://images.unsplash.com/photo-1498507201412-ab62bad37273?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
        />
      </div>
      <div className="story-spacer">
        <Avatar
          status={3}
          image="https://images.unsplash.com/photo-1498507201412-ab62bad37273?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
        />
      </div>
      <div className="story-spacer">
        <Avatar
          status={4}
          size="large"
          image="https://images.unsplash.com/photo-1498507201412-ab62bad37273?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
        />
      </div>
      <div className="story-spacer">
        <Avatar
          status={5}
          size="huge"
          image="https://images.unsplash.com/photo-1498507201412-ab62bad37273?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
        />
      </div>
    </div>
  ));
