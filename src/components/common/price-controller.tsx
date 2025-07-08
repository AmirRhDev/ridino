import { Controller } from "react-hook-form";
import TextField from "@/components/common/text-field";
import { Checkbox } from "@/components/shadcnUi/checkbox";
import { Label } from "@/components/shadcnUi/label";
import { CustomControllerPropType } from "@/types/product";

function PriceController({
  control,
  setValue,
  error,
  watch,
}: CustomControllerPropType) {
  return (
    <Controller
      name="price"
      control={control}
      render={({ field }) => {
        const negotiated = watch("negotiated");
        return (
          <TextField
            label="قیمت (تومان)"
            error={error}
            value={negotiated ? "" : field.value}
            onChange={field.onChange}
            hasSeparator
            disabled={negotiated}
            extraOption={
              <Controller
                name="negotiated"
                control={control}
                render={({ field: negotiatedField }) => (
                  <div className="flex items-center gap-1">
                    <Label htmlFor="negotiated">قیمت توافقی</Label>
                    <Checkbox
                      checked={negotiatedField.value || false}
                      onCheckedChange={(val) => {
                        const checked = !!val;
                        negotiatedField.onChange(checked);
                        setValue("price", "" as any);
                      }}
                      id="negotiated"
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

export default PriceController;
