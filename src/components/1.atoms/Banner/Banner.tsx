
interface Props {
    message: string;
}

function Banner({message}: Props) {

  return (
    <div className="absolute w-full top-0 left-0 right-0 h-12 bg-ei-danger flex justify-start items-center px-8 transition-all font-manrope">
        <span className="font-semibold">
        {message}
        </span>
    </div>
  )
}
export default Banner