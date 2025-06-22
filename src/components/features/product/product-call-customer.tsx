import { Button } from "@/components/shadcnUi/button";
import { Phone } from "lucide-react";

function ProductCallCustomer() {
  return (
    <Button className="flex items-center gap-2 mt-3">
      <Phone />

      <span>تماس با فروشنده</span>
    </Button>
  );
}

export default ProductCallCustomer;
