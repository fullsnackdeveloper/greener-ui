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
      <div className="story-spacer">
        <Button type="white">Disabled</Button>
      </div>
    </div>
  ))
  .add("sizes", () => (
    <div style={{ display: "flex" }}>
      <div>
        <div className="story-spacer">
          <Button type="primary" size="tiny">
            Tiny
          </Button>
        </div>
        <div className="story-spacer">
          <Button type="secondary" size="small">
            Small
          </Button>
        </div>
        <div className="story-spacer">
          <Button type="tertiary">Regular</Button>
        </div>
        <div className="story-spacer">
          <Button type="disabled" size="large">
            Large
          </Button>
        </div>
        <div className="story-spacer">
          <Button type="white">Regular White</Button>
        </div>
      </div>
      <div>
        <div className="story-spacer">
          <Button
            type="primary"
            size="tiny"
            icon={{ symbol: "chevron-right", position: "right" }}
          />
        </div>
        <div className="story-spacer">
          <Button
            type="secondary"
            size="small"
            icon={{ symbol: "chevron-left", position: "right" }}
          />
        </div>
        <div className="story-spacer">
          <Button
            type="tertiary"
            icon={{ symbol: "plus", position: "right" }}
          />
        </div>
        <div className="story-spacer">
          <Button
            type="disabled"
            size="large"
            icon={{ symbol: "account-plus", position: "right" }}
          />
        </div>
        <div className="story-spacer">
          <Button
            type="white"
            icon={{ symbol: "account-plus", position: "right" }}
          />
        </div>
      </div>
      <div>
        <div className="story-spacer">
          <Button
            type="primary"
            size="tiny"
            icon={{ symbol: "plus", position: "left" }}
          >
            Primary
          </Button>
        </div>
        <div className="story-spacer">
          <Button
            type="secondary"
            size="small"
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
          <Button
            type="disabled"
            size="large"
            icon={{ symbol: "plus", position: "left" }}
          >
            Disabled
          </Button>
        </div>
        <div className="story-spacer">
          <Button type="white" icon={{ symbol: "plus", position: "left" }}>
            Regular white
          </Button>
        </div>
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
        <div className="story-spacer">
          <Button type="white" icon={{ symbol: "plus", position: "left" }}>
            White
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
        <div className="story-spacer">
          <Button type="white" icon={{ symbol: "plus", position: "right" }}>
            White
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
      <div className="story-spacer">
        <Button type="white" icon={{ symbol: "arrow-up", position: "right" }} />
      </div>
    </div>
  ))
  .add("on color", () => (
    <div style={{ background: "#20B9B6", padding: 10, display: "flex" }}>
      <div>
        <div className="story-spacer">
          <Button type="primary" onColor>
            Primary
          </Button>
        </div>
        <div className="story-spacer">
          <Button type="secondary" onColor>
            Secondary
          </Button>
        </div>
        <div className="story-spacer">
          <Button type="tertiary" onColor>
            Tertiary
          </Button>
        </div>
        <div className="story-spacer">
          <Button type="disabled" onColor>
            Disabled
          </Button>
        </div>
        <div className="story-spacer">
          <Button type="white" onColor>
            Disabled
          </Button>
        </div>
      </div>
      <div>
        <div className="story-spacer">
          <Button
            type="primary"
            onColor
            icon={{ symbol: "chevron-right", position: "right" }}
          />
        </div>
        <div className="story-spacer">
          <Button
            type="secondary"
            onColor
            icon={{ symbol: "chevron-left", position: "right" }}
          />
        </div>
        <div className="story-spacer">
          <Button
            type="tertiary"
            onColor
            icon={{ symbol: "plus", position: "right" }}
          />
        </div>
        <div className="story-spacer">
          <Button
            type="disabled"
            onColor
            icon={{ symbol: "account-plus", position: "right" }}
          />
        </div>
        <div className="story-spacer">
          <Button
            type="white"
            onColor
            icon={{ symbol: "account-plus", position: "right" }}
          />
        </div>
      </div>
    </div>
  ));
