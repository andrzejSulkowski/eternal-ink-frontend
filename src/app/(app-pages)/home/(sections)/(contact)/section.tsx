"use client";
import ContactMeForm from "@/components/3.organisms/ContactMeForm/ContactMeForm";
import { classNames } from "@/utils/className";

function BgBlue1({ className }: { className?: string }) {
  return (
    <div
      className={classNames(
        "w-full h-full max-w-full max-h-full",
        className
      )}
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


function ContactSection() {
  return (
    <div className="px-60 font-manrope w-full relative py-36">
      <div className="w-full grid grid-cols-2 gap-16 my-24">
        {/* Col1 */}
        <div className="w-full h-full flex flex-col justify-center gap-6">
          <h1 className="font-extrabold text-6xl">
            Got Questions <br />
            or Need a Hand? <br />
            I'm Here to Help!
          </h1>
          <p className="text-ei-primary-faded text-sm">
            Your curiosity and engagement drive this project forward. Whether
            you have inquiries about engraving, need guidance through the
            process, or simply want to share your thoughts, I'm here for you.
            Use the contact form below for any questions or feedback, and I'll
            get back to you promptly.
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
            onSubmit={(v) => console.log("Submitted: ", v)}
          />
        </div>
      </div>
      {/* BG */}
      <div>
        <BgBlue1 className="absolute top-[-10%] left-[5%] -z-10 blur-[126px] opacity-60" />
      </div>
    </div>
  );
}
export default ContactSection;
