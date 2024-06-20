'use client';
import ContactMeForm from "@/components/3.organisms/ContactMeForm/ContactMeForm";

function ContactSection() {
  return (
    <div className="px-60 font-manrope w-full">
      <div className="w-full grid grid-cols-2">
        {/* Col1 */}
        <div className="w-full">
          <h1 className="font-extrabold text-6xl">Got Questions or Need a Hand? I'm Here to Help!</h1>
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
    </div>
  );
}
export default ContactSection;
