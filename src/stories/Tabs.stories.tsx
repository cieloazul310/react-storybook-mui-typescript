import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

const meta: Meta<typeof Tabs> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Example/Tabs',
  component: Tabs,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Tabs>;

const BasicWithHooks = () => {
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

export const Basic: Story = {
  render: () => <BasicWithHooks />,
};

const SecondaryWithHooks = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs
      indicatorColor="secondary"
      textColor="inherit"
      value={value}
      onChange={handleChange}
    >
      <Tab label="One" />
      <Tab label="Two" />
      <Tab label="Three" />
    </Tabs>
  );
};

export const Secondary: Story = {
  render: () => <SecondaryWithHooks />,
};

type TabPanelProps = React.PropsWithChildren<{
  index: number;
  value: number;
}>;

function TabPanel({ children, value, index }: TabPanelProps) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const WithTabPaneWithHooks = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          indicatorColor="secondary"
          textColor="secondary"
          value={value}
          onChange={handleChange}
        >
          <Tab label="One" />
          <Tab label="Two" />
          <Tab label="Three" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
};

export const WithTabPane: Story = {
  render: () => <WithTabPaneWithHooks />,
};
