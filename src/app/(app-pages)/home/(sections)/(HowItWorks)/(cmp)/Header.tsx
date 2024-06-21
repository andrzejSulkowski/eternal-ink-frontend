import ChevronLeft from "@/components/1.atoms/ChevronLeft/ChevronLeft";
import ChevronRight from "@/components/1.atoms/ChevronRight/ChevronRight";

interface Props {
  onNext: () => void;
  onPrev: () => void;
}

function Header({ onNext, onPrev }: Props) {
  return (
    <div className="w-full flex mb-24 px-80">
      <div className="w-1/2">
        <h1 className="font-extrabold text-7xl">How it works</h1>
        <p className="mt-6 text-ei-primary-faded">
          Discover how Eternal Ink lets you leave an indelible mark on the
          blockchain, whether through a personal message or by engraving
          document
        </p>
      </div>
      <div className="w-1/2 flex justify-end items-end">
        <div className="flex gap-4">
          <ChevronLeft onClick={onPrev} />
          <ChevronRight onClick={onNext} />
        </div>
      </div>
    </div>
  );
}
export default Header;
