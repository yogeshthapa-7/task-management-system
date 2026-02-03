"use client"

import { useAppSelector } from "@/lib/store/hooks"
import { TaskBoard } from "@/components/dashboard/task-board"
import { TaskListView } from "@/components/dashboard/task-list-view"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui"
import { Task } from "@/types"

interface TaskViewProps {
  title: string
  description: string
  filter: (task: Task) => boolean
}

export function TaskView({ title, description, filter }: TaskViewProps) {
  const { tasks } = useAppSelector((state) => state.tasks)
  const filteredTasks = tasks.filter(filter)

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          {title}
        </h1>
        <p className="text-slate-500 dark:text-slate-400">
          {description}
        </p>
      </div>

      <Tabs defaultValue="board">
        <TabsList>
          <TabsTrigger value="board">Board View</TabsTrigger>
          <TabsTrigger value="list">List View</TabsTrigger>
        </TabsList>
        <TabsContent value="board" className="mt-6">
          <TaskBoard filteredTasks={filteredTasks} />
        </TabsContent>
        <TabsContent value="list" className="mt-6">
          <TaskListView tasks={filteredTasks} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
