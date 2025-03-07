import { ThemeProvider } from "next-themes";
import { Hero } from "@/components/sections/hero";

export default function Home() {
  return (
    <ThemeProvider attribute="class">
      <div className="min-h-screen bg-background text-foreground">
        {/* Hero Section */}
        <Hero />
      </div>
    </ThemeProvider>
  )
}
