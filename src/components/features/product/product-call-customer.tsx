import { Button } from "@/components/shadcnUi/button";
import { Phone } from "lucide-react";

function ProductCallCustomer({ phone }: { phone: string }) {
  return (
    <Button asChild className="flex items-center gap-2 mt-3">
      <a className="w-full" href={`tel:${phone}`}>
        <Phone />

        <span>تماس با فروشنده</span>
      </a>
    </Button>
  );
}

export default ProductCallCustomer;
