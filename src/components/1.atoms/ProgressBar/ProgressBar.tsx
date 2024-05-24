import React, { useEffect, useState } from "react";

interface Props {
    percent: number
}

const Message: React.FC<Props> = ({percent}: Props) => {
    let baseBar = React.createRef<HTMLDivElement>();
    let fillBar = React.createRef<HTMLDivElement>();

    const [getFillBarWidth, setFillBarWidth] = useState('0px') 
    useEffect(() => {
        const totalWidth = baseBar.current?.clientWidth;
        if(totalWidth) setFillBarWidth(`${percent * totalWidth / 100}px`)
        console.log("fillBarWidth: ", getFillBarWidth)
    }, [percent]);

  return (
    <div className="w-96 h-1 rounded-3xl bg-[rgba(255,255,255,0.1)]" ref={baseBar}>
        <div className="h-full rounded-3xl bg-ei-primary" ref={fillBar} style={{width: getFillBarWidth}}></div>
    </div>
  );
};

export default Message;
