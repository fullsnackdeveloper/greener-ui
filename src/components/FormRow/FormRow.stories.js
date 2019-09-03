import { storiesOf } from "@storybook/react";
import React from "react";
import FormRow from "./";
import Input from "../Input";
import Button from "../Button";
import TextLink from "../TextLink";

storiesOf("Form | FormRow", module).add("default", () => (
  <div>
    <div className="story-spacer">
      <FormRow>
        <Input type="email" />
        <Button>Post</Button>
      </FormRow>
    </div>
    <div className="story-spacer">
      <FormRow plain>
        <Input plain />
        <TextLink>Post</TextLink>
      </FormRow>
    </div>
  </div>
));
