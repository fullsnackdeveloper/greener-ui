import { storiesOf } from "@storybook/react";
import React from "react";
import Card from "./";
import Avatar from "../Avatar";
import Meta from "../Meta";
import ActionBar from "../ActionBar";
import { ListItem } from "../List";
import Rating from "../Rating";

const avatar = (
  <Avatar image="https://images.unsplash.com/photo-1498507201412-ab62bad37273?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80" />
);

const avatar2 = (
  <Avatar image="https://images.unsplash.com/photo-1531750026848-8ada78f641c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" />
);

const avatarGreener = (
  <Avatar image="https://greener.tips/wp-content/uploads/2019/07/GreenrFavicon_228x228.png" />
);

storiesOf("Basic | Card", module)
  .add("default", () => (
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
          <ListItem>
            <Meta
              avatar={avatar2}
              alt
              center
              title="Rachel Green"
              subTitle="This is an amazing article! I keep referencing it! Thank you!"
            />
          </ListItem>
        </Card>
      </div>
    </div>
  ))
  .add("product", () => (
    <div style={{ maxWidth: 400 }}>
      <div className="story-spacer">
        <Card>
          <Card.Image
            contain
            square
            padding
            image="https://greener.tips/wp-content/uploads/2019/08/DAVINCI-MIQRO-BLK_DaVinci-Miqro.png"
          />
          <ListItem>
            <Meta
              preTitle="VAPOURIZERS"
              title="Blue IQ Handheld Vaporizer"
              subTitle="By Blue Lagoon"
              rating={3}
              wishlist
              price="$344.99"
            />
          </ListItem>
        </Card>
      </div>
    </div>
  ))
  .add("review", () => (
    <div>
      <div className="story-spacer">
        <Card bookmarkable>
          <Card.Header>
            <Meta
              avatar={avatarGreener}
              alt
              center
              title="Greener"
              subTitle="posted review 1hr ago"
            />
          </Card.Header>
          <Card.Tagline
            trunkateAt={270}
            tagline="Every once and a while, there comes along an idea that just makes sense. And as soon as you’re presented with it, you instantly get that “aha moment,” and you just know it’s a winner. Well, the people over at BoredThing have come up with one of those once-in-a-life-time ideas, "
          />
          <Card.Image image="https://images.unsplash.com/photo-1507682520764-93440a60e9b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1225&q=80" />
          <Card.Title>
            <h2>The Easiest Way To Grow The Best Cannabis For Beginners</h2>
            <Rating rating={4} reviewCount={6} />
          </Card.Title>
          <ActionBar likeCount={3} commentCount={1} contributorCount={10} />
          <ListItem>
            <Meta
              avatar={avatar2}
              alt
              center
              title="Rachel Green"
              subTitle="This is an amazing article! I keep referencing it! Thank you!"
            />
          </ListItem>
        </Card>
      </div>
    </div>
  ));
