import { withKnobs, text } from '@storybook/addon-knobs';
import { ComponentMeta } from '@storybook/react';
import { Main } from './index';

export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs],
} as ComponentMeta<typeof Main>;

export const Basic = () => (
  <Main
    title={text('Title', 'React Avançado')}
    description={text(
      'Description',
      'TypeScript, ReactJS, NextJS e Styled Components',
    )}
  />
);

export const Secondary = () => (
  <Main
    title={text('Title', 'React Avançado1234')}
    description={text(
      'Description',
      'TypeScript, ReactJS, NextJS e Styled Components',
    )}
  />
);
