import React from 'react';

import type { Preview } from '@storybook/react';

import { GlobalStyles } from '../src/styles/global';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <>
        <GlobalStyles />
        <Story />
      </>
    ),
  ],
};

export default preview;

