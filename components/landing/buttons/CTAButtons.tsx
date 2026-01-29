"use client";

import { SignInButton, useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
// import CTAButtonSub from "./CTAButtonSub";

export default function CTAButtons() {
  const { userId, isLoaded, has } = useAuth();
  console.log(userId);

  if (isLoaded) {
    // signed out
    if (!userId) {
      return (
        <>
          <SignInButton mode="modal" forceRedirectUrl="/#pricing">
            <Button size="lg" className="w-full sm:w-auto">
              Get Started <ArrowRight className="ml-2 size-4" />
            </Button>
          </SignInButton>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full sm:w-auto"
          >
            <Link href="#pricing">View Pricing</Link>
          </Button>
        </>
      );
    }

    // signed in
    const hasPaidPlan = has({ plan: "pro" }) || has({ plan: "starter" });

    if (hasPaidPlan) {
      return (
        <Button
          size="lg"
          className="w-full sm:w-auto"
          // asChild
        >
          <Link
            href="/dashboard"
            className="flex items-center justify-center"
            prefetch={false}
          >
            Go to Dashboard <ArrowRight className="ml-2 size-4" />
          </Link>
        </Button>
      );
    }

    return (
      <>
        <Button size="lg" className="w-full sm:w-auto" asChild>
          <Link href="/#pricing" className="flex items-center justify-center">
            Choose a Plan <ArrowRight className="ml-2 size-4" />
          </Link>
        </Button>

        <Button
          asChild
          size="lg"
          variant="outline"
          className="w-full sm:w-auto"
        >
          <Link href="#pricing">View Pricing</Link>
        </Button>
      </>
    );
  }
}
