import { Button } from "@/components/shadcnUi/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/shadcnUi/dialog";
import { LoaderCircle, Trash } from "lucide-react";

interface Props {
  onDelete: () => Promise<void>;
  deletePending?: boolean;
}
function CarDelete({ onDelete, deletePending }: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button type="button" variant="destructive" disabled={deletePending}>
          {deletePending ? (
            <LoaderCircle className="size-5 animate-spin" />
          ) : (
            <Trash />
          )}
          <span>حذف خودرو</span>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center">
            آیا مطمئن هستید می‌خواهید این خودرو را حذف کنید؟
          </DialogTitle>
        </DialogHeader>
        <div className="flex items-center gap-3 justify-center mt-2">
          <Button
            className="w-24"
            variant="destructive"
            onClick={onDelete}
            disabled={deletePending}
          >
            {deletePending ? (
              <LoaderCircle className="size-5 animate-spin" />
            ) : (
              "بله، حذف شود"
            )}
          </Button>
          <DialogClose asChild>
            <Button className="w-24" variant="outline">
              انصراف
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default CarDelete;
