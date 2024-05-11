import type { Preview, ReactRenderer } from "@storybook/react";
import "../src/app/globals.css";
import { manrope } from "../src/libs/fonts";
import * as React from "react";

const preview: Preview = {
  parameters: {
    backgrounds: {
      default: "dark",
      values: [
        {
          name: "dark",
          value: "#1E1E1E",
        },
      ],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div className={`${manrope.variable}`}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
