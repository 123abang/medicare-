"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState<"login" | "register">("login")

  return (
    <div className="flex min-h-screen bg-[#f5f5f5]">
      <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto">
        {/* Left side - Auth form */}
        <div className="w-full md:w-1/3 p-8 bg-white flex flex-col justify-center">
          {activeTab === "login" ? (
            <LoginForm onSwitchToRegister={() => setActiveTab("register")} />
          ) : (
            <RegisterForm onSwitchToLogin={() => setActiveTab("login")} />
          )}
        </div>

        {/* Right side - Promotional image */}
        <div className="w-full md:w-2/3 relative">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/MediCureOn.png-2ZlkXQTUvPIYYEnaM3smtRyvfPAp1R.jpeg"
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

function LoginForm({ onSwitchToRegister }: { onSwitchToRegister: () => void }) {
  return (
    <div className="space-y-6 w-full max-w-sm mx-auto">
      <div className="flex justify-center mb-8">
        <Image
          src="/placeholder.svg?height=64&width=64"
          alt="MediCureOn Logo"
          width={64}
          height={64}
          className="rounded-full bg-[#012f5c]"
        />
      </div>

      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-bold">Welcome back</h1>
        <p className="text-sm text-[#969696]">Please login to continue to your account.</p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <Input id="email" type="email" placeholder="Enter your email" className="w-full border-[#e1e1e1]" />
        </div>

        <div className="space-y-2">
          <label htmlFor="password" className="text-sm font-medium">
            Password
          </label>
          <div className="relative">
            <Input id="password" type="password" placeholder="••••••••" className="w-full border-[#e1e1e1]" />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-[#969696]">
              <Eye className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Checkbox id="remember" />
            <label htmlFor="remember" className="text-sm text-[#969696]">
              Keep me logged in
            </label>
          </div>
          <Link href="#" className="text-sm text-[#1a86e6]">
            Forgot password?
          </Link>
        </div>

        <Button className="w-full bg-[#012f5c] hover:bg-[#012f5c]/90">Log in</Button>
      </div>

      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-[#e1e1e1]"></div>
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="bg-white px-2 text-[#969696]">or</span>
        </div>
      </div>

      <div className="space-y-4">
        <p className="text-sm text-center">Sign in with</p>
        <div className="flex justify-center space-x-4">
          <SocialButton provider="facebook" />
          <SocialButton provider="apple" />
          <SocialButton provider="google" />
        </div>
      </div>

      <div className="text-center text-sm mt-6">
        <p className="text-[#969696]">
          Need an account?{" "}
          <button onClick={onSwitchToRegister} className="text-[#1a86e6] font-medium">
            Create one
          </button>
        </p>
      </div>
    </div>
  )
}

function RegisterForm({ onSwitchToLogin }: { onSwitchToLogin: () => void }) {
  return (
    <div className="space-y-6 w-full max-w-sm mx-auto">
      <div className="flex justify-center mb-8">
        <Image
          src="/placeholder.svg?height=64&width=64"
          alt="MediCureOn Logo"
          width={64}
          height={64}
          className="rounded-full bg-[#012f5c]"
        />
      </div>

      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-bold">Create your account</h1>
        <p className="text-sm text-[#969696]">Register is fast and free</p>
      </div>

      <div className="space-y-4">
        <p className="text-sm text-center">Register with</p>
        <div className="flex justify-center space-x-4">
          <SocialButton provider="facebook" />
          <SocialButton provider="apple" />
          <SocialButton provider="google" />
        </div>
      </div>

      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-[#e1e1e1]"></div>
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="bg-white px-2 text-[#969696]">or</span>
        </div>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <Input id="name" type="text" placeholder="Enter full name" className="w-full border-[#e1e1e1]" />
        </div>

        <div className="space-y-2">
          <label htmlFor="register-email" className="text-sm font-medium">
            Email
          </label>
          <Input id="register-email" type="email" placeholder="Enter your email" className="w-full border-[#e1e1e1]" />
        </div>

        <div className="space-y-2">
          <label htmlFor="register-password" className="text-sm font-medium">
            Password
          </label>
          <div className="relative">
            <Input
              id="register-password"
              type="password"
              placeholder="Create a password"
              className="w-full border-[#e1e1e1]"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-[#969696]">
              <Eye className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="flex items-start space-x-2">
          <Checkbox id="terms" className="mt-1" />
          <label htmlFor="terms" className="text-xs text-[#969696]">
            By registering, I have read an agree to{" "}
            <Link href="#" className="text-[#1a86e6]">
              Terms
            </Link>{" "}
            and{" "}
            <Link href="#" className="text-[#1a86e6]">
              Privacy Policy
            </Link>
          </label>
        </div>

        <Button className="w-full bg-[#012f5c] hover:bg-[#012f5c]/90">Register</Button>
      </div>

      <div className="text-center text-sm mt-6">
        <p className="text-[#969696]">
          Already have an account?{" "}
          <button onClick={onSwitchToLogin} className="text-[#1a86e6] font-medium">
            Log in
          </button>
        </p>
      </div>
    </div>
  )
}

function SocialButton({ provider }: { provider: "facebook" | "apple" | "google" }) {
  const getIcon = () => {
    switch (provider) {
      case "facebook":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#3c5a9a">
            <path d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z" />
          </svg>
        )
      case "apple":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#000000">
            <path d="M17.0001 21.4999H7.00012C5.90012 21.4999 5.00012 20.5999 5.00012 19.4999V4.49994C5.00012 3.39994 5.90012 2.49994 7.00012 2.49994H17.0001C18.1001 2.49994 19.0001 3.39994 19.0001 4.49994V19.4999C19.0001 20.5999 18.1001 21.4999 17.0001 21.4999ZM12.0001 7.49994C10.6201 7.49994 9.50012 8.61994 9.50012 9.99994C9.50012 11.3799 10.6201 12.4999 12.0001 12.4999C13.3801 12.4999 14.5001 11.3799 14.5001 9.99994C14.5001 8.61994 13.3801 7.49994 12.0001 7.49994ZM12.0001 18.4999C14.3301 18.4999 16.5001 17.3199 17.7101 15.4999C17.7101 14.1199 14.9401 13.3799 12.0001 13.3799C9.06012 13.3799 6.29012 14.1199 6.29012 15.4999C7.50012 17.3199 9.67012 18.4999 12.0001 18.4999Z" />
          </svg>
        )
      case "google":
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M21.8189 10.2H12V13.9H17.6335C17.2 15.5 15.9 16.6 14 17.1L14.0001 17.0999C12.7001 17.5999 11.1668 17.4999 9.90005 16.8999L9.89995 16.8999C8.30005 16.0999 7.20005 14.5999 6.90005 12.8999H6.89995L6.89985 12.9C6.69985 11.9 6.69995 10.8999 6.89995 9.89993H6.9L6.90005 9.9C7.20005 8.2 8.40005 6.7 9.90005 5.9L9.89995 5.9C11.1999 5.1 12.7668 4.90007 14.2001 5.30007L14.2 5.3C15.5 5.7 16.5 6.59993 17.2 7.69993L20.3 4.59993C18.6 3.09993 16.3001 2.1 13.8001 2L13.8 2C10.6 1.9 7.60005 3.39993 5.80005 5.89993L5.8 5.9C4.7 7.4 4.10005 9.19993 4.00005 11.0999L4 11.1C3.9 13.0999 4.49995 15.0001 5.59995 16.5001L5.6 16.5C7.6 19.5 10.9 21.3 14.5 21L14.5001 21C16.8001 20.9 19.0001 20.0001 20.7001 18.5001L20.7 18.5C22.5 16.9 23.5 14.5 23.8 12L23.8001 12C23.9001 11.3 24.0001 10.7 24.0001 10C24.0001 9.69995 23.9001 9.39995 23.9001 9.09995L23.9 9.1C23.9 9.1 23.9 9.1 23.8 9.1C23.1 9.4 22.5 9.8 21.8 10.2H21.8189Z"
            />
            <path
              fill="#34A853"
              d="M5.89995 16.4999C5.89995 16.4999 5.89995 16.4999 5.79995 16.3999C4.69995 14.8999 4.09995 13.0999 4.09995 11.0999C4.09995 9.09995 4.69995 7.29995 5.79995 5.79995C5.79995 5.79995 5.89995 5.79995 5.89995 5.69995C7.69995 8.79995 10.9 10.9999 14.5 10.9999H15V14.6999C13.9 14.6999 12.9 14.4999 11.9 14.0999C9.69995 13.1999 7.69995 11.0999 6.79995 8.69995C6.59995 9.39995 6.49995 10.2999 6.49995 11.0999C6.49995 11.8999 6.59995 12.6999 6.79995 13.4999C7.19995 14.6999 8.09995 15.6999 9.19995 16.2999C10.3 16.8999 11.6 17.0999 12.9 16.8999C14.2 16.6999 15.4 16.0999 16.3 15.1999C16.4 15.0999 16.5 14.9999 16.6 14.8999C17.4 16.1999 18.7 17.1999 20.2 17.6999C18.5 19.1999 16.3 19.9999 14 19.9999C10.9 19.9999 7.99995 18.6999 5.89995 16.4999Z"
            />
            <path
              fill="#FBBC05"
              d="M6.5 8.69995C6.7 8.09995 6.89995 7.49995 7.19995 6.99995C7.49995 6.39995 7.89995 5.89995 8.29995 5.39995C8.79995 4.89995 9.39995 4.39995 9.99995 4.09995C11.2 3.39995 12.6 2.99995 14 2.99995C16.5 2.99995 18.7 4.09995 20.4 5.79995L17.3 8.89995C16.4 7.99995 15.3 7.49995 14 7.49995C12.1 7.49995 10.5 8.59995 9.89995 10.1L9.9 10.1C9.7 10.6 9.6 11.0999 9.6 11.5999C9.6 12.0999 9.7 12.6 9.9 13.1C10.5 14.6 12.1 15.7 14 15.7C14.9 15.7 15.7 15.5 16.4 15.1C16.5 15.1 16.6 15 16.7 14.9C17.4 14.5 18 13.9 18.4 13.1C18.8 12.3 19 11.5 18.9 10.6H14.5V7.49995H23.1C23.4 8.29995 23.5 9.09995 23.5 9.89995C23.5 12.3999 22.5 14.7 20.7 16.3C19 17.9 16.8 18.7999 14.5 18.7999C12.6 18.7999 10.8 18.1999 9.3 17.0999C8.3 16.3999 7.49995 15.5 6.89995 14.3999C6.29995 13.2999 5.99995 12.1 5.99995 10.8C5.99995 10.1 6.1 9.39995 6.3 8.69995H6.5Z"
            />
            <path
              fill="#EA4335"
              d="M6.5 8.69995C6.7 8.09995 6.89995 7.49995 7.19995 6.99995C7.49995 6.39995 7.89995 5.89995 8.29995 5.39995C8.79995 4.89995 9.39995 4.39995 9.99995 4.09995C11.2 3.39995 12.6 2.99995 14 2.99995C16.5 2.99995 18.7 4.09995 20.4 5.79995L17.3 8.89995C16.4 7.99995 15.3 7.49995 14 7.49995C12.1 7.49995 10.5 8.59995 9.89995 10.1L9.9 10.1C9.7 10.6 9.6 11.0999 9.6 11.5999C9.6 12.0999 9.7 12.6 9.9 13.1C10.5 14.6 12.1 15.7 14 15.7C14.9 15.7 15.7 15.5 16.4 15.1C16.5 15.1 16.6 15 16.7 14.9C17.4 14.5 18 13.9 18.4 13.1C18.8 12.3 19 11.5 18.9 10.6H14.5V7.49995H23.1C23.4 8.29995 23.5 9.09995 23.5 9.89995C23.5 12.3999 22.5 14.7 20.7 16.3C19 17.9 16.8 18.7999 14.5 18.7999C12.6 18.7999 10.8 18.1999 9.3 17.0999C8.3 16.3999 7.49995 15.5 6.89995 14.3999C6.29995 13.2999 5.99995 12.1 5.99995 10.8C5.99995 10.1 6.1 9.39995 6.3 8.69995H6.5Z"
            />
          </svg>
        )
    }
  }

  return (
    <button className="w-10 h-10 flex items-center justify-center rounded-full border border-[#e1e1e1]">
      {getIcon()}
    </button>
  )
}
