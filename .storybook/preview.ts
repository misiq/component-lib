import type { Preview } from '@storybook/react';
import '../src/lib/tailwind/theme.css';
import '../src/assets/fonts/fonts.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
