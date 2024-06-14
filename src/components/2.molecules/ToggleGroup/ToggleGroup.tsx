import React from "react";
import type { EIProps } from "@/types";
import { classNames } from "@/utils/className";
import ToggleButton from "@/components/1.atoms/ToggleButton/ToggleButton";

interface Props extends EIProps {
  onChange: (value: string) => void;
  buttons: { value: string; label: string }[];
  value?: string;
}

function ToggleGroup({ className, onChange, buttons, value }: Props) {
  const [$selected, $setSelected] = React.useState(value ?? buttons[0].value);
  const setSelected = (value: string) => {
    $setSelected(value);
    onChange(value); 
  }

  return (
    <div className={classNames("flex gap-3", className)}>
      {buttons.map((button, idx) => (
        <ToggleButton
          key={idx}
          isSelected={button.value === $selected}
          onClick={() => setSelected(button.value)}
        >
          {button.label}
        </ToggleButton>
      ))}
    </div>
  );
}

export default ToggleGroup;
