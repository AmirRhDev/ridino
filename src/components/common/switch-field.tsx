import { Label } from "@/components/shadcnUi/label";
import { Switch } from "@/components/shadcnUi/switch";

function SwitchField({
  defaultValue,
  onClick,
  label,
}: {
  defaultValue?: boolean;
  onClick?: () => void;
  label?: string;
}) {
  return (
    <Label
      dir="ltr"
      className="flex items-center justify-center gap-2 cursor-pointer border border-border bg-input py-2 px-2.5 rounded-md w-full sm:w-auto sm:grow md:grow-0"
      onClick={onClick}
    >
      <Switch checked={defaultValue} onCheckedChange={onClick} />
      {label && <span className="text-foreground">{label}</span>}
    </Label>
  );
}

export default SwitchField;
