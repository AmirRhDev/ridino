"use client";

import { Input } from "@/components/shadcnUi/input";
import { Label } from "@/components/shadcnUi/label";
import { cn, formatPrice, stripCommas } from "@/lib/utils";
import { EyeIcon, EyeOff } from "lucide-react";
import { ReactNode, useEffect, useState } from "react";
import { type Ref, type InputHTMLAttributes } from "react";

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  description?: string;
  error?: string;
  hasSeparator?: boolean;
  extraOption?: ReactNode;
  ref?: Ref<HTMLInputElement>;
};

const TextField = ({
  label,
  description,
  error,
  hasSeparator,
  className,
  ref,
  onChange,
  value,
  extraOption,
  type,
  ...rest
}: TextFieldProps) => {
  const [localValue, setLocalValue] = useState(
    hasSeparator && typeof value === "string" ? formatPrice(value) : value,
  );

  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (hasSeparator && typeof value === "string") {
      setLocalValue(formatPrice(value));
    } else {
      setLocalValue(value);
    }
  }, [value, hasSeparator]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    if (hasSeparator) {
      const numericValue = stripCommas(inputValue);
      setLocalValue(formatPrice(numericValue));
      onChange?.({
        ...e,
        target: {
          ...e.target,
          value: numericValue,
        },
      });
    } else {
      onChange?.(e);
    }
  };

  const finalType =
    type === "password" ? (showPassword ? "text" : "password") : type;

  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex justify-between items-center gap-2">
        <Label className="text-xs sm:text-sm">{label}</Label>
        {extraOption}
      </div>
      <div className="relative">
        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="cursor-pointer absolute left-1 top-[5px] text-muted-foreground bg-input"
          >
            {showPassword ? (
              <EyeOff className="w-[22px]" />
            ) : (
              <EyeIcon className="w-[22px]" />
            )}
          </button>
        )}
        <Input
          type={finalType}
          autoComplete="off"
          ref={ref}
          {...rest}
          value={hasSeparator ? localValue : value}
          onChange={handleChange}
        />
      </div>
      {description && (
        <span className="text-muted-foreground text-xs">{description}</span>
      )}
      {error && (
        <span className="font-medium text-destructive text-xs">{error}</span>
      )}
    </div>
  );
};

export default TextField;
