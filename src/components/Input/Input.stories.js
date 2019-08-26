import { storiesOf } from "@storybook/react";
import React from "react";
import Input from "./";

storiesOf("Form | Input", module).add("default", () => (
  <div>
    <div className="story-spacer">
      <Input type="email" />
    </div>
    <div className="story-spacer">
      <Input type="email" fullwidth placeholder="Full name" />
    </div>
  </div>
));
