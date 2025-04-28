"use client"

import React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Bell, Search, User, LogOut, Heart, MessageSquare, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Avatar from './images/download.jpeg'

type HealthPlan = {
  id: string
  number: string
  icon: string
  title: string
  description: string
  features?: {
    withingsSmartwatchFeatures?: string[]
    withingsScaleFeatures?: string[]
    appleWatchFeatures?: string[]
  }
  benefits?: string[]
}

export default function DashboardPage() {
  const [selectedPlan, setSelectedPlan] = useState<HealthPlan | null>(null)

  const handlePlanClick = (plan: HealthPlan) => {
    setSelectedPlan(plan)
  }

  const closeModal = () => {
    setSelectedPlan(null)
  }

  return (
    <div className="min-h-screen bg-[#012f5c] p-2 pb-8">
      <div className="w-[98%] mx-auto bg-white rounded-3xl overflow-hidden shadow-lg border border-[#e1e1e1]">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#e1e1e1]">
          <div className="flex items-center gap-6">
            <div className="relative w-24 h-24 rounded-full overflow-hidden">
              <Image
                src={Avatar}
                alt="Jane's profile"
                width={96}
                height={96}
                className="object-cover"
              />
            </div>
           
            <div>
              <h1 className="text-3xl font-bold text-[#333]">Good Morning, Jane!</h1>
              <p className="text-[#4CAF50]">We offer a variety of health plans to help you achieve your goals</p>
              {/* <h2 className="text-2xl font-bold">Jane</h2> */}
            </div>
             
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Search className="h-5 w-5 text-[#012f5c]" />
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Bell className="h-5 w-5 text-[#012f5c]" />
            </Button>
            
          </div>
          
        </div>

        {/* Divider line */}
        <div className="w-full h-px bg-[#e1e1e1]"></div>

        <div className="flex">
          {/* Sidebar */}
          <div className="w-[250px] border-r border-[#e1e1e1]">
            <div className="flex flex-col items-center py-6 border-b border-[#e1e1e1]">

              <div className="w-full h-px bg-[#012f5c] mt-4 relative">
                <div className="absolute inset-0 bg-[#012f5c] opacity-30"></div>
              </div>
            </div>
            <nav className="py-4 flex flex-col h-[calc(100%-160px)] justify-between">
              <div>
                <SidebarItem icon="healthy" label="My healthy" active />
                <SidebarItem icon="plans" label="Plans" />
                <SidebarItem icon="community" label="Community" />
                <SidebarItem icon="feedback" label="Feedback" />
              </div>
              <div className="mt-auto">
                <SidebarItem icon="profile" label="Profile" />
                <SidebarItem icon="logout" label="Logout" />
              </div>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6">
            {/* Health Plans Container with rounded corners */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-[#e1e1e1]">
              {/* First Row of Health Plans */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
                <HealthPlanCard
                  plan={{
                    id: "weight-loss",
                    number: "1",
                    icon: "weight",
                    title: "Weight loss",
                    description: "Help users achieve healthy weight loss or maintenance through personalized plans.",
                    features: {
                      withingsSmartwatchFeatures: ["active minutes", "steps", "temperature zones during workouts"],
                      withingsScaleFeatures: [
                        "body composition (fat, muscle, bone mass)",
                        "basal Metabolic Rate (BMR)",
                        "visceral fat monitoring",
                      ],
                      appleWatchFeatures: ["additional fitness metrics like calorie burn and movement tracking"],
                    },
                    benefits: [
                      "tracks progress in real-time with body composition insights",
                      "encourages sustained weight loss with temperature-adjusted workouts and activity goals",
                    ],
                  }}
                  onClick={handlePlanClick}
                />
                <HealthPlanCard
                  plan={{
                    id: "diabetes",
                    number: "2",
                    icon: "diabetes",
                    title: "Pre-diabetes and blood sugar",
                    description:
                      "Prevent or manage early-stage diabetes through proactive monitoring and lifestyle changes.",
                    features: {
                      withingsSmartwatchFeatures: [
                        "continuous glucose monitoring",
                        "activity tracking",
                        "sleep quality analysis",
                      ],
                      withingsScaleFeatures: ["weight tracking", "body composition analysis", "BMI calculation"],
                      appleWatchFeatures: ["glucose level alerts", "medication reminders", "dietary tracking"],
                    },
                    benefits: [
                      "early detection of blood sugar irregularities",
                      "personalized diet and exercise recommendations",
                      "reduced risk of developing type 2 diabetes",
                    ],
                  }}
                  onClick={handlePlanClick}
                />
                <HealthPlanCard
                  plan={{
                    id: "heart-health",
                    number: "3",
                    icon: "heart",
                    title: "Heart health and cardio wellness plan",
                    description: "Monitor and improve heart health through personalized recommendations.",
                    features: {
                      withingsSmartwatchFeatures: ["ECG monitoring", "heart rate variability", "arrhythmia detection"],
                      withingsScaleFeatures: [
                        "cardiovascular risk assessment",
                        "body composition analysis",
                        "pulse wave velocity",
                      ],
                      appleWatchFeatures: [
                        "continuous heart rate monitoring",
                        "irregular rhythm notifications",
                        "cardio fitness levels",
                      ],
                    },
                    benefits: [
                      "early detection of heart irregularities",
                      "personalized exercise recommendations",
                      "reduced risk of cardiovascular disease",
                    ],
                  }}
                  onClick={handlePlanClick}
                />
                <HealthPlanCard
                  plan={{
                    id: "sleep",
                    number: "4",
                    icon: "sleep",
                    title: "Sleep management",
                    description: "Help users achieve restful and healthy sleep cycles.",
                    features: {
                      withingsSmartwatchFeatures: ["sleep cycle tracking", "sleep quality analysis", "snore detection"],
                      withingsScaleFeatures: [
                        "weight correlation with sleep patterns",
                        "body composition impact on sleep",
                      ],
                      appleWatchFeatures: [
                        "sleep schedule consistency",
                        "respiratory rate during sleep",
                        "sleep environment monitoring",
                      ],
                    },
                    benefits: [
                      "improved sleep quality and duration",
                      "personalized sleep schedule recommendations",
                      "identification of sleep disruptors",
                    ],
                  }}
                  onClick={handlePlanClick}
                />
                <HealthPlanCard
                  plan={{
                    id: "stress",
                    number: "5",
                    icon: "stress",
                    title: "Stress management",
                    description: "Reduce stress levels and improve overall mental health.",
                    features: {
                      withingsSmartwatchFeatures: [
                        "heart rate variability",
                        "stress score calculation",
                        "breathing pattern analysis",
                      ],
                      withingsScaleFeatures: ["cortisol impact assessment", "weight fluctuation correlation"],
                      appleWatchFeatures: [
                        "mindfulness minutes tracking",
                        "guided breathing exercises",
                        "mood logging capabilities",
                      ],
                    },
                    benefits: [
                      "reduced chronic stress levels",
                      "improved mental resilience",
                      "better work-life balance",
                    ],
                  }}
                  onClick={handlePlanClick}
                />
              </div>

              {/* Second Row of Health Plans */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <HealthPlanCard
                  plan={{
                    id: "nutrition",
                    number: "6",
                    icon: "nutrition",
                    title: "Nutrition and hydration",
                    description: "Promote healthy eating habits and hydration levels for overall wellness.",
                    features: {
                      withingsSmartwatchFeatures: [
                        "hydration reminders",
                        "meal timing tracking",
                        "calorie expenditure",
                      ],
                      withingsScaleFeatures: [
                        "body composition analysis",
                        "metabolic impact assessment",
                        "protein intake recommendations",
                      ],
                      appleWatchFeatures: ["nutrition logging", "water intake tracking", "meal planning assistance"],
                    },
                    benefits: ["improved dietary habits", "optimal hydration levels", "balanced macronutrient intake"],
                  }}
                  onClick={handlePlanClick}
                />
                <HealthPlanCard
                  plan={{
                    id: "respiratory",
                    number: "7",
                    icon: "respiratory",
                    title: "Respiratory health and fitness plan",
                    description: "Improve respiratory health and fitness levels.",
                    features: {
                      withingsSmartwatchFeatures: [
                        "breathing rate monitoring",
                        "oxygen saturation levels",
                        "respiratory pattern analysis",
                      ],
                      withingsScaleFeatures: ["lung capacity correlation", "body composition impact"],
                      appleWatchFeatures: [
                        "VO2 max estimation",
                        "cardiorespiratory fitness tracking",
                        "breathing exercises",
                      ],
                    },
                    benefits: [
                      "improved lung capacity",
                      "enhanced respiratory efficiency",
                      "better endurance during physical activities",
                    ],
                  }}
                  onClick={handlePlanClick}
                />
                <HealthPlanCard
                  plan={{
                    id: "womens-health",
                    number: "8",
                    icon: "women",
                    title: "Women's health",
                    description: "Support women with menstrual cycle tracking, fitness, and overall health.",
                    features: {
                      withingsSmartwatchFeatures: ["cycle tracking", "symptom logging", "temperature monitoring"],
                      withingsScaleFeatures: ["hormonal weight fluctuation analysis", "body composition changes"],
                      appleWatchFeatures: [
                        "fertility window predictions",
                        "mood and energy tracking",
                        "personalized exercise recommendations",
                      ],
                    },
                    benefits: [
                      "comprehensive menstrual cycle insights",
                      "hormonal health optimization",
                      "personalized fitness recommendations based on cycle phase",
                    ],
                  }}
                  onClick={handlePlanClick}
                />
                <HealthPlanCard
                  plan={{
                    id: "recovery",
                    number: "9",
                    icon: "recovery",
                    title: "Post-recovery and rehabilitation",
                    description: "Aid in recovery from injuries or surgeries through guided monitoring.",
                    features: {
                      withingsSmartwatchFeatures: [
                        "movement tracking",
                        "pain level monitoring",
                        "activity limitations",
                      ],
                      withingsScaleFeatures: ["muscle mass recovery tracking", "weight distribution analysis"],
                      appleWatchFeatures: [
                        "rehabilitation exercise guidance",
                        "recovery progress tracking",
                        "medical appointment reminders",
                      ],
                    },
                    benefits: [
                      "accelerated recovery timelines",
                      "prevention of re-injury",
                      "guided rehabilitation protocols",
                    ],
                  }}
                  onClick={handlePlanClick}
                />
                <HealthPlanCard
                  plan={{
                    id: "preventive",
                    number: "10",
                    icon: "comprehensive",
                    title: "Comprehensive preventive health plan",
                    description: "Encourage overall preventive care by compiling insights from all devices.",
                    features: {
                      withingsSmartwatchFeatures: [
                        "comprehensive health monitoring",
                        "early warning detection",
                        "preventive activity tracking",
                      ],
                      withingsScaleFeatures: ["long-term body composition trends", "health risk assessments"],
                      appleWatchFeatures: [
                        "health screening reminders",
                        "vaccination scheduling",
                        "preventive health metrics",
                      ],
                    },
                    benefits: [
                      "early detection of potential health issues",
                      "comprehensive preventive care management",
                      "reduced healthcare costs through prevention",
                    ],
                  }}
                  onClick={handlePlanClick}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Health Plan Modal */}
      {selectedPlan && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl w-full max-w-2xl relative overflow-hidden">
            {/* Yellow border around modal */}
            <div className="absolute inset-0 border-2 border-[#F9D949] rounded-xl pointer-events-none"></div>

            <button onClick={closeModal} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10">
              <X className="h-6 w-6" />
            </button>

            <div className="p-6">
              <div className="flex items-start mb-4">
                <div className="text-6xl font-bold text-[#ccc] mr-4">{selectedPlan.number}</div>
                <h2 className="text-2xl font-bold text-[#012f5c]">{selectedPlan.title}</h2>
              </div>

              <p className="text-gray-600 mb-6">{selectedPlan.description}</p>

              <h3 className="text-xl font-semibold text-[#012f5c] mb-4">IoMT Features Utilized:</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {selectedPlan.features?.withingsSmartwatchFeatures && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Withings Smartwatch:</h4>
                    <ul className="space-y-1">
                      {selectedPlan.features.withingsSmartwatchFeatures.map((feature, index) => (
                        <li key={index} className="text-sm text-gray-600">
                          - {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedPlan.features?.withingsScaleFeatures && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Withings Scale:</h4>
                    <ul className="space-y-1">
                      {selectedPlan.features.withingsScaleFeatures.map((feature, index) => (
                        <li key={index} className="text-sm text-gray-600">
                          - {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedPlan.features?.appleWatchFeatures && (
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Apple Smartwatch:</h4>
                    <ul className="space-y-1">
                      {selectedPlan.features.appleWatchFeatures.map((feature, index) => (
                        <li key={index} className="text-sm text-gray-600">
                          - {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {selectedPlan.benefits && (
                <>
                  <h3 className="text-xl font-semibold text-[#012f5c] mb-4">Key Benefits:</h3>
                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <ul className="space-y-1">
                      {selectedPlan.benefits.map((benefit, index) => (
                        <li key={index} className="text-sm text-gray-600">
                          - {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}

              <div className="flex justify-center">
                <Button className="bg-[#012f5c] hover:bg-[#012f5c]/90 text-white px-8">Choose</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function SidebarItem({ icon, label, active = false }: { icon: string; label: string; active?: boolean }) {
  const getIcon = () => {
    switch (icon) {
      case "healthy":
        return <Heart className="h-5 w-5 text-[#012f5c]" />
      case "plans":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#012f5c"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
          </svg>
        )
      case "community":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#012f5c"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        )
      case "feedback":
        return <MessageSquare className="h-5 w-5 text-[#012f5c]" />
      case "profile":
        return <User className="h-5 w-5 text-[#012f5c]" />
      case "logout":
        return <LogOut className="h-5 w-5 text-[#012f5c]" />
      default:
        return <Heart className="h-5 w-5 text-[#012f5c]" />
    }
  }

  return (
    <Link
      href="#"
      className={`flex items-center gap-3 px-6 py-3 hover:bg-[#f5f5f5] transition-colors ${
        active ? "bg-[#012f5c] text-white hover:bg-[#012f5c]" : ""
      }`}
    >
      <div className="w-8 h-8 flex items-center justify-center">
        {active ? React.cloneElement(getIcon() as React.ReactElement, { className: "h-5 w-5 text-white" }) : getIcon()}
      </div>
      <span className="font-medium">{label}</span>
    </Link>
  )
}

function HealthPlanCard({
  plan,
  onClick,
}: {
  plan: HealthPlan
  onClick: (plan: HealthPlan) => void
}) {
  const getIcon = () => {
    switch (plan.icon) {
      case "weight":
        return (
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#012f5c"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute -top-6 left-1/2 transform -translate-x-1/2"
            >
              <path d="M6 2v4h4V2H6zM6 18v4h4v-4H6zM14 2v4h4V2h-4zM14 18v4h4v-4h-4z" />
              <path d="M6 6h12v12H6z" />
              <path d="M6 10h12" />
              <path d="M10 6v12" />
            </svg>
          </div>
        )
      case "diabetes":
        return (
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#F9D949"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute -top-6 left-1/2 transform -translate-x-1/2"
            >
              <path d="M8 21h8a2 2 0 0 0 2-2v-2H6v2a2 2 0 0 0 2 2z" />
              <path d="M12 11h4" />
              <path d="M12 8h4" />
              <path d="M12 5h4" />
              <path d="M8 3v10a4 4 0 0 0 4 4v0a4 4 0 0 0 4-4V3" />
            </svg>
          </div>
        )
      case "heart":
        return (
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#012f5c"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute -top-8 left-1/2 transform -translate-x-1/2"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
            </svg>
          </div>
        )
      case "sleep":
        return (
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#F9D949"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute -top-6 left-1/2 transform -translate-x-1/2"
            >
              <path d="M2 4v16" />
              <path d="M22 4v16" />
              <path d="M4 4h16" />
              <path d="M4 20h16" />
              <path d="M4 12h16" />
              <path d="M9 12v8" />
              <path d="M15 12v8" />
            </svg>
          </div>
        )
      case "stress":
        return (
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#012f5c"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute -top-6 left-1/2 transform -translate-x-1/2"
            >
              <path d="M12 2a10 10 0 1 0 10 10 10 10 0 0 0-10-10zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
              <path d="M12 6a1 1 0 0 0-1 1v5a1 1 0 0 0 .4.8l3 2.5a1 1 0 0 0 1.2-1.6L12 11.5V7a1 1 0 0 0-1-1z" />
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="M6 6l1.5 1.5" />
              <path d="M16.5 16.5l1.5 1.5" />
              <path d="M6 18l1.5-1.5" />
              <path d="M16.5 7.5l1.5-1.5" />
            </svg>
          </div>
        )
      case "nutrition":
        return (
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#F9D949"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute -top-6 left-1/2 transform -translate-x-1/2"
            >
              <path d="M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM15.42 15.42l6.37-6.37a4.5 4.5 0 0 0-6.37-6.36l-6.36 6.36" />
            </svg>
          </div>
        )
      case "respiratory":
        return (
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#012f5c"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute -top-6 left-1/2 transform -translate-x-1/2"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="9" y1="15" x2="15" y2="15" />
            </svg>
          </div>
        )
      case "women":
        return (
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#F9D949"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute -top-6 left-1/2 transform -translate-x-1/2"
            >
              <path d="M12 2a7 7 0 0 0-7 7c0 2.1 1 4.1 2 5.6V20a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-5.4c1-1.5 2-3.5 2-5.6a7 7 0 0 0-7-7z" />
              <path d="M12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg>
          </div>
        )
      case "recovery":
        return (
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#012f5c"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute -top-6 left-1/2 transform -translate-x-1/2"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
              <path d="M8 14h.01" />
              <path d="M12 14h.01" />
              <path d="M16 14h.01" />
              <path d="M8 18h.01" />
              <path d="M12 18h.01" />
              <path d="M16 18h.01" />
            </svg>
          </div>
        )
      case "comprehensive":
        return (
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#F9D949"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute -top-6 left-1/2 transform -translate-x-1/2"
            >
              <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
            </svg>
          </div>
        )
      default:
        return (
          <div className="relative">
            <Heart className="h-10 w-10 text-[#012f5c] absolute -top-6 left-1/2 transform -translate-x-1/2" />
          </div>
        )
    }
  }

  return (
    <div
      className="border border-[#e1e1e1] rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer relative pt-8 mt-6"
      onClick={() => onClick(plan)}
    >
      <div className="text-4xl font-bold text-[#ccc] mb-2">{plan.number}</div>
      <div className="flex justify-center mb-3">{getIcon()}</div>
      <h3 className="text-center font-bold text-[#012f5c] mb-2">{plan.title}</h3>
      <p className="text-xs text-center text-[#666]">{plan.description}</p>
    </div>
  )
}
