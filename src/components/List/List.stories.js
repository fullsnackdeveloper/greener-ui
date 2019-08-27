import { storiesOf } from "@storybook/react";
import React from "react";
import List from "./";

storiesOf("Basic | List", module).add("default", () => (
  <div>
    <div className="story-spacer">
      <List />
    </div>
  </div>
));
