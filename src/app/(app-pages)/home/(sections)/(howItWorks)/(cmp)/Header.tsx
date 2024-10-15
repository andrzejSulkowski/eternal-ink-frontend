import ChevronLeft from "@/components/1.atoms/ChevronLeft/ChevronLeft";
import ChevronRight from "@/components/1.atoms/ChevronRight/ChevronRight";

interface Props {
  onNext: () => void;
  onPrev: () => void;
}

function Header({ onNext, onPrev }: Props) {
  return (
    <div className="w-full flex mb-24 px-12 md:px-80">
      <div className="w-full md:w-1/2">
        <h1 className="font-extrabold text-7xl">How it works</h1>
        <p className="mt-6 text-ei-primary-faded text-xl md:text-sm">
          Discover how Eternal Ink lets you leave an indelible mark on the
          blockchain, whether through a personal message or by engraving
          document
        </p>
      </div>
      <div className="w-1/2 md:flex justify-end items-end hidden">
        <div className="flex gap-4">
          <ChevronLeft onClick={onPrev} />
          <ChevronRight onClick={onNext} />
        </div>
      </div>
    </div>
  );
}
export default Header;
