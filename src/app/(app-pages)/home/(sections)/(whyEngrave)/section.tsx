import Ball from "@/components/1.atoms/Ball/Ball";
// Bg
import BgBlack1 from "./(bg)/BgBlack1";
import BgBlue1 from "./(bg)/BgBlue1";
import BgViolet1 from "./(bg)/BgViolet1";
import BgViolet2 from "./(bg)/BgViolet2";
// Cmps
import Ellipse1 from "./(cmp)/Ellipse1";
import Ellipse2 from "./(cmp)/Ellipse2";
import FeatureShowcase from "@/components/2.molecules/FeatureShowcase/FeatureShowcase";

function WhyEngrave() {
  return (
    <div className="px-60 font-manrope">
      <h1 className="font-extrabold text-6xl w-full text-center mt-54">
        Why Engrave?
      </h1>


      <FeatureShowcase
        title="A Journey Through Time"
        description="Imagine leaving a mark that transcends the physical realm, a message or a piece of wisdom preserved in the digital ether forever. Engraving on the blockchain is your gateway to becoming a part of history—a digital time capsule where every word counts. Whether it's:"
        bulletPoints={[
          {
            highlighted: "Celebrating Milestones:",
            description:
              "Immortalize birthday wishes, anniversaries, or the birth of a new family member.",
          },
          {
            highlighted: "Preserving Memories:",
            description:
              "Keep alive the words of wisdom from your grandparents, your child's first words, or the vows from your wedding day.",
          },
          {
            highlighted: "Capturing Moments:",
            description:
              "Solidify your thoughts during significant global events, personal achievements, or simply a day that felt like magic.",
          },
        ]}
        highlighted="Engraving offers a unique joy, knowing your words will outlast time, offering a peek into what mattered to us for generations to come."
        imgSrc="/storybook_resources/dwarf3.png"
        first="content"
        ImgNode={
          <div data-here>
            <Ellipse1 className="absolute top-0 right-[-15%] -z-10" />
            <Ellipse2 className="absolute top-[-10%] left-[-20%] -z-10 blur-md" />
            <Ball className="absolute h-[150%] !max-w-max !max-h-max top-[-42%] right-[-135%] blur-3xl -z-10" />
          </div>
        }
      />

      <FeatureShowcase
        title="Proof of Existence:
                The Practical Magic of File Hashing"
        description="Beyond the whimsy of immortalizing messages, file hashing on the blockchain serves a pivotal role in the digital age. It's not just about preserving a moment but safeguarding your intellectual endeavors. Here's why it's invaluable:"
        bulletPoints={[
          {
            highlighted: "Copyright & Intellectual Property Protection:",
            description:
              "Create an indelible record of your creative works, establishing copyright dates with unassailable proof.",
          },
          {
            highlighted: "Document Verification:",
            description:
              "Verify the existence of important documents before a specific date, essential for legal, academic, or business purposes.",
          },
          {
            highlighted: "Innovation & Integrity:",
            description:
              "Whether you're a creator, a thinker, or an innovator, hashing ensures your original ideas remain untainted and recognized.",
          },
        ]}
        highlighted="In both whimsical and weighty ways, engraving and hashing let you anchor your presence and protect your creations in the immutable flow of blockchain. It's about joy, celebration, and security—wrapped in the promise of eternity."
        imgSrc="/storybook_resources/dwarf4.png"
        first="img"
        ImgNode={
          <div>
            <Ellipse1 className="absolute top-0 right-[-15%] -z-10" />
            <Ellipse2 className="absolute bottom-[-20%] left-[-20%] -z-10" />
            <BgBlack1 className="absolute bottom-[-40%] left-[-10%] -z-10 blur-3xl" />
            <BgViolet1 className="absolute top-[30%] left-[-50%] -z-20 !w-2/3 blur-3xl opacity-60" />
            <Ball className="absolute h-[65%] !max-w-max !max-h-max top-[-20%] left-[-40%] blur-md -z-30" />

          </div>
        }
        ContentNode={
          <div>
            <BgViolet2 className="absolute bottom-[-5%] blur-[146px] -z-10" />
            <BgBlue1 className="absolute top-[40%] right-[-40%] -z-20 !w-2/3 blur-3xl opacity-40" />
            <BgViolet1 className="absolute bottom-[-55%] right-[-5%] -z-20 !w-[40%] blur-3xl rotate-90" />
          </div>
        }
      />
    </div>
  );
}
export default WhyEngrave;

/*
      <div className="w-full grid grid-cols-2 mt-32">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-4/5 aspect-square relative">
            <img
              className="w-4/5 aspect-square z-10"
              src="/storybook_resources/dwarf4.png"
            />
            <E className="absolute top-0 left-0 h-full  -z-10" />
          </div>
        </div>
        <div className="relative">
          <h2 className="font-extrabold text-4xl">
            Proof of Existence:
            <span className="block">The Practical Magic of File Hashing</span>
          </h2>
          <p className="mt-6 text-ei-primary-faded text-sm">
            Beyond the whimsy of immortalizing messages, file hashing on the
            blockchain serves a pivotal role in the digital age. It's not just
            about preserving a moment but safeguarding your intellectual
            endeavors. Here's why it's invaluable:
          </p>
          <div className="flex flex-col gap-4 mt-7">
            <BulletPoint
              highlighted="Copyright & Intellectual Property Protection:"
              description="Create an indelible record of your creative works, establishing copyright dates with unassailable proof."
            />
            <BulletPoint
              highlighted="Document Verification:"
              description="Verify the existence of important documents before a specific date, essential for legal, academic, or business purposes."
            />
            <BulletPoint
              highlighted="Innovation & Integrity:"
              description="Whether you're a creator, a thinker, or an innovator, hashing ensures your original ideas remain untainted and recognized."
            />
          </div>
          <p className="font-bold text-sm mt-8">
            In both whimsical and weighty ways, engraving and hashing let you
            anchor your presence and protect your creations in the immutable
            flow of blockchain. It's about joy, celebration, and
            security—wrapped in the promise of eternity.
          </p>
          <BgViolet2 className="absolute bottom-[-5%] blur-[146px] -z-10" />
          <BgBlue1 className="absolute top-[40%] right-[-40%] -z-20 !w-2/3 blur-3xl opacity-40" />
        </div>
      </div>
*/
