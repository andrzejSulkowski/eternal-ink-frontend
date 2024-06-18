import BulletPoint from "@/components/2.molecules/BulletPoint/BulletPoint";

function WhyEngrave() {
  return (
    <div className="px-80 font-manrope">
      <h1 className="font-extrabold text-6xl w-full text-center mt-24">
        Why Engrave?
      </h1>
      {/* First Section */}
      <div className="w-full grid grid-cols-2 mt-32">
        <div>
          <h2 className="font-extrabold text-4xl">A Journey Through Time</h2>
          <p className="mt-6 text-ei-primary-faded text-sm">
            Imagine leaving a mark that transcends the physical realm, a message
            or a piece of wisdom preserved in the digital ether forever.
            Engraving on the blockchain is your gateway to becoming a part of
            history—a digital time capsule where every word counts. Whether
            it's:
          </p>
          <div className="flex flex-col gap-4 mt-7">
            <BulletPoint
              highlighted="Celebrating Milestones:"
              description="Immortalize birthday wishes, anniversaries, or the birth of a new family member."
            />
            <BulletPoint
              highlighted="Preserving Memories:"
              description="Keep alive the words of wisdom from your grandparents, your child's first words, or the vows from your wedding day."
            />
            <BulletPoint
              highlighted="Capturing Moments:"
              description="Solidify your thoughts during significant global events, personal achievements, or simply a day that felt like magic."
            />
          </div>
          <p className="font-bold text-sm mt-8">
            Engraving offers a unique joy, knowing your words will outlast time,
            offering a peek into what mattered to us for generations to come.
          </p>
        </div>
        <div className="w-full h-full flex justify-center items-center">
            <img 
            className="w-4/5 aspect-square"
            src="/storybook_resources/dwarf3.png"/>
        </div>
      </div>
      {/* Second Section */}
      <div></div>
    </div>
  );
}
export default WhyEngrave;
