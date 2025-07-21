import Link from "next/link";

function About() {
  return (
    <div className="flex flex-col gap-2 max-w-4xl m-auto">
      <h1 className="text-foreground font-bold text-5xl">درباره رایدینو</h1>
      <p className="text-foreground/80 text-xl mt-4">
        رایدینو یک وب اپلیکیشن برای خرید و فروش آسان خودرو و بدون واسطه می‌باشد.
      </p>
      <h2 className="text-foreground text-4xl font-bold mt-6">هدف پروژه</h2>
      <p className="text-foreground/80 font-semibold text-xl mt-4">
        اهداف اصلی این پروژه شامل:
      </p>
      <ul className="flex flex-col gap-2 list-disc text-foreground/80 text-xl mt-3">
        <li>
          تمرین و کسب تجربه در کار با ابزار‌های نوین توسعه وب و آشنایی با پیشرفت
          دنیای وب
        </li>
        <li>
          بررسی ابزار های نوین برای کشف بهترین هماهنگی و عملکرد بین آن‌ها برای
          ایجاد برنامه‌های کارآمد و مقیاس پذیر
        </li>
      </ul>
      <h2 className="text-foreground text-4xl font-bold mt-6">
        تکنولوژی و ابزار‌ها
      </h2>
      <ul
        dir="ltr"
        className="flex flex-col gap-2 list-disc text-foreground/80 text-xl mt-3"
      >
        <li className="flex gap-1 items-center">
          <p className="text-foreground/90 font-bold">Framework:</p>
          <Link
            target="_blank"
            href="https://nextjs.org"
            className="text-primary font-semibold underline"
          >
            Next.js 15
          </Link>
        </li>
        <li className="flex gap-1 items-center">
          <p className="text-foreground/90 font-bold">Backend:</p>
          <Link
            target="_blank"
            href="https://supabase.com"
            className="text-primary font-semibold underline"
          >
            Supabase
          </Link>
        </li>
        <li className="flex gap-1 items-center">
          <p className="text-foreground/90 font-bold">Database:</p>
          <Link
            target="_blank"
            href="https://supabase.com"
            className="text-primary font-semibold underline"
          >
            Supabase
          </Link>
        </li>
        <li className="flex gap-1 items-center">
          <p className="text-foreground/90 font-bold">Components:</p>
          <Link
            target="_blank"
            href="https://ui.shadcn.com/g"
            className="text-primary font-semibold underline"
          >
            Shadcn
          </Link>
        </li>
        <li className="flex gap-1 items-center">
          <p className="text-foreground/90 font-bold">Styling:</p>
          <Link
            target="_blank"
            href="https://tailwindcss.com"
            className="text-primary font-semibold underline"
          >
            TailwindCSS
          </Link>
        </li>
        <li className="flex gap-1 items-center">
          <p className="text-foreground/90 font-bold">Data Management:</p>
          <Link
            target="_blank"
            href="https://tanstack.com/query/latest"
            className="text-primary font-semibold underline"
          >
            React Query
          </Link>
        </li>
        <li className="flex gap-1 items-center">
          <p className="text-foreground/90 font-bold">Programming Language:</p>
          <Link
            target="_blank"
            href="https://www.typescriptlang.org"
            className="text-primary font-semibold underline"
          >
            TypeScript
          </Link>
        </li>
      </ul>
      <hr className="my-6 border-secondary-foreground/30" />
      <p className="text-foreground/80 text-xl">
        در صورت تمایل می‌توانید پروژه را برای اهداف یادگیری و توسعه، بررسی کرده
        وتطبیق دهید!
      </p>
    </div>
  );
}

export default About;
