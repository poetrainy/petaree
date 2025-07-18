import { useState, type FC } from "react";
import { LuChevronDown } from "react-icons/lu";
import { Button } from "@chakra-ui/react";
import { MenuRadioItemBase } from "@/components/MenuRadioItemBase";
import type { MapVisibility } from "@/types/map";

type Props = {
  defaultValue?: MapVisibility;
  onChange: (value: MapVisibility) => void;
};

const VISIBILITY_LIST_ITEMS = [
  {
    value: "public",
    label: "全体",
  },
  {
    value: "unlisted",
    label: "リンク限定",
  },
  {
    value: "private",
    label: "自分だけ",
  },
];

export const MapVisibilityMenu: FC<Props> = ({
  defaultValue = "public",
  onChange,
}) => {
  const [value, setValue] = useState<MapVisibility>(defaultValue);

  const handleOnValueChange = (event: { value: string }) => {
    const typedValue = event.value as MapVisibility;

    setValue(typedValue);
    onChange(typedValue);
  };

  return (
    <MenuRadioItemBase
      value={value ?? defaultValue}
      onValueChange={handleOnValueChange}
      radioItems={VISIBILITY_LIST_ITEMS}
      trigger={
        <Button
          variant="outline"
          colorPalette="gray"
          gap="1"
          w="28"
          h="fit"
          color="gray.fg"
          bg="gray.contrast"
          py="3"
          px="0"
          rounded="lg"
          _icon={{
            boxSize: 4,
          }}
        >
          <LuChevronDown />
          {`${
            VISIBILITY_LIST_ITEMS.find((item) => value === item.value)?.label
          }`}
        </Button>
      }
    />
  );
};
