import { Controller } from "react-hook-form";
import TextField from "@/components/common/text-field";
import { Checkbox } from "@/components/shadcnUi/checkbox";
import { Label } from "@/components/shadcnUi/label";
import { CustomControllerPropType } from "@/types/product";

function KilometersController({
  control,
  setValue,
  error,
  watch,
}: CustomControllerPropType) {
  return (
    <Controller
      name="kilometers"
      control={control}
      render={({ field }) => {
        const notDriven = watch("notDriven");
        return (
          <TextField
            label="کارکرد (کیلومتر)"
            error={error}
            value={notDriven ? "" : field.value}
            onChange={field.onChange}
            hasSeparator
            disabled={notDriven}
            extraOption={
              <Controller
                name="notDriven"
                control={control}
                render={({ field: notDrivenField }) => (
                  <div className="flex items-center gap-1">
                    <Label htmlFor="notDriven">صفر کیلومتر</Label>
                    <Checkbox
                      checked={notDrivenField.value || false}
                      onCheckedChange={(val) => {
                        const checked = !!val;
                        notDrivenField.onChange(checked);
                        setValue("kilometers", undefined);
                      }}
                      id="notDriven"
                    />
                  </div>
                )}
              />
            }
          />
        );
      }}
    />
  );
}

export default KilometersController;
