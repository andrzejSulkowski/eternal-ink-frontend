import type { Meta, StoryObj } from "@storybook/react";
import TickHor from "./TickHor";
import {Props as TickProps} from "@/components/1.atoms/Tick/Tick";
import { fn } from "@storybook/test";


const ticks: TickProps[] = [
    {
        address: "0x1234567890",
        txHash: "0x1234567890",
        onClick: (id: string) => console.log(id)
    },
    {
        address: "0x8884567890",
        txHash: "0x1234567890",
        onClick: (id: string) => console.log(id)
    },
    {
        address: "0x9994567890",
        txHash: "0x1234567890",
        onClick: (id: string) => console.log(id)
    }
]

const meta = {
  title: "Ethernal Ink/Tick Hor",
  component: TickHor,
  decorators: [],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "padded",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  args: {
  }
} satisfies Meta<typeof TickHor>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
    args: {
        ticks: ticks
    }
};