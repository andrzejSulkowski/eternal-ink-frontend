"use client";
import { useBanner } from "@/components/1.atoms/Banner/BannerContext";
import ContactMeForm from "@/components/3.organisms/ContactMeForm/ContactMeForm";
import api from "@/libs/api/general";
import { classNames } from "@/utils/className";
import { useCallback, useEffect, useState } from "react";
import { validateEmail } from "@/utils/validateEmail";
import { EIProps } from "@/types";
import { useLoadingScreen } from "@/context/loadingScreenCtx";
import { i } from "framer-motion/client";

function BgBlue1({ className }: { className?: string }) {
  return (
    <div
      className={classNames("w-full h-full max-w-full max-h-full", className)}
    >
      <svg
        viewBox="0 0 820 619"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-auto h-full aspect-square"
      >
        <path
          d="M275.787 93.9998C126.587 -100.8 32.9532 53.4998 4.78657 155C-22.7134 301 86.2866 541 438.287 608.5C790.287 676 888.787 371.5 773.787 293.5C658.787 215.5 462.287 337.5 275.787 93.9998Z"
          fill="#4E5EF2"
        />
      </svg>
    </div>
  );
}

function ContactSection({ className }: EIProps) {
  const [isDisabled, setIsDisabled] = useState(false);
  const { showLoadingScreen } = useLoadingScreen();

  const { showBanner } = useBanner();
  const sendContactForm = useCallback(
    async (data: { name: string; email: string; message: string }) => {
      if (data.message.length < 10)
        return showBanner("Message is too short", { danger: true });
      else if (data.message.length > 500)
        return showBanner("Message is too long", { danger: true });

      if (validateEmail(data.email) === false)
        return showBanner("Invalid Email", { danger: true });

      if (data.name.length < 3)
        return showBanner("Name is too short", { danger: true });

      const response = await api.postContactMessage(data);
      if (response.ok) {
        showBanner("Message Sent Successfully", { danger: false });
        setIsDisabled(true);
      }
    },
    [showBanner, setIsDisabled]
  );

  return (
    <div
      className={classNames(
        "px-12 lg:px-60 font-manrope w-full relative py-12 md:py-36",
        className
      )}
    >
      <div className="w-full md:grid md:grid-cols-2 gap-16 my-24 flex flex-col">
        {/* Col1 */}
        <div className="w-full h-full flex flex-col justify-center gap-6">
          <h1 className="font-extrabold text-6xl">
            Got Questions <br />
            or Need a Hand? <br />
            I&apos;m Here to Help!
          </h1>
          <p className="text-ei-primary-faded text-xl lg:text-sm">
            Your curiosity and engagement drive this project forward. Whether
            you have inquiries about engraving, need guidance through the
            process, or simply want to share your thoughts, I&apos;m here for
            you. Use the contact form below for any questions or feedback, and
            I&apos;ll get back to you promptly.
          </p>
        </div>
        {/* Col2 */}
        <div>
          <ContactMeForm
            title="Eager to hear from you"
            subtitle="Fill out the form with any inquiries or thoughts."
            namePlaceholder="Name"
            emailPlaceholder="Email"
            messagePlaceholder="Message"
            isDisabled={isDisabled}
            onSubmit={sendContactForm}
          />
        </div>
      </div>
      {/* BG */}
      <div>
        <BgBlue1 className="absolute top-[-2%] left-[5%] -z-10 blur-[126px] opacity-60 !w-[60%] !h-auto -rotate-6" />
      </div>
    </div>
  );
}
export default ContactSection;
