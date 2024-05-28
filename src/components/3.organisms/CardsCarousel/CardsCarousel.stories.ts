import type { Meta, StoryObj } from "@storybook/react";
import CardsCarousel from "./CardsCarousel";
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
        highlightedTitle: "On the Blockchain",
        description: "We'll show you how to do it",
    },
    {
        title: "Send your message",
        highlightedTitle: "To a friend",
        description: "Just type in your message and send him the link",
    }
]

const meta = {
  title: "Eternal Ink/Cards Carousel",
  component: CardsCarousel,
  decorators: [],
  parameters: {
    layout: "centered",
  },
  argTypes: {},
  args: {
  },
} satisfies Meta<typeof CardsCarousel>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
  args: {
    cards: mockCards
  },
};
