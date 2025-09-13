"use client";

import { useState, useCallback } from "react";
import { useAuth } from "@/components/providers/auth-provider";
import { Bookmark, BookmarkCheck } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/shadcnUi/dialog";
import { Button } from "@/components/shadcnUi/button";
import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";
import toast from "react-hot-toast";

interface Props {
  carId: string;
  initialSaved: boolean;
}

export default function ProductSave({ carId, initialSaved }: Props) {
  const { user } = useAuth();
  const [saved, setSaved] = useState(initialSaved);
  const [loading, setLoading] = useState(false);

  const toggleSave = useCallback(async () => {
    if (!user) return;

    setLoading(true);

    if (saved) {
      const { error } = await supabase
        .from("saved_cars")
        .delete()
        .eq("car_id", carId)
        .eq("user_id", user.id);

      if (!error) {
        setSaved(false);
      }

      toast.success("از لیست ذخیره ها حذف شد");
    } else {
      const { error } = await supabase.from("saved_cars").insert({
        car_id: carId,
        user_id: user.id,
      });

      if (!error) {
        setSaved(true);
      }

      toast.success("به لیست ذخیره ها اضافه شد");
    }

    setLoading(false);
  }, [saved, carId, user]);

  if (!user) {
    return (
      <Dialog>
        <DialogTrigger className="cursor-pointer group">
          <Bookmark
            size={25}
            className="text-foreground/60 group-hover:text-foreground/80 duration-75"
          />
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-center">
              برای دخیره کردن باید وارد شوید
            </DialogTitle>
          </DialogHeader>
          <div className="flex items-center gap-3 justify-center mt-2">
            <Button className="w-24" asChild>
              <Link href="/sign-in">ورود</Link>
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

  return (
    <button
      onClick={toggleSave}
      className="cursor-pointer group disabled:opacity-50"
      disabled={loading}
    >
      {saved ? (
        <BookmarkCheck
          size={25}
          className="text-green-500 group-hover:text-green-500/80 duration-75"
        />
      ) : (
        <Bookmark
          size={25}
          className="text-foreground/60 group-hover:text-foreground/80 duration-75"
        />
      )}
    </button>
  );
}
