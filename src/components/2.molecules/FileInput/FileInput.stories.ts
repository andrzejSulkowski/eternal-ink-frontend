import type { Meta, StoryObj } from "@storybook/react";
import FileInput from "@/components/2.molecules/FileInput/FileInput";
import { fn } from "@storybook/test";

let file: File | null = null;
const meta: Meta<typeof FileInput> = {
  title: "Eternal Ink/molecules/File Input/Input",
  component: FileInput,
  decorators: [],
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "padded",
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
    file: file ?? undefined,
    onInput: (f: File | null) => {
      file = f
      console.log("set file: ", file)
    },
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
    onInput: (f: File | null) => {
      console.log("file (WithoutFile Story): ", f);
      file = f;
      console.log("new file: ", file)
    },
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
    file: new File([""], "magic_axe.png"),
    onInput: (f: File | null) => console.log("file (WithFile): ", f)
    
  },
};
