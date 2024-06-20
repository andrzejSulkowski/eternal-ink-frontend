import BulletPoint from "@/components/2.molecules/BulletPoint/BulletPoint";
import E from "@/components/Svgs/E";
import { EIProps } from "@/types";
import { classNames } from "@/utils/className";

function Ellipse1({ className }: EIProps) {
  return (
    <div
      className={classNames("w-full h-full max-w-full max-h-full", className)}
    >
      <svg
        className="max-w-full max-h-full"
        viewBox="0 0 857 798"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g opacity="0.4" filter="url(#filter0_f_56_627)">
          <path
            d="M545.89 604.681C375.324 691.449 173.769 719.486 123.079 619.843C72.389 520.199 261.75 235.923 432.315 149.154C602.88 62.3859 674.694 151.74 725.384 251.384C776.074 351.028 716.455 517.913 545.89 604.681Z"
            fill="url(#paint0_linear_56_627)"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_56_627"
            x="0.716965"
            y="0.0449219"
            width="856.129"
            height="797.047"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="57"
              result="effect1_foregroundBlur_56_627"
            />
          </filter>
          <linearGradient
            id="paint0_linear_56_627"
            x1="317.326"
            y1="445.685"
            x2="349.604"
            y2="222.571"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#0A0A20" stopOpacity="0" />
            <stop offset="0.97" stopColor="#8B189E" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
function Ellipse2({ className }: EIProps) {
  return (
    <div
      className={classNames("w-full h-full max-w-full max-h-full", className)}
    >
      <svg viewBox="0 0 865 789" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.6" filter="url(#filter0_f_56_626)">
          <path
            d="M266.924 543.485C141.786 398.703 66.235 209.752 150.816 136.647C235.398 63.5414 556.788 179.209 681.925 323.991C807.063 468.773 737.536 559.918 652.955 633.023C568.373 706.128 392.062 688.267 266.924 543.485Z"
            fill="url(#paint0_linear_56_626)"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_56_626"
            x="0.930069"
            y="0.0827637"
            width="863.237"
            height="788.911"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="57"
              result="effect1_foregroundBlur_56_626"
            />
          </filter>
          <linearGradient
            id="paint0_linear_56_626"
            x1="610.41"
            y1="631.458"
            x2="336.477"
            y2="715.772"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#0A0A20" stop-opacity="0" />
            <stop offset="1" stop-color="#262E73" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function WhyEngrave() {
  return (
    <div className="px-60 font-manrope">
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
          <div className="w-4/5 aspect-square relative">
            <img
              className="w-4/5 aspect-square z-10"
              src="/storybook_resources/dwarf3.png"
            />
            <E className="absolute top-0 left-0 h-full  -z-10" />
            <Ellipse1 className="absolute top-0 right-[-15%] -z-10" />
            <Ellipse2 className="absolute bottom-[-20%] left-[-20%] -z-10" />
          </div>
        </div>
      </div>
      {/* Second Section */}
      <div className="w-full grid grid-cols-2 mt-32">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-4/5 aspect-square relative">
            <img
              className="w-4/5 aspect-square z-10"
              src="/storybook_resources/dwarf4.png"
            />
            <E className="absolute top-0 left-0 h-full  -z-10" />
            <Ellipse1 className="absolute top-0 right-[-15%] -z-10" />
            <Ellipse2 className="absolute bottom-[-20%] left-[-20%] -z-10" />
          </div>
        </div>

        <div>
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
        </div>
      </div>
    </div>
  );
}
export default WhyEngrave;
