import { Controller } from "react-hook-form";
import TextField from "@/components/common/text-field";
import { Checkbox } from "@/components/shadcnUi/checkbox";
import { Label } from "@/components/shadcnUi/label";
import { CustomControllerPropType } from "@/types/product";

function BodyStatusController({
  control,
  setValue,
  error,
  watch,
}: CustomControllerPropType) {
  return (
    <Controller
      name="bodyStatus"
      control={control}
      render={({ field }) => {
        const clearBody = watch("clearBody");
        return (
          <TextField
            label="وضعیت بدنه"
            error={error}
            value={clearBody ? "" : (field.value ?? "")}
            onChange={field.onChange}
            disabled={clearBody}
            extraOption={
              <Controller
                name="clearBody"
                control={control}
                render={({ field: clearBodyField }) => (
                  <div className="flex items-center gap-1">
                    <Label htmlFor="clearBody">بی رنگ</Label>
                    <Checkbox
                      checked={clearBodyField.value || false}
                      onCheckedChange={(val) => {
                        const checked = !!val;
                        clearBodyField.onChange(checked);
                        setValue("bodyStatus", "");
                      }}
                      id="clearBody"
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

export default BodyStatusController;
