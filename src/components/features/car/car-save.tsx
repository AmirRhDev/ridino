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
import toast from "react-hot-toast";
import { toggleCarSave } from "@/services/car.service";

interface Props {
  carId: string;
  initialSaved: boolean;
}

export default function CarSave({ carId, initialSaved }: Props) {
  const { user } = useAuth();
  const [saved, setSaved] = useState(initialSaved);
  const [loading, setLoading] = useState(false);

  const handleToggle = useCallback(async () => {
    if (!user) return;
    setLoading(true);

    try {
      const result = await toggleCarSave({
        userId: user.id,
        carId,
        isSaved: saved,
      });

      setSaved(result);
      toast.success(result ? "به دخیره‌ها اضافه شد" : "از دخیره‌ها حذف شد");
    } finally {
      setLoading(false);
    }
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
      onClick={handleToggle}
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
