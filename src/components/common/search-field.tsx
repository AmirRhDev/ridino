import { Search } from "lucide-react";
import { Input } from "../shadcnUi/input";

function SearchField() {
  return (
    <div className="relative flex items-center w-64">
      <Search className="absolute right-4 size-4 text-foreground/65" />
      <Input
        className="w-full pr-11 bg-muted/50 focus-visible:bg-muted/20"
        type="text"
        placeholder="جستجو نام خودرو، مثال: ساندرو"
      />
    </div>
  );
}

export default SearchField;
