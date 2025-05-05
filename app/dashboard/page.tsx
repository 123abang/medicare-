"use client"

import React, { useState, useEffect } from "react"
import Image from "next/image"
import {
  Bell,
  Search,
  User,
  LogOut,
  Heart,
  MessageSquare,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
} from "lucide-react"
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
  const [activeView, setActiveView] = useState<"healthy" | "plans">("healthy")
  const [selectedPlan, setSelectedPlan] = useState<HealthPlan | null>(null)
  const [activeTab, setActiveTab] = useState("weight-loss")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Check if we're on a mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  const handlePlanClick = (plan: HealthPlan) => {
    setSelectedPlan(plan)
    // Close sidebar on mobile when a plan is selected
    if (isMobile) {
      setSidebarOpen(false)
    }
  }

  const closeModal = () => {
    setSelectedPlan(null)
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <div className="min-h-screen bg-white">
      <div
        className={`flex h-screen overflow-hidden ${activeView === "healthy" ? "border-4 border-[#012f5c] rounded-3xl" : "bg-[#012f5c] p-2 pb-8"}`}
      >
        {/* Sidebar - Mobile overlay */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300 ${
            sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={toggleSidebar}
        ></div>

        {/* Sidebar */}
        <div
          className={`${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } fixed md:relative md:translate-x-0 top-0 left-0 h-full z-50 w-[220px] bg-white transition-transform duration-300 ease-in-out overflow-auto border-r border-[#e1e1e1]`}
        >
          <div className="flex justify-between items-center md:hidden p-4 border-b border-[#e1e1e1]">
            <h2 className="font-bold text-lg">Menu</h2>
            <button onClick={toggleSidebar} className="text-gray-500">
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex flex-col items-center py-6 border-b border-[#e1e1e1]">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden mb-2">
              <Image
                src={Avatar}
                alt="Jane's profile"
                width={96}
                height={96}
                className="object-cover"
              />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold">Jane</h2>
          </div>

          <nav className="py-4 flex flex-col h-[calc(100%-160px)] justify-between">
            <div>
              <SidebarItem
                icon="healthy"
                label="My healthy"
                active={activeView === "healthy"}
                onClick={() => {
                  setActiveView("healthy")
                  if (isMobile) setSidebarOpen(false)
                }}
              />
              <SidebarItem
                icon="plans"
                label="Plans"
                active={activeView === "plans"}
                onClick={() => {
                  setActiveView("plans")
                  if (isMobile) setSidebarOpen(false)
                }}
              />
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
        {activeView === "healthy" ? (
          <div className="flex-1 overflow-auto">
            {/* Header */}
            <div className="flex items-center justify-between p-4 md:p-6">
              <div className="flex items-center gap-4">
                <button className="md:hidden text-[#012f5c] mr-2" onClick={toggleSidebar}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </svg>
                </button>
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-[#333]">Good Morning, Jane!</h1>
                  <p className="text-sm text-gray-500">Happiness is nothing more than good health</p>
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

            {/* Main Dashboard Content */}
            <div className="p-4 md:p-6">
              {/* Tabs */}
              <div className="flex space-x-2 mb-6 overflow-x-auto pb-2">
                <TabButton active={activeTab === "weight-loss"} onClick={() => setActiveTab("weight-loss")}>
                  Weight loss
                </TabButton>
                <TabButton active={activeTab === "glucose"} onClick={() => setActiveTab("glucose")}>
                  Glucose
                </TabButton>
                <TabButton active={activeTab === "glucose-2"} onClick={() => setActiveTab("glucose-2")}>
                  Glucose
                </TabButton>
              </div>

              {/* Weight Progress Card */}
              <div className="bg-white rounded-xl border border-gray-200 p-4 mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div className="flex justify-between mb-4">
                      <div>
                        <p className="text-gray-500 text-sm">Start weight</p>
                        <p className="text-xl font-bold">75Kg</p>
                      </div>
                      <div className="text-center">
                        <p className="text-green-500 font-bold">25%done</p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-500 text-sm">Current weight</p>
                        <p className="text-xl font-bold">65Kg</p>
                      </div>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-red-500 to-green-500 rounded-full"
                        style={{ width: "25%" }}
                      ></div>
                    </div>
                  </div>

                  {/* Activity Stats */}
                  <div className="grid grid-cols-3 gap-2">
                    {/* Steps */}
                    <div className="bg-[#1e3a8a] text-white p-3 rounded-xl">
                      <div className="flex items-center mb-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M19 5.5V18M19 5.5h-4.5m4.5 0-7 7-4-4-5 5"></path>
                        </svg>
                        <span className="ml-1">Steps</span>
                      </div>
                      <div className="text-2xl font-bold">
                        2.500<span className="text-sm font-normal">Steps</span>
                      </div>
                      <div className="mt-2 text-xs">
                        <div className="w-full bg-blue-900 h-1 rounded-full">
                          <div className="bg-white h-1 rounded-full" style={{ width: "50%" }}></div>
                        </div>
                        <p className="mt-1">50% of your goals</p>
                      </div>
                    </div>

                    {/* Calories */}
                    <div className="bg-[#fcd34d] p-3 rounded-xl">
                      <div className="flex items-center mb-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 2v8"></path>
                          <path d="M12 18v4"></path>
                          <path d="M4.93 10.93l6.37 6.37"></path>
                          <path d="M12.7 17.3l6.37-6.37"></path>
                        </svg>
                        <span className="ml-1">Calories</span>
                      </div>
                      <div className="flex justify-center my-2">
                        <div className="relative w-16 h-16">
                          <svg viewBox="0 0 36 36" className="w-full h-full">
                            <path
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              fill="none"
                              stroke="#eab308"
                              strokeWidth="3"
                              strokeDasharray="100, 100"
                            />
                            <path
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              fill="none"
                              stroke="#fff"
                              strokeWidth="3"
                              strokeDasharray="75, 100"
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="m5 12 7-7 7 7"></path>
                              <path d="M12 19V5"></path>
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="text-center text-xs">
                        <p>Today</p>
                        <p className="font-bold">1500 KCAL</p>
                      </div>
                    </div>

                    {/* Water */}
                    <div className="bg-[#93c5fd] p-3 rounded-xl">
                      <div className="flex items-center mb-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></path>
                        </svg>
                        <span className="ml-1">Water</span>
                      </div>
                      <div className="flex justify-center my-2">
                        <div className="relative w-16 h-16">
                          <svg viewBox="0 0 36 36" className="w-full h-full">
                            <path
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              fill="none"
                              stroke="#60a5fa"
                              strokeWidth="3"
                              strokeDasharray="100, 100"
                            />
                            <path
                              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                              fill="none"
                              stroke="#fff"
                              strokeWidth="3"
                              strokeDasharray="25, 100"
                            />
                          </svg>
                          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                            <span className="text-lg font-bold">1.25</span>
                            <span className="text-xs">Liters</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Charts Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Weight Over Time Chart */}
                <div className="bg-white rounded-xl border border-gray-200 p-4">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-medium">Weight Over Time</h3>
                    <div className="relative">
                      <button className="flex items-center text-sm border rounded-md px-3 py-1">
                        Monthly <ChevronDown className="ml-1 h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <div className="h-48 relative">
                    {/* Simplified chart representation */}
                    <div className="absolute inset-0">
                      <svg viewBox="0 0 400 150" className="w-full h-full">
                        {/* Y-axis labels */}
                        <text x="5" y="20" fontSize="10" fill="#888">
                          100%
                        </text>
                        <text x="5" y="50" fontSize="10" fill="#888">
                          80%
                        </text>
                        <text x="5" y="80" fontSize="10" fill="#888">
                          60%
                        </text>
                        <text x="5" y="110" fontSize="10" fill="#888">
                          40%
                        </text>
                        <text x="5" y="140" fontSize="10" fill="#888">
                          20%
                        </text>

                        {/* X-axis labels */}
                        <text x="50" y="148" fontSize="10" fill="#888">
                          Sept
                        </text>
                        <text x="150" y="148" fontSize="10" fill="#888">
                          Oct
                        </text>
                        <text x="250" y="148" fontSize="10" fill="#888">
                          Nov
                        </text>
                        <text x="350" y="148" fontSize="10" fill="#888">
                          Dec
                        </text>

                        {/* Grid lines */}
                        <line x1="30" y1="20" x2="380" y2="20" stroke="#eee" strokeWidth="1" />
                        <line x1="30" y1="50" x2="380" y2="50" stroke="#eee" strokeWidth="1" />
                        <line x1="30" y1="80" x2="380" y2="80" stroke="#eee" strokeWidth="1" />
                        <line x1="30" y1="110" x2="380" y2="110" stroke="#eee" strokeWidth="1" />
                        <line x1="30" y1="140" x2="380" y2="140" stroke="#eee" strokeWidth="1" />

                        {/* Weight line */}
                        <path
                          d="M40,120 L60,100 L80,110 L100,90 L120,100 L140,110 L160,90 L180,100 L200,80 L220,90 L240,70 L260,50 L280,60 L300,70 L320,80 L340,90 L360,80"
                          fill="none"
                          stroke="#333"
                          strokeWidth="2"
                        />

                        {/* Vertical indicator line */}
                        <line x1="260" y1="20" x2="260" y2="140" stroke="#22c55e" strokeWidth="1" strokeDasharray="4" />

                        {/* Data points */}
                        <circle cx="260" cy="50" r="4" fill="#22c55e" />
                        <circle cx="360" cy="80" r="4" fill="#ef4444" />

                        {/* Weight indicators */}
                        <text x="245" y="40" fontSize="8" fill="#22c55e">
                          69kg
                        </text>
                        <text x="365" y="80" fontSize="8" fill="#ef4444">
                          75kg
                        </text>
                      </svg>
                    </div>
                  </div>
                  <div className="flex justify-center space-x-6 mt-2">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-red-500 mr-1"></div>
                      <span className="text-xs text-gray-500">Heavy weight</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-green-500 mr-1"></div>
                      <span className="text-xs text-gray-500">Weight loss</span>
                    </div>
                  </div>
                </div>

                {/* Goal Progress Chart */}
                <div className="bg-white rounded-xl border border-gray-200 p-4">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-medium">Goal Progress</h3>
                    <div className="relative">
                      <button className="flex items-center text-sm border rounded-md px-3 py-1">
                        Weekly <ChevronDown className="ml-1 h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  <div className="h-48 relative">
                    {/* Simplified bar chart representation */}
                    <div className="absolute inset-0">
                      <svg viewBox="0 0 400 150" className="w-full h-full">
                        {/* Y-axis labels */}
                        <text x="5" y="20" fontSize="10" fill="#888">
                          100%
                        </text>
                        <text x="5" y="50" fontSize="10" fill="#888">
                          80%
                        </text>
                        <text x="5" y="80" fontSize="10" fill="#888">
                          60%
                        </text>
                        <text x="5" y="110" fontSize="10" fill="#888">
                          40%
                        </text>
                        <text x="5" y="140" fontSize="10" fill="#888">
                          20%
                        </text>

                        {/* X-axis labels */}
                        <text x="50" y="148" fontSize="10" fill="#888">
                          Mon
                        </text>
                        <text x="100" y="148" fontSize="10" fill="#888">
                          Tue
                        </text>
                        <text x="150" y="148" fontSize="10" fill="#888">
                          Wed
                        </text>
                        <text x="200" y="148" fontSize="10" fill="#888">
                          Thu
                        </text>
                        <text x="250" y="148" fontSize="10" fill="#888">
                          Fri
                        </text>
                        <text x="300" y="148" fontSize="10" fill="#888">
                          Sat
                        </text>
                        <text x="350" y="148" fontSize="10" fill="#888">
                          Sun
                        </text>

                        {/* Grid lines */}
                        <line x1="30" y1="20" x2="380" y2="20" stroke="#eee" strokeWidth="1" />
                        <line x1="30" y1="50" x2="380" y2="50" stroke="#eee" strokeWidth="1" />
                        <line x1="30" y1="80" x2="380" y2="80" stroke="#eee" strokeWidth="1" />
                        <line x1="30" y1="110" x2="380" y2="110" stroke="#eee" strokeWidth="1" />
                        <line x1="30" y1="140" x2="380" y2="140" stroke="#eee" strokeWidth="1" />

                        {/* Monday bars */}
                        <rect x="40" y="120" width="8" height="20" fill="#93c5fd" />
                        <rect x="50" y="100" width="8" height="40" fill="#fcd34d" />
                        <rect x="60" y="70" width="8" height="70" fill="#1e3a8a" />

                        {/* Tuesday bars */}
                        <rect x="90" y="100" width="8" height="40" fill="#93c5fd" />
                        <rect x="100" y="120" width="8" height="20" fill="#fcd34d" />
                        <rect x="110" y="80" width="8" height="60" fill="#1e3a8a" />

                        {/* Wednesday bars */}
                        <rect x="140" y="90" width="8" height="50" fill="#93c5fd" />
                        <rect x="150" y="100" width="8" height="40" fill="#fcd34d" />
                        <rect x="160" y="90" width="8" height="50" fill="#1e3a8a" />

                        {/* Thursday bars */}
                        <rect x="190" y="80" width="8" height="60" fill="#93c5fd" />
                        <rect x="200" y="90" width="8" height="50" fill="#fcd34d" />
                        <rect x="210" y="110" width="8" height="30" fill="#1e3a8a" />

                        {/* Friday bars */}
                        <rect x="240" y="120" width="8" height="20" fill="#93c5fd" />
                        <rect x="250" y="90" width="8" height="50" fill="#fcd34d" />
                        <rect x="260" y="100" width="8" height="40" fill="#1e3a8a" />

                        {/* Saturday bars */}
                        <rect x="290" y="110" width="8" height="30" fill="#93c5fd" />
                        <rect x="300" y="90" width="8" height="50" fill="#fcd34d" />
                        <rect x="310" y="80" width="8" height="60" fill="#1e3a8a" />

                        {/* Sunday bars */}
                        <rect x="340" y="120" width="8" height="20" fill="#93c5fd" />
                        <rect x="350" y="90" width="8" height="50" fill="#fcd34d" />
                        <rect x="360" y="80" width="8" height="60" fill="#1e3a8a" />
                      </svg>
                    </div>
                  </div>
                  <div className="flex justify-center space-x-6 mt-2">
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-blue-300 mr-1"></div>
                      <span className="text-xs text-gray-500">Water</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-yellow-300 mr-1"></div>
                      <span className="text-xs text-gray-500">Calories</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-blue-900 mr-1"></div>
                      <span className="text-xs text-gray-500">Steps</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Section */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* BMI Card */}
                <div className="bg-white rounded-xl border border-gray-200 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium">BMI</h3>
                    <div className="bg-gray-100 p-2 rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M18 8a5 5 0 0 0-10 0v7h10V8z"></path>
                        <path d="M8 15v1a5 5 0 0 0 10 0v-1"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 mb-1">Last Update</div>
                  <div className="text-sm mb-4">21 Jan, 2025 at 10:10</div>
                  <div className="text-center mb-2">
                    <div className="text-2xl font-bold">22.5</div>
                  </div>
                  <div className="relative h-4 bg-gradient-to-r from-green-500 via-yellow-500 to-red-500 rounded-full mb-1">
                    <div className="absolute top-0 left-[30%] transform -translate-x-1/2 -translate-y-1/2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>18</span>
                    <span>25</span>
                    <span>30</span>
                  </div>
                </div>

                {/* Calories Card */}
                <div className="bg-white rounded-xl border border-gray-200 p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium">My calories</h3>
                  </div>
                  <div className="text-xs text-gray-500 mb-1">Last Update</div>
                  <div className="text-sm mb-4">21 Jan, 2025 at 10:10</div>
                  <div className="flex justify-between space-x-2 mb-2">
                    {/* Carbs */}
                    <div className="flex-1">
                      <div className="relative w-full h-24">
                        <svg viewBox="0 0 36 36" className="w-full h-full">
                          <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#eee"
                            strokeWidth="3"
                          />
                          <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#22c55e"
                            strokeWidth="3"
                            strokeDasharray="50, 100"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-xl font-bold">50%</div>
                          </div>
                        </div>
                      </div>
                      <div className="text-center">
                        <p className="font-medium">Carbohydrates</p>
                        <p className="text-xs text-gray-500">142 g/250 g</p>
                      </div>
                    </div>

                    {/* Protein */}
                    <div className="flex-1">
                      <div className="relative w-full h-24">
                        <svg viewBox="0 0 36 36" className="w-full h-full">
                          <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#eee"
                            strokeWidth="3"
                          />
                          <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#93c5fd"
                            strokeWidth="3"
                            strokeDasharray="74, 100"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-xl font-bold">74%</div>
                          </div>
                        </div>
                      </div>
                      <div className="text-center">
                        <p className="font-medium">Protein</p>
                        <p className="text-xs text-gray-500">44 g/60 g</p>
                      </div>
                    </div>

                    {/* Fat */}
                    <div className="flex-1">
                      <div className="relative w-full h-24">
                        <svg viewBox="0 0 36 36" className="w-full h-full">
                          <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#eee"
                            strokeWidth="3"
                          />
                          <path
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            stroke="#fcd34d"
                            strokeWidth="3"
                            strokeDasharray="15, 100"
                          />
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-xl font-bold">15%</div>
                          </div>
                        </div>
                      </div>
                      <div className="text-center">
                        <p className="font-medium">Fat</p>
                        <p className="text-xs text-gray-500">40 g/60 g</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Diet Menu Card */}
                <div className="bg-white rounded-xl border border-gray-200 p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-medium">Featured Diet Menu</h3>
                    <div className="bg-gray-100 p-2 rounded-lg">
                      <Search className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-gray-100 text-xs px-2 py-1 rounded-full">#low-carb</span>
                    <span className="bg-gray-100 text-xs px-2 py-1 rounded-full">#protein</span>
                  </div>
                  <div className="space-y-3">
                    {/* Avocado Salad */}
                    <div className="flex items-center p-2 border rounded-lg">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                        <Image
                          src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
                          alt="Avocado salad"
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">Avocado salad</h4>
                        <div className="flex items-center text-xs text-gray-500">
                          <span>+ 8% carbs</span>
                          <div className="w-12 h-1 bg-blue-200 mx-1 rounded-full">
                            <div className="h-full w-2/3 bg-blue-500 rounded-full"></div>
                          </div>
                          <span>+ 16% protein</span>
                          <div className="w-12 h-1 bg-yellow-200 mx-1 rounded-full">
                            <div className="h-full w-1/2 bg-yellow-500 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Tuna with Zucchini */}
                    <div className="flex items-center p-2 border rounded-lg">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                        <Image
                          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
                          alt="Tuna with zucchini"
                          width={48}
                          height={48}
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">Tuna with zucchini</h4>
                        <div className="flex items-center text-xs text-gray-500">
                          <span>+ 6% carbs</span>
                          <div className="w-12 h-1 bg-blue-200 mx-1 rounded-full">
                            <div className="h-full w-1/3 bg-blue-500 rounded-full"></div>
                          </div>
                          <span>+ 18% protein</span>
                          <div className="w-12 h-1 bg-yellow-200 mx-1 rounded-full">
                            <div className="h-full w-3/4 bg-yellow-500 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Navigation Arrows */}
                  <div className="flex justify-end mt-4">
                    <button className="p-1 rounded-full border mr-2">
                      <ChevronLeft className="h-4 w-4" />
                    </button>
                    <button className="p-1 rounded-full border">
                      <ChevronRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex-1 p-0">
            <div className="w-full sm:w-[98%] mx-auto bg-white rounded-3xl overflow-hidden shadow-lg border border-[#e1e1e1]">
              {/* Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 sm:p-6 border-b border-[#e1e1e1]">
                <div className="flex items-center gap-3 sm:gap-6 w-full sm:w-auto">
                  <button className="md:hidden text-[#012f5c] mr-2" onClick={toggleSidebar} aria-label="Toggle sidebar">
                    <Menu className="h-6 w-6" />
                  </button>
                  <div className="relative w-16 h-16 sm:w-24 sm:h-24 rounded-full overflow-hidden">
                    {/* <Image
                      src={Avatar}
                      alt="Jane's profile"
                      width={96}
                      height={96}
                      className="object-cover"
                    /> */}
                  </div>
                  <div>
                    <h1 className="text-xl sm:text-3xl font-bold text-[#333]">Good Morning, Jane!</h1>
                    <p className="text-sm sm:text-base text-[#4CAF50]">
                      We offer a variety of health plans to help you achieve your goals
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4 mt-4 sm:mt-0 self-end sm:self-auto">
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

              <div className="flex flex-col md:flex-row">
                {/* Main Content */}
                <div className="flex-1 p-3 sm:p-6">
                  {/* Health Plans Container with rounded corners */}
                  <div className="bg-white rounded-2xl p-3 sm:p-6 shadow-sm border border-[#e1e1e1]">
                    {/* First Row of Health Plans */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4 mb-3 sm:mb-6">
                      <HealthPlanCard
                        plan={{
                          id: "weight-loss",
                          number: "1",
                          icon: "weight",
                          title: "Weight loss",
                          description:
                            "Help users achieve healthy weight loss or maintenance through personalized plans.",
                          features: {
                            withingsSmartwatchFeatures: [
                              "active minutes",
                              "steps",
                              "temperature zones during workouts",
                            ],
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
                            withingsSmartwatchFeatures: [
                              "ECG monitoring",
                              "heart rate variability",
                              "arrhythmia detection",
                            ],
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
                            withingsSmartwatchFeatures: [
                              "sleep cycle tracking",
                              "sleep quality analysis",
                              "snore detection",
                            ],
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
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
                            appleWatchFeatures: [
                              "nutrition logging",
                              "water intake tracking",
                              "meal planning assistance",
                            ],
                          },
                          benefits: [
                            "improved dietary habits",
                            "optimal hydration levels",
                            "balanced macronutrient intake",
                          ],
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
          </div>
        )}
      </div>

      {/* Health Plan Modal */}
      {selectedPlan && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
          <div className="bg-white rounded-xl w-full max-w-2xl max-h-[90vh] relative overflow-auto">
            {/* Yellow border around modal */}
            <div className="absolute inset-0 border-2 border-[#F9D949] rounded-xl pointer-events-none"></div>

            <button
              onClick={closeModal}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-500 hover:text-gray-700 z-10 bg-white rounded-full p-1"
              aria-label="Close modal"
            >
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            <div className="p-4 sm:p-6">
              <div className="flex items-start mb-4">
                <div className="text-4xl sm:text-6xl font-bold text-[#ccc] mr-2 sm:mr-4">{selectedPlan.number}</div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#012f5c]">{selectedPlan.title}</h2>
              </div>

              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{selectedPlan.description}</p>

              <h3 className="text-lg sm:text-xl font-semibold text-[#012f5c] mb-3 sm:mb-4">IoMT Features Utilized:</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
                {selectedPlan.features?.withingsSmartwatchFeatures && (
                  <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                    <h4 className="font-medium mb-2 text-sm sm:text-base">Withings Smartwatch:</h4>
                    <ul className="space-y-1">
                      {selectedPlan.features.withingsSmartwatchFeatures.map((feature, index) => (
                        <li key={index} className="text-xs sm:text-sm text-gray-600">
                          - {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedPlan.features?.withingsScaleFeatures && (
                  <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                    <h4 className="font-medium mb-2 text-sm sm:text-base">Withings Scale:</h4>
                    <ul className="space-y-1">
                      {selectedPlan.features.withingsScaleFeatures.map((feature, index) => (
                        <li key={index} className="text-xs sm:text-sm text-gray-600">
                          - {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedPlan.features?.appleWatchFeatures && (
                  <div className="bg-gray-50 p-3 sm:p-4 rounded-lg">
                    <h4 className="font-medium mb-2 text-sm sm:text-base">Apple Smartwatch:</h4>
                    <ul className="space-y-1">
                      {selectedPlan.features.appleWatchFeatures.map((feature, index) => (
                        <li key={index} className="text-xs sm:text-sm text-gray-600">
                          - {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {selectedPlan.benefits && (
                <>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#012f5c] mb-3 sm:mb-4">Key Benefits:</h3>
                  <div className="bg-gray-50 p-3 sm:p-4 rounded-lg mb-4 sm:mb-6">
                    <ul className="space-y-1">
                      {selectedPlan.benefits.map((benefit, index) => (
                        <li key={index} className="text-xs sm:text-sm text-gray-600">
                          - {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}

              <div className="flex justify-center">
                <Button className="bg-[#012f5c] hover:bg-[#012f5c]/90 text-white px-6 sm:px-8">Choose</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

function SidebarItem({
  icon,
  label,
  active = false,
  onClick,
}: {
  icon: string
  label: string
  active?: boolean
  onClick?: () => void
}) {
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
    <button
      className={`flex items-center gap-3 px-6 py-3 hover:bg-[#f5f5f5] transition-colors w-full text-left ${
        active ? "bg-[#012f5c] text-white hover:bg-[#012f5c]" : ""
      }`}
      onClick={onClick}
    >
      <div className="w-8 h-8 flex items-center justify-center">
        {active ? React.cloneElement(getIcon() as React.ReactElement, { className: "h-5 w-5 text-white" }) : getIcon()}
      </div>
      <span className="font-medium">{label}</span>
    </button>
  )
}

function TabButton({
  children,
  active = false,
  onClick,
}: {
  children: React.ReactNode
  active?: boolean
  onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap ${
        active ? "bg-[#012f5c] text-white" : "bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
      }`}
    >
      {children}
    </button>
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
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#012f5c"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute -top-5 sm:-top-6 left-1/2 transform -translate-x-1/2"
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
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#F9D949"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute -top-5 sm:-top-6 left-1/2 transform -translate-x-1/2"
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
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#012f5c"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute -top-6 sm:-top-8 left-1/2 transform -translate-x-1/2"
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
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#F9D949"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute -top-5 sm:-top-6 left-1/2 transform -translate-x-1/2"
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
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#012f5c"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute -top-5 sm:-top-6 left-1/2 transform -translate-x-1/2"
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
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#F9D949"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute -top-5 sm:-top-6 left-1/2 transform -translate-x-1/2"
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
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#012f5c"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute -top-5 sm:-top-6 left-1/2 transform -translate-x-1/2"
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
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#F9D949"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute -top-5 sm:-top-6 left-1/2 transform -translate-x-1/2"
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
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#012f5c"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute -top-5 sm:-top-6 left-1/2 transform -translate-x-1/2"
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
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#F9D949"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="absolute -top-5 sm:-top-6 left-1/2 transform -translate-x-1/2"
            >
              <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
            </svg>
          </div>
        )
      default:
        return (
          <div className="relative">
            <Heart className="h-8 w-8 sm:h-10 sm:w-10 text-[#012f5c] absolute -top-5 sm:-top-6 left-1/2 transform -translate-x-1/2" />
          </div>
        )
    }
  }

  return (
    <div
      className="border border-[#e1e1e1] rounded-lg p-3 sm:p-4 hover:shadow-md transition-shadow cursor-pointer relative pt-6 sm:pt-8 mt-5 sm:mt-6"
      onClick={() => onClick(plan)}
    >
      <div className="text-3xl sm:text-4xl font-bold text-[#ccc] mb-2">{plan.number}</div>
      <div className="flex justify-center mb-2 sm:mb-3">{getIcon()}</div>
      <h3 className="text-center font-bold text-[#012f5c] text-sm sm:text-base mb-1 sm:mb-2">{plan.title}</h3>
      <p className="text-xs text-center text-[#666] line-clamp-3">{plan.description}</p>
    </div>
  )
}
