import SocialMediaList from "@/components/common/social-media-list";
import { Button } from "@/components/shadcnUi/button";
import Link from "next/link";

function Footer() {
  return (
    <div className="bg-background px-8 sm:px-11 py-4 flex flex-col sm:flex-row gap-y-2 sm:gap-y-0 items-center justify-between border-t border-zinc-200 mt-10 sm:mt-20 mb-[70px] md:mb-0">
      <div className="flex items-center gap-1">
        <h6 className="text-foreground">توسعه داده شده توسط:</h6>
        <Button asChild variant="link">
          <Link
            target="_blank"
            className="!px-0"
            href="https://amirrahimnezhad.ir"
          >
            <h2>امیرحسین رحیم‌نژاد</h2>
          </Link>
        </Button>
      </div>

      <SocialMediaList />
    </div>
  );
}

export default Footer;
