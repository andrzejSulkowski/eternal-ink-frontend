import type { Meta, StoryObj } from "@storybook/react";
import CardsGroup from "./CardsGroup";
import { Props as CardProps } from "@/components/2.molecules/Card/Card";

const mockCards:  CardProps[] = [
    {
        title: "Transaction Cost can range",
        highlightedTitle: "from 1$ up to 32$",
        description:
          "Just type in your message and we'll show you what the engraving fees are at the present time",
    },
    {
        title: "Your message will last forever",
        highlightedTitle: "on the blockchain",
        description: "We'll show you how to do it",
    },
    {
        title: "You can also send your message",
        highlightedTitle: "to a friend",
        description: "Just type in your message and send him the link",
    }
]

const meta = {
  title: "Ethernal Ink/Cards Group",
  component: CardsGroup,
  decorators: [],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {
  },
} satisfies Meta<typeof CardsGroup>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
  args: {
    cards: mockCards
  },
};
