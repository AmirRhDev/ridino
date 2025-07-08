import { Control, Controller } from "react-hook-form";
import SelectField from "@/components/common/select-field";

interface SelectControllerProps {
  name: string;
  control: Control<any>;
  data: { id: string; label: string }[];
  label?: string;
  error?: string;
}

function SelectController({
  name,
  control,
  data,
  label,
  error,
}: SelectControllerProps) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div className="space-y-2">
          <SelectField
            label={label}
            data={data}
            value={field.value}
            onValueChange={field.onChange}
          />
          {error && <span className="text-destructive text-xs">{error}</span>}
        </div>
      )}
    />
  );
}

export default SelectController;
