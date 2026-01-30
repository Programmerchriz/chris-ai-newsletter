
import { CTA } from "@/components/landing/cta";
import { Features } from "@/components/landing/features";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Pricing } from "@/components/landing/pricing";

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Hero />
      <Features />
      <HowItWorks />

      <div className="fixed right-4 top-4">
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>

      <Pricing />
      <CTA />
    </main>
  );
};
