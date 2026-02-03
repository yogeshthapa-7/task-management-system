"use client"

import { TaskView } from "@/components/dashboard/task-view"

export default function InboxPage() {
  return (
    <TaskView
      title="Inbox"
      description="Capture tasks that come into your mind quickly."
      filter={() => true} // For now just show all for inbox simulation
    />
  )
}
