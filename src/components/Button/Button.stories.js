import { storiesOf } from "@storybook/react";
import React from "react";
import Button from "./";

storiesOf("Button", module)
  .add("default", () => (
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
  ))
  .add("with icon", () => (
    <div style={{ display: "flex" }}>
      <div>
        <div className="story-spacer">
          <Button type="primary" icon={{ symbol: "plus", position: "left" }}>
            Primary
          </Button>
        </div>
        <div className="story-spacer">
          <Button
            type="secondary"
            icon={{ symbol: "view-dashboard", position: "left" }}
          >
            Secondary
          </Button>
        </div>
        <div className="story-spacer">
          <Button
            type="tertiary"
            icon={{ symbol: "compare", position: "left" }}
          >
            Tertiary
          </Button>
        </div>
        <div className="story-spacer">
          <Button type="disabled" icon={{ symbol: "plus", position: "left" }}>
            Disabled
          </Button>
        </div>
      </div>
      <div>
        <div className="story-spacer">
          <Button
            type="primary"
            icon={{ symbol: "account-plus", position: "right" }}
          >
            Primary
          </Button>
        </div>
        <div className="story-spacer">
          <Button type="secondary" icon={{ symbol: "plus", position: "right" }}>
            Secondary
          </Button>
        </div>
        <div className="story-spacer">
          <Button type="tertiary" icon={{ symbol: "send", position: "right" }}>
            Tertiary
          </Button>
        </div>
        <div className="story-spacer">
          <Button type="disabled" icon={{ symbol: "plus", position: "right" }}>
            Disabled
          </Button>
        </div>
      </div>
    </div>
  ))
  .add("icons", () => (
    <div>
      <div className="story-spacer">
        <Button
          type="primary"
          icon={{ symbol: "chevron-right", position: "right" }}
        />
      </div>
      <div className="story-spacer">
        <Button
          type="secondary"
          icon={{ symbol: "chevron-left", position: "right" }}
        />
      </div>
      <div className="story-spacer">
        <Button type="tertiary" icon={{ symbol: "plus", position: "right" }} />
      </div>
      <div className="story-spacer">
        <Button
          type="disabled"
          icon={{ symbol: "account-plus", position: "right" }}
        />
      </div>
    </div>
  ));
