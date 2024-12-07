import Ball from "@/components/1.atoms/Ball/Ball";
import BallBlur from "@/components/1.atoms/Ball/BallBlur";
import CardsCarousel, {
  CardProps,
} from "@/components/3.organisms/CardsCarousel/CardsCarousel";
import { EIProps } from "@/types";
import { classNames } from "@/utils/className";

const cards: CardProps[] = [
  {
    title: "Engraving Fees",
    highlightedTitle: "Starting at Just $1",
    description:
      "Enter your message, and we'll instantly calculate the current engraving fees, ranging from affordable to premium options.",
  },
  {
    title: "Permanent Imprint",
    highlightedTitle: "Stored Forever on the Blockchain",
    description:
      "Experience true permanence with data stored securely and immutably on the blockchain.",
  },
  {
    title: "Share Your Legacy",
    highlightedTitle: "Send a Timeless Message",
    description:
      "Write your message, generate a link, and share it with someone special to create a lasting connection.",
  },
];
function CardSection({ className }: EIProps) {
  return (
    <div
      className={classNames(
        "px-12 my-24 lg:my-48 lg:px-60 relative overflow-visible",
        className
      )}
    >
      <CardsCarousel cards={cards} />
      <BallBlur className="absolute -left-[30%] md:left-[7%] top-[10%] md:top-[35%] z-20 blur-sm w-1/2 md:w-1/4 h-full" />
      <BallBlur className="absolute right-[2%] md:right-[10%] top-[-50%] -z-20 blur-sm opacity-60 w-1/2 h-1/2" />
    </div>
  );
}
export default CardSection;
