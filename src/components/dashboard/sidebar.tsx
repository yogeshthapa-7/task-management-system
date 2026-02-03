"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  BarChart3,
  Calendar,
  CheckCircle2,
  Inbox,
  LayoutDashboard,
  Settings,
  Users
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui"

const mainNav = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "My Tasks", href: "/dashboard/tasks", icon: CheckCircle2 },
  { name: "Calendar", href: "/dashboard/calendar", icon: Calendar },
  { name: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
]

const filters = [
  { name: "Inbox", href: "/dashboard/inbox", icon: Inbox, color: "text-blue-500" },
  { name: "Today", href: "/dashboard/tasks/today", icon: Calendar, color: "text-orange-500" },
  { name: "Team", href: "/dashboard/team", icon: Users, color: "text-purple-500" },
]

export function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <div className="flex h-full flex-col px-3 py-4">
        <div className="mb-10 flex items-center px-4">
          <CheckCircle2 className="h-8 w-8 text-primary-600" />
          <span className="ml-3 text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            TaskFlow
          </span>
        </div>

        <nav className="flex-1 space-y-6">
          <div>
            <p className="mb-2 px-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Overview
            </p>
            <div className="space-y-1">
              {mainNav.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "group flex items-center rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-primary-50 text-primary-600 dark:bg-primary-900/10 dark:text-primary-400"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-white"
                    )}
                  >
                    <item.icon
                      className={cn(
                        "mr-3 h-5 w-5 transition-colors",
                        isActive
                          ? "text-primary-600 dark:text-primary-400"
                          : "text-slate-500 group-hover:text-slate-900 dark:text-slate-400 dark:group-hover:text-white"
                      )}
                    />
                    {item.name}
                  </Link>
                )
              })}
            </div>
          </div>

          <div>
            <p className="mb-2 px-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
              Filters
            </p>
            <div className="space-y-1">
              {filters.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "group flex items-center rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-primary-50 text-primary-600 dark:bg-primary-900/10 dark:text-primary-400"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-900 dark:hover:text-white"
                    )}
                  >
                    <item.icon
                      className={cn(
                        "mr-3 h-5 w-5 transition-colors",
                        item.color,
                        !isActive && "opacity-70 group-hover:opacity-100"
                      )}
                    />
                    {item.name}
                  </Link>
                )
              })}
            </div>
          </div>
        </nav>

        <div className="mt-auto border-t border-slate-200 pt-4 dark:border-slate-800">
          <Button
            variant="ghost"
            className="w-full justify-start text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
          >
            <Settings className="mr-3 h-5 w-5" />
            Settings
          </Button>
        </div>
      </div>
    </aside>
  )
}
