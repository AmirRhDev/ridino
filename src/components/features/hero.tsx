import { siteConfig } from "@/config/site";
import { BackgroundRippleEffect } from "../shadcnUi/background-ripple-effect";

function Hero() {
  return (
    <div>
      <BackgroundRippleEffect />
      <div className="text-center py-14 mt-5 relative z-10 min-h-80">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground">
          {siteConfig.hero.title}
        </h1>
        <p className="text-foreground/70 text-lg sm:text-xl font-semibold mt-2">
          {siteConfig.hero.description}
        </p>
      </div>
    </div>
  );
}

export default Hero;
