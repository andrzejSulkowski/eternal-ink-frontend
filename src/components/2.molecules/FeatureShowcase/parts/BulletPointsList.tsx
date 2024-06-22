import BulletPoint, {
  Props as BulletPointProps,
} from "@/components/2.molecules/BulletPoint/BulletPoint";

interface Props {
  bulletPoints: BulletPointProps[];
}

function BulletPointsList({ bulletPoints }: Props) {
  return (
    <div className="flex flex-col gap-4 mt-7">
      {bulletPoints.map((bp, index) => (
        <BulletPoint key={index} {...bp} />
      ))}
    </div>
  );
}
export default BulletPointsList;
