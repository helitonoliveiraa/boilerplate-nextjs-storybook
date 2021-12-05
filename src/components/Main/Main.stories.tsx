import { ComponentMeta } from '@storybook/react';
import { Main } from './index';

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'default title',
    description: 'default description',
  },
} as ComponentMeta<typeof Main>;

export const Basic: typeof Main = args => <Main {...args} />;
