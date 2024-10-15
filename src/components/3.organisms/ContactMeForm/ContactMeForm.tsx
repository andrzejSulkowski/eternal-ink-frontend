import React, { ChangeEvent } from "react";
import Textarea from "@/components/1.atoms/Textarea/Textarea";
import Input from "@/components/1.atoms/Input/Input";
import Button from "@/components/1.atoms/Button/Button";
import type { EIProps } from "@/types";
import { classNames } from "@/utils/className";

interface Props extends EIProps {
  title: string;
  subtitle: string;

  namePlaceholder: string;
  emailPlaceholder: string;
  messagePlaceholder: string;

  isDisabled?: boolean;

  onSubmit: ({
    name,
    email,
    message,
  }: {
    name: string;
    email: string;
    message: string;
  }) => void;
}

function ContactMeForm({
  title,
  subtitle,
  namePlaceholder,
  emailPlaceholder,
  messagePlaceholder,
  className,
  isDisabled,
  onSubmit,
}: Props) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  return (
    <div
      className={classNames(
        "font-manrope bg-[#09090A] rounded-[1.25rem] flex flex-col justify-center items-center gap-8 py-10 px-5 border border-solid border-[#242438]",
        className
      )}
    >
      <div className="flex flex-col gap-3">
        <div className="font-extrabold text-white text-3xl text-center text-nowrap">
          {title}
        </div>
        <div className="text-ei-primary-faded text-center text-nowrap text-xl md:text-base">
          {subtitle}
        </div>
      </div>
      <form className="flex flex-col items-center gap-8 w-full">
        <div className="flex flex-col items-center gap-5 w-full">
          <Input
            value={name}
            placeholder={namePlaceholder}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
            isDisabled={isDisabled}
          />
          <Input
            value={email}
            placeholder={emailPlaceholder}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            isDisabled={isDisabled}
          />
          <Textarea
            value={message}
            placeholder={messagePlaceholder}
            onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
              setMessage(e.target.value)
            }
            className="h-36"
            isDisabled={isDisabled}
          />
        </div>

        <Button
          onClick={() => onSubmit({ name, email, message })}
          className="w-full md:w-min text-nowrap justify-center md:justify-start"
          isDisabled={isDisabled}
        >
          Send My Message
        </Button>
      </form>
    </div>
  );
}

export default ContactMeForm;
