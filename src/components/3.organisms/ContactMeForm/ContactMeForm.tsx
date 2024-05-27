import React, { ChangeEvent } from "react";
import Textarea from "@/components/1.atoms/Textarea/Textarea";
import Input from "@/components/1.atoms/Input/Input";
import Button from "@/components/1.atoms/Button/Button";
import type { EIProps } from "@/types";
import { classNames } from "@/utils/className";

interface Props extends EIProps {
  title: string;
  subtitle: string;

  name: string;
  namePlaceholder: string;
  onNameChange?: (name: ChangeEvent<HTMLInputElement>) => void;

  email: string;
  emailPlaceholder: string;
  onEmailChange?: (email: ChangeEvent<HTMLInputElement>) => void;

  message: string;
  messagePlaceholder: string;
  onMessageChange?: (message: ChangeEvent<HTMLTextAreaElement>) => void;

  onSubmit: () => void;
}

function ContactMeForm({
  title,
  subtitle,
  name,
  namePlaceholder,
  onNameChange,
  email,
  emailPlaceholder,
  onEmailChange,
  message,
  messagePlaceholder,
  onMessageChange,
  className,
  onSubmit
}: Props) {
  const [$name, setName] = React.useState("");
  const [$email, setEmail] = React.useState("");
  const [$message, setMessage] = React.useState("");

  return (
    <div
      className={classNames(
        "font-manrope bg-[#09090A] rounded-[1.25rem] flex flex-col justify-center items-center gap-8 py-10 px-5",
        className
      )}
    >
      <div className="flex flex-col gap-3">
        <div className="font-extrabold text-white text-3xl text-center text-nowrap">
          {title}
        </div>
        <div className="text-ei-primary-faded text-center text-nowrap">
          {subtitle}
        </div>
      </div>
      <form className="flex flex-col items-center gap-8 w-full">
        <div className="flex flex-col items-center gap-5 w-full">
          <Input
            value={name}
            placeholder={namePlaceholder}
            onChange={onNameChange}
          />
          <Input
            value={email}
            placeholder={emailPlaceholder}
            onChange={onNameChange}
          />
          <Textarea
            value={message}
            placeholder={messagePlaceholder}
            onChange={onMessageChange}
            className="h-36"
          />
        </div>

        <Button onClick={onSubmit} className="w-min text-nowrap">Send My Message</Button>
      </form>
    </div>
  );
}

export default ContactMeForm;
