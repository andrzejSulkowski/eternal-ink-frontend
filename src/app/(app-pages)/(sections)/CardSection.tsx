import Ball from "@/components/1.atoms/Ball/Ball"
import CardsCarousel, {CardProps} from "@/components/3.organisms/CardsCarousel/CardsCarousel"

function CardSection() {

    const cards:  CardProps[] = [
        {
            title: "Transaction Cost can range",
            highlightedTitle: "from 1$ up to 32$",
            description:
              "Just type in your message and we'll show you what the engraving fees are at the present time",
        },
        {
            title: "Forever on the Blockchain",
            highlightedTitle: "On the Blockchain",
            description: "We'll show you how to do it",
        },
        {
            title: "Send your message",
            highlightedTitle: "To a friend",
            description: "Just type in your message and send him the link",
        }
    ]

  return (
    <div className="my-48 px-60 relative">
        <CardsCarousel
        cards={cards}
        />
        <Ball className="absolute left-[7%] top-[35%] z-20 blur-sm"/>
        <Ball className="absolute right-[10%] top-[-50%] -z-20 blur-lg opacity-60"/>
    </div>
  )
}
export default CardSection