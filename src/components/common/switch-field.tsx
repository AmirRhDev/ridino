import { Label } from "@/components/shadcnUi/label";
import { Switch } from "@/components/shadcnUi/switch";

function SwitchField() {
  return (
    //  TODO: fix dark mode
    <Label
      dir="ltr"
      className="flex items-center justify-center gap-2 cursor-pointer border border-border bg-input py-2 px-2.5 rounded-md w-full sm:w-auto sm:grow md:grow-0"
    >
      <Switch />
      <span className="text-foreground">فقط قیمت مشخص</span>
    </Label>
  );
}

export default SwitchField;
