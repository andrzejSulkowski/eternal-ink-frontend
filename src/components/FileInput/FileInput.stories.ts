import type { Meta, StoryObj } from "@storybook/react";
import FileInput from "@/components/FileInput/FileInput";
import { fn } from "@storybook/test";

const meta = {
  title: "Ethernal Ink/File Input",
  component: FileInput,
  decorators: [],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    allowedMimeTypes: { control: "text" },
    file: { control: "file" },
  },
  args: {
    allowedMimeTypes: [
      "image/jpg",
      "image/png",
      "image/jpeg",
      "application/pdf",
    ],
    file: undefined,
    onInput: (file: File | null) => console.log("file: ", file),
  },
} satisfies Meta<typeof FileInput>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const WithoutFile: Story = {
  args: {
    allowedMimeTypes: [
      "image/jpg",
      "image/png",
      "image/jpeg",
      "application/pdf",
    ],
    file: undefined,
    onInput: (file: File | null) => console.log("file: ", file),
  },
};

export const WithFile: Story = {
  args: {
    allowedMimeTypes: [
      "image/jpg",
      "image/png",
      "image/jpeg",
      "application/pdf",
    ],
    file: new File([new ArrayBuffer(0)], "Magic Axe"),
    onInput(file: File | null) {
      console.log("file: ", file);
    },
  },
};
