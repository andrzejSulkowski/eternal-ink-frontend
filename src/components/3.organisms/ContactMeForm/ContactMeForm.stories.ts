import type { Meta, StoryObj } from "@storybook/react";
import ContactMeForm from "./ContactMeForm";
import { fn } from "@storybook/test";
import { useState } from "react";

const meta = {
  title: "Ethernal Ink/ContactMeForm",
  component: ContactMeForm,
  decorators: [],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    name: { control: 'text'},
    email: { control: 'text'},
    message: { control: 'text'},
  },
  args: {},
} satisfies Meta<typeof ContactMeForm>;

export default meta;
type Story = StoryObj<typeof meta>;

/*
    title: string;
    subtitle: string;

    name: string;
    namePlaceholder: string;
    onNameChange: (name: ChangeEvent<HTMLInputElement>) => void;

    email: string;
    emailPlaceholder: string;
    onEmailChange: (email: ChangeEvent<HTMLInputElement>) => void;

    message: string;
    messagePlaceholder: string;
    onMessageChange: (message: ChangeEvent<HTMLInputElement>) => void;
*/


export const Default: Story = {
  args: {
    title: "Eager to hear from you!",
    subtitle: "Fill out the form with any inquiries or thoughts",
    name: "",
    namePlaceholder: "Name",
    onNameChange: fn(),
    email: "",
    emailPlaceholder: "Email",
    onEmailChange: fn(),
    message: "",
    messagePlaceholder: "Message",
    onMessageChange: fn(),
    onSubmit: () => console.log("Submit btn clicked!"),
    className: "w-[580px]",
  },
};


