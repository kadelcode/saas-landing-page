import { ThemeProvider } from "next-themes";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { Pricing } from "@/components/sections/pricing";

export default function Home() {
  return (
    <ThemeProvider attribute="class">
      <div className="min-h-screen bg-background text-foreground">
        {/* Hero Section */}
        <Hero />
        <Features />
        <Pricing />
      </div>
    </ThemeProvider>
  )
}
