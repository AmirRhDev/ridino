import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/shadcnUi/select";
import { Label } from "@/components/shadcnUi/label";

type Props = {
  value: string;
  onValueChange: (value: string) => void;
  data: { id: string; label: string }[];
  label?: string;
};

function SelectField({ value, onValueChange, data, label }: Props) {
  return (
    <>
      {label && <Label className="text-xs sm:text-sm">{label}</Label>}
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {data?.map((d) => (
            <SelectItem key={d.id} value={d.id}>
              {d.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );
}

export default SelectField;
