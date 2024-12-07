import SelectionCard from "@/components/2.molecules/SelectionCard/SelectionCard";
import Cube from "@/components/Svgs/Cube";
import Fi from "@/components/Svgs/Fi";
import ThreeRoad from "@/components/Svgs/ThreeRoad";

function SelectionCards() {
  return (
    <div>
      <div className="w-full bg-[#09090A] p-8 flex flex-col md:grid md:grid-cols-3 gap-12 rounded-[20px]">
        <SelectionCard
          icon={Cube()}
          title="Create Your Message"
          description="Start by crafting the message you wish to immortalize on the Bitcoin Blockchain"
        />
        <SelectionCard
          icon={Fi()}
          title="Engrave Your Message"
          description="Start by crafting the message you wish to immortalize on the Bitcoin Blockchain"
        />
        <SelectionCard
          icon={ThreeRoad()}
          title="Retrieve & Share"
          description="Share your message with the world via our live ticker or opt for a secretive touch with password protected encryption"
        />
      </div>
    </div>
  );
}
export default SelectionCards;
