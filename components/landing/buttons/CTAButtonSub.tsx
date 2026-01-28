
"use client";

import { Button } from "@/components/ui/button";
import { SignInButton, useAuth } from "@clerk/nextjs";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CTAButtonSub() {
  const { userId, has } = useAuth();
  console.log(userId);

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
  };

  const hasPaidPlan =
    (has({ plan: "pro" })) || (has({ plan: "starter" }));

  if (hasPaidPlan) {
    return (
      <Button size="lg" className="w-full sm:w-auto" asChild>
        <Link href="/dashboard" className="flex items-center justify-center">
          Go to Dashboard <ArrowRight className="ml-2 size-4" />
        </Link>
      </Button>
    );
  }

  return (null);
}

