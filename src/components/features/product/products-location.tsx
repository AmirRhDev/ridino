import { MapPin } from "lucide-react";

function ProductsLocation({ location }: { location: string }) {
  return (
    <div className="flex items-center gap-0.5">
      <MapPin className="text-foreground" size={18} strokeWidth="1.5" />

      <span className="text-foreground/90 font-light">{location}</span>
    </div>
  );
}

export default ProductsLocation;
