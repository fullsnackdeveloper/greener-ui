import { storiesOf } from "@storybook/react";
import React from "react";
import Commenter from "./";

const comments = [
  {
    name: "Rachel Green",
    comment: "This is an amazing article! I keep referencing it! Thank you!"
  },
  {
    name: "Ross Gellor",
    comment: "We were on a break!"
  }
];

storiesOf("Advanced | Commenter", module).add("default", () => (
  <div>
    <div className="story-spacer">
      <Commenter comments={comments} />
    </div>
  </div>
));
