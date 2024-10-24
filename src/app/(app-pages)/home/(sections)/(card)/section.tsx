import Ball from "@/components/1.atoms/Ball/Ball";
import CardsCarousel, {
  CardProps,
} from "@/components/3.organisms/CardsCarousel/CardsCarousel";
import { EIProps } from "@/types";
import { classNames } from "@/utils/className";

function CardSection({ className }: EIProps) {
  const cards: CardProps[] = [
    {
      title: "Transaction Cost can range",
      highlightedTitle: "from 1$ up to 32$",
      description:
        "Just type in your message and we'll show you what the engraving fees are at the present time",
    },
    {
      title: "Forever",
      highlightedTitle: "On the Blockchain",
      description: "We'll show you how to do it",
    },
    {
      title: "Send a message",
      highlightedTitle: "to a friend",
      description: "Just type in your message and send him the link",
    },
  ];

  return (
    <div
      className={classNames(
        "px-12 my-24 md:my-48 md:px-60 relative overflow-visible",
        className
      )}
    >
      <CardsCarousel cards={cards} />
      <Ball className="absolute -left-[30%] md:left-[7%] top-[35%] z-20 blur-sm w-1/2 md:w-auto" />
      <Ball className="absolute right-[2%] md:right-[10%] top-[-50%] -z-20 blur-lg opacity-60" />
    </div>
  );
}
export default CardSection;
