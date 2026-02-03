"use client"

import { format } from "date-fns"
import { Calendar, MoreVertical, Edit2, Trash2 } from "lucide-react"
import { Task, TaskPriority, TaskStatus } from "@/types"
import {
  Badge,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui"
import { cn } from "@/lib/utils"

interface TaskCardProps {
  task: Task
  onEdit?: (task: Task) => void
  onDelete?: (id: string) => void
  onStatusChange?: (id: string, status: TaskStatus) => void
}

const priorityColors = {
  [TaskPriority.LOW]: "bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400",
  [TaskPriority.MEDIUM]: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-400",
  [TaskPriority.HIGH]: "bg-orange-100 text-orange-700 dark:bg-orange-900/20 dark:text-orange-400",
  [TaskPriority.URGENT]: "bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-400",
}

export function TaskCard({ task, onEdit, onDelete }: TaskCardProps) {
  return (
    <div
      className="group relative flex flex-col space-y-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
    >
      <div className="flex items-start justify-between">
        <Badge
          variant="secondary"
          className={cn(
            "capitalize font-medium px-2 py-0",
            priorityColors[task.priority]
          )}
        >
          {task.priority}
        </Badge>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon-sm" className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity">
              <MoreVertical className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => onEdit?.(task)}>
              <Edit2 className="mr-2 h-4 w-4" />
              Edit
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              className="text-red-600 dark:text-red-400"
              onClick={() => onDelete?.(task.id)}
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div>
        <h3 className="font-semibold text-slate-900 dark:text-white line-clamp-1">
          {task.title}
        </h3>
        <p className="mt-1 text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
          {task.description}
        </p>
      </div>

      <div className="flex items-center justify-between pt-2">
        <div className="flex -space-x-2">
          {/* This part was simplified in the provided edit, assuming a single assignee or placeholder */}
          <div className="h-6 w-6 rounded-full border-2 border-white bg-slate-200 dark:border-slate-900 dark:bg-slate-800 flex items-center justify-center text-[10px] font-bold">
            {task.assignedTo?.substring(0, 2).toUpperCase() || "UN"}
          </div>
        </div>

        {task.dueDate && (
          <div className="flex items-center text-xs text-slate-500 dark:text-slate-400">
            <Calendar className="mr-1 h-3 w-3" />
            {format(task.dueDate, "MMM d")}
          </div>
        )}
      </div>
    </div>
  )
}

function DropdownMenuSeparator() {
  return <div className="h-px bg-slate-100 dark:bg-slate-800 my-1" />
}
