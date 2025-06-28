import { cn } from "@/lib/utils";

interface Props {
  className?: string;
  description: string;
}

function ProductDescription({ className, description }: Props) {
  return (
    <div
      className={cn(
        "flex flex-col mt-2 pb-3 border-b border-foreground/10",
        className,
      )}
    >
      <h3 className="font-semibold text-foreground sm:text-lg">توضیحات</h3>
      <p className="text-sm sm:text-base text-foreground/80">{description}</p>
    </div>
  );
}

export default ProductDescription;
