import type { Meta, StoryObj } from '@storybook/react';
import InfoCard from './InfoCard';
import { fn } from '@storybook/test';
import { IoWallet } from "react-icons/io5";
import DollarBanner from '@/components/Svgs/DollarBanner';

const meta = {
  title: 'Eternal Ink/molecules/InfoCard',
  component: InfoCard,
  decorators: [],
  parameters: {
    layout: 'padded',
  },
  argTypes: {},
  args: {},
} satisfies Meta<typeof InfoCard>;
export default meta;
type Story = StoryObj<typeof meta>;



export const Address: Story = {
  args: {
    icon: <IoWallet color='white' size='auto'/>,
    label: "Bitcoin Address:",
    value: "21oedhofntWetqTFn5Au4m41298e0udipj",
    trimValue: true,
  },
};

export const Fees: Story = {
  args: {
    icon: <DollarBanner/>,
    label: "Required Fees:",
    value: "0,00001 BTC",
    trimValue: false,
    isCopyable: false
  },
};