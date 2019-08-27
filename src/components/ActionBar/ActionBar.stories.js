import { storiesOf } from "@storybook/react";
import React from "react";
import ActionBar from "./";

storiesOf("Basic | Action Bar", module).add("default", () => (
  <div>
    <div className="story-spacer">
      <ActionBar
        likeCount={3}
        commentCount={5}
        shareCount={12}
        contributorCount={20}
      />
    </div>
  </div>
));
