import { siteConfig } from "@/config/site";

function Hero() {
  return (
    <div className="text-center py-14 mt-20">
      <h1 className="text-7xl font-bold text-foreground">
        {siteConfig.hero.title}
      </h1>
      <p className="text-foreground/70 text-xl font-semibold mt-2">
        {siteConfig.hero.description}
      </p>
    </div>
  );
}

export default Hero;
