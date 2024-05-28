import type { Preview, ReactRenderer } from "@storybook/react";
import "../src/app/globals.css";
import { manrope, kanit } from "../src/libs/fonts";
import * as React from "react";
import {
  INITIAL_VIEWPORTS,
  MINIMAL_VIEWPORTS,
} from "@storybook/addon-viewport";

const preview: Preview = {
  parameters: {
    viewport: {
      viewports: {
        ...INITIAL_VIEWPORTS,
        ...MINIMAL_VIEWPORTS,
      },
    },
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
      <div className={`${manrope.variable} ${kanit.variable}`}>
        <Story />
      </div>
    ),
  ],
};

export default preview;
