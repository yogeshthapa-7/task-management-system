"use client"

import { useState } from "react"
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks"
import { Task, TaskStatus } from "@/types"
import { TaskCard } from "./task-card"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui"
import { toast } from "sonner"
import { deleteTask, updateTask } from "@/lib/store/slices/tasksSlice"
import { TaskModal } from "./task-modal"

const columns = [
  { id: TaskStatus.TODO, label: "To Do" },
  { id: TaskStatus.IN_PROGRESS, label: "In Progress" },
  { id: TaskStatus.DONE, label: "Done" },
]

interface TaskBoardProps {
  filteredTasks?: Task[]
}

export function TaskBoard({ filteredTasks }: TaskBoardProps) {
  const dispatch = useAppDispatch()
  const { tasks: allTasks } = useAppSelector((state) => state.tasks)
  const tasks = filteredTasks || allTasks
  const [selectedTask, setSelectedTask] = useState<Task | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleEdit = (task: Task) => {
    setSelectedTask(task)
    setIsModalOpen(true)
  }

  const handleDelete = (id: string) => {
    dispatch(deleteTask(id))
    toast.error("Task deleted")
  }

  const handleStatusChange = (id: string, status: TaskStatus) => {
    const task = tasks.find(t => t.id === id)
    if (task) {
      dispatch(updateTask({ ...task, status }))
      toast.info(`Task moved to ${status.replace("_", " ")}`)
    }
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {columns.map((column) => {
        const columnTasks = tasks.filter((t) => t.status === column.id)

        return (
          <div key={column.id} className="flex flex-col space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <h2 className="font-semibold text-slate-900 dark:text-white">
                  {column.label}
                </h2>
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-200 text-xs font-medium text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                  {columnTasks.length}
                </span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0"
                onClick={() => {
                  setSelectedTask(null)
                  setIsModalOpen(true)
                }}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>

            <div className="flex-1 space-y-4 rounded-xl bg-slate-100/50 p-2 dark:bg-slate-900/50 min-h-[500px]">
              {columnTasks.map((task) => (
                <TaskCard
                  key={task.id}
                  task={task}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                  onStatusChange={handleStatusChange}
                />
              ))}

              {columnTasks.length === 0 && (
                <div className="flex h-32 items-center justify-center rounded-lg border-2 border-dashed border-slate-200 dark:border-slate-800">
                  <p className="text-sm text-slate-400">No tasks here</p>
                </div>
              )}
            </div>
          </div>
        )
      })}

      <TaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        task={selectedTask}
      />
    </div>
  )
}
