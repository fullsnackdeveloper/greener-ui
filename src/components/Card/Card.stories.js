import { storiesOf } from "@storybook/react";
import React from "react";
import Card from "./";
import Avatar from "../Avatar";
import Meta from "../Meta";
import ActionBar from "../ActionBar";

const avatar = (
  <Avatar image="https://images.unsplash.com/photo-1498507201412-ab62bad37273?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80" />
);

storiesOf("Basic | Card", module).add("default", () => (
  <div>
    <div className="story-spacer">
      <Card bookmarkable>
        <Card.Header>
          <Meta
            avatar={avatar}
            alt
            center
            title="Avana"
            subTitle="posted 1hr ago"
          />
        </Card.Header>
        <Card.Tagline
          tagline="If you’re new to growing marijuana, you’re probably trying to figure
            out what’s the best way to grow top quality buds. This will get you
            started!"
        />
        <Card.Image image="https://images.unsplash.com/photo-1507682520764-93440a60e9b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80" />
        <Card.Title>
          <h2>The Easiest Way To Grow The Best Cannabis For Beginners</h2>
        </Card.Title>
        <ActionBar likeCount={3} commentCount={1} contributorCount={27} />
      </Card>
    </div>
  </div>
));
