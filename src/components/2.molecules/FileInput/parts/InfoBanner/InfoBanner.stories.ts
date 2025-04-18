import type { Meta, StoryObj } from "@storybook/react";
import InfoBanner from "@/components/2.molecules/FileInput/parts/InfoBanner/InfoBanner";
import { fn } from "@storybook/test";

const meta = {
  title: "Eternal Ink/molecules/File Input/Parts/Info Banner",
  component: InfoBanner,
  decorators: [],
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
  },
} satisfies Meta<typeof InfoBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    allowedMimeTypes: ['application/pdf', 'image/jpeg', 'image/jpg']
  },
};