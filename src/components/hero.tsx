import { siteConfig } from "@/config/site.config";
import { portfolioConfig } from "@/config/portfolio.config";
import { Socials } from "@/components/socials";
import Link from "next/link";
import ThemeToggler from "@/components/theme/theme-toggler";
import { Rss } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <>
      <Link href="/">
        <span className="font-mono text-sm underline">{siteConfig.name}</span>
      </Link>
      <div className="flex justify-between items-center mt-6">
        <h1 className="head-text-sm">{portfolioConfig.name}</h1>
        <div className="flex items-center gap-2">
          <ThemeToggler />
        </div>
      </div>
      <h3 className="mt-2 text-lg">{portfolioConfig.tagline}</h3>
      <p className="my-6 max-w-2xl">{portfolioConfig.bio}</p>
      <Socials />
      <div className="text-sm mt-10 md:mt-16 space-y-2 rounded max-w-2xl text-muted-foreground">
        <p>
          <span className="font-semibold text-primary/90">Frontend:</span>{" "}
          React, Next.js, TailwindCSS, SCSS, Framer motion, Jest, Cypress,
          ShadCN UI,
        </p>
        <p>
          <span className="font-semibold text-primary/90">Backend:</span>{" "}
          Node.js, Express.js, Java, PostgreSQL, Fastapi, Flask, Go
        </p>
        <p>
          <span className="font-semibold text-primary/90">Mobile:</span> React
          Native, Flask, Flutter
        </p>
        <p>
          <span className="font-semibold text-primary/90">
            Machine Learning:
          </span>{" "}
          PyTorch
        </p>
      </div>
    </>
  );
}
