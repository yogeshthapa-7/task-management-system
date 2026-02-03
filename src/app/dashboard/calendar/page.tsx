"use client"

import { useAppSelector } from "@/lib/store/hooks"
import { Badge, Button, Card, CardContent, CardHeader, CardTitle } from "@/components/ui"
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  format,
  isSameMonth,
  isToday,
  isSameDay,
  addMonths,
  subMonths
} from "date-fns"
import { useState } from "react"
import { ChevronLeft, ChevronRight, Plus } from "lucide-react"
import { cn } from "@/lib/utils"

export default function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date())
  const { tasks } = useAppSelector((state) => state.tasks)

  const monthStart = startOfMonth(currentDate)
  const monthEnd = endOfMonth(monthStart)
  const startDate = startOfWeek(monthStart)
  const endDate = endOfWeek(monthEnd)

  const calendarDays = eachDayOfInterval({
    start: startDate,
    end: endDate,
  })

  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1))
  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1))

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Calendar
          </h1>
          <p className="text-slate-500 dark:text-slate-400">
            View your upcoming deadlines and track your schedule.
          </p>
        </div>
        <Button variant="primary">
          <Plus className="mr-2 h-4 w-4" />
          Add Event
        </Button>
      </div>

      <Card className="border-slate-200 dark:border-slate-800">
        <CardHeader className="flex flex-row items-center justify-between pb-4">
          <CardTitle className="text-xl font-bold">
            {format(currentDate, "MMMM yyyy")}
          </CardTitle>
          <div className="flex space-x-2">
            <Button variant="outline" size="icon-sm" onClick={prevMonth}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon-sm" onClick={nextMonth}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="grid grid-cols-7 border-b border-slate-200 dark:border-slate-800">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div
                key={day}
                className="py-3 text-center text-xs font-semibold uppercase text-slate-500"
              >
                {day}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-7 divide-x divide-y divide-slate-200 dark:divide-slate-800">
            {calendarDays.map((day, idx) => {
              const dayTasks = tasks.filter(task =>
                task.dueDate && isSameDay(new Date(task.dueDate), day)
              )

              return (
                <div
                  key={idx}
                  className={cn(
                    "min-h-[140px] bg-white p-2 transition-colors dark:bg-slate-900",
                    !isSameMonth(day, monthStart) && "bg-slate-50/50 text-slate-400 dark:bg-slate-800/50",
                    isToday(day) && "bg-primary-50/30 dark:bg-primary-900/10"
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span className={cn(
                      "flex h-7 w-7 items-center justify-center rounded-full text-sm font-medium",
                      isToday(day) && "bg-primary-600 text-white shadow-sm"
                    )}>
                      {format(day, "d")}
                    </span>
                  </div>
                  <div className="mt-2 space-y-1">
                    {dayTasks.map(task => (
                      <Badge
                        key={task.id}
                        variant="secondary"
                        className="w-full justify-start overflow-hidden text-ellipsis whitespace-nowrap bg-blue-100/50 text-[10px] font-normal text-blue-700 dark:bg-blue-900/20 dark:text-blue-400"
                      >
                        {task.title}
                      </Badge>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
