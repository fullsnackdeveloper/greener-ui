import { storiesOf } from "@storybook/react";
import React from "react";
import Radio from "./";

storiesOf("Form | Checkbox", module).add("default", () => (
  <div>
    <div className="story-spacer">
      <form>
        <Radio>I am of age</Radio>
      </form>
    </div>
  </div>
));
