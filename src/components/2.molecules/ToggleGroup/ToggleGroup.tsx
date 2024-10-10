import React, { useCallback, useEffect } from "react";
import type { EIProps } from "@/types";
import { classNames } from "@/utils/className";
import ToggleButton from "@/components/1.atoms/ToggleButton/ToggleButton";
import { useBanner } from "@/components/1.atoms/Banner/BannerContext";

interface Props extends EIProps {
  onChange: (value: string) => void;
  buttons: { value: string; label: string; disabled: boolean }[];
  value?: string;
}

function ToggleGroup({ className, onChange, buttons, value }: Props) {
  const [$selected, $setSelected] = React.useState(value ?? buttons[0].value);
  const { showBanner } = useBanner();
  const setSelected = useCallback(
    (value: string) => {
      $setSelected(value);
      onChange(value);
    },
    [$setSelected, onChange]
  );

  useEffect(() => {
    const invalidButtons = buttons.filter((button) => button.disabled);
    if (invalidButtons.some((b) => b.value === $selected)) {
      const firstNonDisabled = buttons.find((b) => !b.disabled);
      if (firstNonDisabled) {
        onChange(firstNonDisabled.value);
        $setSelected(firstNonDisabled.value);
      }
    }
  }, [value, buttons]);

  return (
    <div className={classNames("flex gap-3", className)}>
      {buttons.map((button, idx) => (
        <ToggleButton
          key={idx}
          isSelected={button.value === $selected}
          onClick={() => (button.disabled ? null : setSelected(button.value))}
          disabled={button.disabled}
        >
          {button.label}
        </ToggleButton>
      ))}
    </div>
  );
}

export default ToggleGroup;
