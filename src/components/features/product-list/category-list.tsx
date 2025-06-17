import { ScrollArea, ScrollBar } from "@/components/shadcnUi/scroll-area";

function CategoryList() {
  return (
    <ScrollArea className="w-full border whitespace-nowrap">
      <div className="flex flex-row-reverse w-max gap-4 px-0.5 py-1">
        <div>پراید</div>
        <div>ساندرو</div>
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}

export default CategoryList;
