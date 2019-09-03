import { storiesOf } from "@storybook/react";
import React from "react";
import Navbar from "./";

const menuItems = [
  {
    title: "Learn",
    link: "/learn"
  },
  {
    title: "Reviews",
    link: "/reviews"
  },
  {
    title: "More",
    subMenu: [
      {
        title: "Products",
        link: "/products"
      },
      {
        title: "Extra",
        link: "/extra"
      }
    ]
  }
];

storiesOf("Advanced | Navbar", module).add("default", () => (
  <div>
    <div className="story-spacer">
      <Navbar menuItems={menuItems} />
    </div>
  </div>
));
