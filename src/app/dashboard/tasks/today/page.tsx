"use client"

import { TaskView } from "@/components/dashboard/task-view"
import { isToday } from "date-fns"

export default function TodayPage() {
  return (
    <TaskView
      title="Today"
      description="Stay focused on your goals for today."
      filter={(task) => task.dueDate ? isToday(new Date(task.dueDate)) : false}
    />
  )
}
