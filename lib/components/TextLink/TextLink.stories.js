import { storiesOf } from "@storybook/react";
import React from "react";
import TextLink from "./";

storiesOf("Basic | TextLink", module).add("default", () => (
  <div>
    <div className="story-spacer">
      <TextLink href="#clicked">Click this</TextLink>
    </div>
  </div>
));
