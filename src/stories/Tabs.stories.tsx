import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Tabs',
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

export const Basic: ComponentStory<typeof Tabs> = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange}>
      <Tab label="One" />
      <Tab label="Two" />
      <Tab label="Three" />
    </Tabs>
  );
};
