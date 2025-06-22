import { Heart } from "lucide-react";

function ProductLike() {
  return (
    <button className="cursor-pointer group">
      <Heart
        size={25}
        className="text-foreground/60 group-hover:text-foreground/80 duration-75"
      />
    </button>
  );
}

export default ProductLike;
