import { Label } from "@/components/shadcnUi/label";
import { cn } from "@/lib/utils";
import { type Ref, type InputHTMLAttributes } from "react";
import { Textarea } from "@/components/shadcnUi/text-area";

type TextFieldProps = InputHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  description?: string;
  error?: string;
  ref?: Ref<HTMLTextAreaElement>;
};

const TextAreaField = ({
  label,
  description,
  error,
  className,
  onChange,
  value,
  ref,
  ...rest
}: TextFieldProps) => {
  return (
    <div className={cn("grid gap-2", className)}>
      <Label className="text-xs sm:text-sm">{label}</Label>
      <Textarea {...rest} ref={ref} />
      {description && (
        <span className="text-muted-foreground text-xs">{description}</span>
      )}
      {error && (
        <span className="font-medium text-destructive text-xs">{error}</span>
      )}
    </div>
  );
};

export default TextAreaField;
