"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ForgotPasswordPage() {
  return (
    <div className="flex min-h-screen bg-[#f5f5f5] p-6">
      <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto rounded-3xl overflow-hidden shadow-lg">
        {/* Left side - Forgot password form */}
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
              <h1 className="text-2xl font-bold">Forgot Password</h1>
              <p className="text-sm text-[#969696]">Enter your email to reset your password</p>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input id="email" type="email" placeholder="Enter your email" className="w-full border-[#e1e1e1]" />
              </div>

              <Button className="w-full bg-[#012f5c] hover:bg-[#012f5c]/90">Reset Password</Button>
            </div>

            <div className="text-center text-sm mt-6">
              <p className="text-[#969696]">
                Remember your password?{" "}
                <Link href="/login" className="text-[#1a86e6] font-medium">
                  Back to login
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Right side - Promotional image */}
        <div className="w-full md:w-2/3 relative rounded-r-3xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
  )
}
