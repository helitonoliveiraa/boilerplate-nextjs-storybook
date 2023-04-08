import type { Meta, StoryObj } from '@storybook/react';

import { Main } from './index';

const meta: Meta<typeof Main> = {
  title: 'Main',
  component: Main,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Main>;
export const Basic: Story = {
  args: {
    title: 'Boilerplate NextJS.',
  },
};
