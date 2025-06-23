import { Search } from "lucide-react";
import { Input } from "../shadcnUi/input";

function SearchField() {
  return (
    <div className="relative flex items-center md:w-64 w-full">
      <Search className="absolute right-4 size-4 text-foreground/65" />
      <Input
        className="w-full pr-11"
        type="text"
        placeholder="جستجو نام خودرو، مثال: ساندرو"
      />
    </div>
  );
}

export default SearchField;
