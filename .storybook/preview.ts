import type { Preview } from "@storybook/react";
import '../src/app/globals.css';
import { withThemeByDataAttribute } from "@storybook/addon-themes";
console.warn("loaded global.css")

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [withThemeByDataAttribute({
      themes: {
          nameOfTheme: 'dataAttributeForTheme',
          light: '',
          dark: 'dark',
      },
      defaultTheme: 'dark',
  })]
};

export default preview;
