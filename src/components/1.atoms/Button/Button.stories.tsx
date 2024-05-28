import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import { fn } from "@storybook/test";
import { WiStars } from "react-icons/wi";
import ThreeStars from "@/components/Svgs/ThreeStars";

const meta = {
  title: "Eternal Ink/Button",
  component: Button,
  decorators: [],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    textContent: "Begin Your Legacy"
  },
};


const IconWrapper = () => (
  <div className="h-full w-5 ml-1">
    <WiStars size={"120%"}/>
  </div>
)

export const Filled: Story = {
  args: {
    textContent: "Begin Your Legacy",
    children: ThreeStars({className: "max-w-5 ml-2"})
  },
};

