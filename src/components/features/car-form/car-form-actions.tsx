import { Button } from "@/components/shadcnUi/button";
import CarDelete from "./car-delete";
import { LoaderCircle, Pen, Plus } from "lucide-react";
import { ActionTypes } from "@/types/form";

type Props = ActionTypes;

function CarFormActions({
  onDelete,
  isEditing,
  pending,
  deletePending,
}: Props) {
  return (
    <div className="sm:col-span-2 flex flex-row-reverse gap-2">
      <Button disabled={pending} type="submit" className="w-full sm:w-auto">
        {pending && <LoaderCircle className="size-5 animate-spin " />}
        {!pending && (isEditing ? <Pen /> : <Plus />)}
        {isEditing ? "ویرایش خودرو" : "ثبت خودرو"}
      </Button>

      {isEditing && onDelete && (
        <CarDelete onDelete={onDelete} deletePending={deletePending} />
      )}
    </div>
  );
}

export default CarFormActions;
