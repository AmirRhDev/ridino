import { MapPin } from "lucide-react";

function ProductsLocation() {
  return (
    <div className="flex items-center gap-0.5">
      <MapPin className="text-foreground" size={18} strokeWidth="1.5" />

      <span className="text-foreground/90 font-light">تهران</span>
    </div>
  );
}

export default ProductsLocation;
