import { storiesOf } from "@storybook/react";
import React from "react";
import Button from "./";

storiesOf("Button", module).add("default", () => (
  <div>
    <div className="story-spacer">
      <Button type="primary">Primary</Button>
    </div>
    <div className="story-spacer">
      <Button type="secondary">Secondary</Button>
    </div>
    <div className="story-spacer">
      <Button type="tertiary">Tertiary</Button>
    </div>
    <div className="story-spacer">
      <Button type="disabled">Disabled</Button>
    </div>
  </div>
));
