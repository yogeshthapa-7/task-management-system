"use client"

import { TaskView } from "@/components/dashboard/task-view"

export default function MyTasksPage() {
  return (
    <TaskView
      title="My Tasks"
      description="View and manage all your assigned tasks in one place."
      filter={() => true}
    />
  )
}
