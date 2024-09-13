import { useState, type PropsWithChildren, type SyntheticEvent } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Box from "@mui/material/Box";
import Tabs, { type TabsProps } from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const meta = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Example/Tabs",
  component: Tabs,
  tags: ["autodocs"],
  argTypes: {
    centered: { control: "boolean" },
    indicatorColor: {
      control: "inline-radio",
      options: ["primary", "secondary"],
    },
    orientation: {
      control: "inline-radio",
      options: ["horizontal", "vertical"],
    },
    scrollButtons: { control: "inline-radio", options: ["auto", true, false] },
    textColor: {
      control: "inline-radio",
      options: ["inherit", "primary", "secondary"],
    },
    variant: {
      control: "inline-radio",
      options: ["fullWidth", "scrollable", "standard"],
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;

type Story = StoryObj<typeof Tabs>;

const BasicWithHooks = (props: TabsProps) => {
  const [value, setValue] = useState(0);
  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange} {...props}>
      <Tab label="One" />
      <Tab label="Two" />
      <Tab label="Three" />
    </Tabs>
  );
};

export const Basic: Story = {
  render: (props) => <BasicWithHooks {...props} />,
};

const SecondaryWithHooks = (props: TabsProps) => {
  const [value, setValue] = useState(0);
  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs value={value} onChange={handleChange} {...props}>
      <Tab label="One" />
      <Tab label="Two" />
      <Tab label="Three" />
    </Tabs>
  );
};

export const Secondary: Story = {
  args: {
    indicatorColor: "secondary",
    textColor: "inherit",
  },
  render: (props) => <SecondaryWithHooks {...props} />,
};

type TabPanelProps = PropsWithChildren<{
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

const WithTabPaneWithHooks = (props: TabsProps) => {
  const [value, setValue] = useState(0);
  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} {...props}>
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
  args: {
    indicatorColor: "secondary",
    textColor: "secondary",
  },
  render: (props) => <WithTabPaneWithHooks {...props} />,
};
