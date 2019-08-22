import { storiesOf } from "@storybook/react";
import React from "react";
import Button from "./";

storiesOf("Button", module).add("default", () => (
  <div>
    <div className="story-spacer">
      <Button type="primary">Click this</Button>
    </div>
    <div className="story-spacer">
      <Button type="secondary">Click this</Button>
    </div>
    <div className="story-spacer">
      <Button type="tertiary">Click this</Button>
    </div>
    <div className="story-spacer">
      <Button type="disabled">Click this</Button>
    </div>
  </div>
));
