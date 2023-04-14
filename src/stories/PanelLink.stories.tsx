import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import PanelLink from '../PanelLink';

const meta: Meta<typeof PanelLink> = {
  title: 'Example/PanelLink',
  component: PanelLink,
};

export default meta;

type Story = StoryObj<typeof PanelLink>;

export const Basic: Story = {
  render: () => (
    <PanelLink href="https://cieloazul310.github.io">水戸地図</PanelLink>
  ),
};

export const WithoutBorder: Story = {
  render: () => (
    <PanelLink href="https://cieloazul310.github.io/rockman/" disableBorder>ロック大陸漫遊記プレイリスト集</PanelLink>
  ),
};
