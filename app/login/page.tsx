"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye } from "lucide-react";
import { FaGoogle, FaApple, FaFacebookF } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <div className="flex min-h-screen bg-[#f5f5f5] p-6">
      <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-lg">
        {/* Left side - Login form */}
        <div className="w-full md:w-1/3 p-8 bg-white flex flex-col">
          <div className="mb-8">
            <Image
              src="/images/medicureon-logo.png"
              alt="MediCureOn Logo"
              width={80}
              height={80}
              className="rounded-full"
            />
          </div>

          <div className="space-y-6 w-full max-w-sm mx-auto">
            <div className="space-y-2 text-center">
              <h1 className="text-2xl font-bold">Welcome back</h1>
              <p className="text-sm text-[#969696]">Please login to continue to your account.</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-4">
              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border-[#e1e1e1]"
                />
              </div>

              {/* Password */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="text-sm font-medium">Password</label>
                  <Link href="/forgot-password" className="text-sm text-[#1a86e6]">
                    Forgot password?
                  </Link>
                </div>
                <div className="relative">
                  <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    className="w-full border-[#e1e1e1]"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#969696]"
                    tabIndex={-1}
                  >
                    <Eye className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Remember */}
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <label htmlFor="remember" className="text-sm text-[#969696]">
                  Keep me logged in
                </label>
              </div>

              {/* Submit */}
              <Button type="submit" className="w-full bg-[#012f5c] hover:bg-[#012f5c]/90">
                Log in
              </Button>
            </form>

            {/* Separator */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-[#e1e1e1]" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-white px-2 text-[#969696]">or</span>
              </div>
            </div>

            {/* Social login */}
            <div className="space-y-4">
              <p className="text-sm text-center">Sign in with</p>
              <div className="flex justify-center space-x-6">
                <SocialButton provider="facebook" />
                <SocialButton provider="apple" />
                <SocialButton provider="google" />
              </div>
            </div>

            {/* Signup link */}
            <div className="text-center text-sm mt-6">
              <p className="text-[#969696]">
                Need an account?{" "}
                <Link href="/create-account" className="text-[#1a86e6] font-medium">
                  Create one
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Right side - Promotional image */}
        <div className="w-full md:w-2/3 relative rounded-r-3xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=3072&auto=format&fit=crop"
            alt="Natural supplements and herbs"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-center p-8">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                A drop of change
                <br />
                in a sea of health
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SocialButton({ provider }: { provider: "facebook" | "apple" | "google" }) {
  const icons = {
    facebook: <FaFacebookF size={20} color="#3c5a9a" />,
    apple:    <FaApple     size={20} color="#000000" />,
    google:   <FaGoogle    size={20} color="#4285F4" />,
  } as const;

  return (
    <button className="w-14 h-14 flex items-center justify-center rounded-full border border-[#e1e1e1] bg-white shadow-sm hover:shadow-md transition-shadow">
      {icons[provider]}
    </button>
  );
}
