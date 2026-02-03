"use client"

import { useAppDispatch, useAppSelector } from "@/lib/store/hooks"
import { Task, TaskPriority, TaskStatus } from "@/types"
import {
  Badge,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Separator
} from "@/components/ui"
import { format } from "date-fns"
import { Calendar, MoreHorizontal, CheckCircle2, Clock, AlertCircle } from "lucide-react"
import { deleteTask, updateTask } from "@/lib/store/slices/tasksSlice"
import { cn } from "@/lib/utils"

const priorityIcons = {
  [TaskPriority.LOW]: <CheckCircle2 className="h-4 w-4 text-blue-500" />,
  [TaskPriority.MEDIUM]: <Clock className="h-4 w-4 text-yellow-500" />,
  [TaskPriority.HIGH]: <AlertCircle className="h-4 w-4 text-orange-500" />,
  [TaskPriority.URGENT]: <AlertCircle className="h-4 w-4 text-red-500" />,
}

interface TaskListViewProps {
  tasks?: Task[]
}

export function TaskListView({ tasks: propTasks }: TaskListViewProps) {
  const dispatch = useAppDispatch()
  const { tasks: storeTasks } = useAppSelector((state) => state.tasks)
  const tasks = propTasks || storeTasks

  const handleDelete = (id: string) => {
    dispatch(deleteTask(id))
  }

  const handleStatusChange = (id: string, status: TaskStatus) => {
    const task = tasks.find(t => t.id === id)
    if (task) {
      dispatch(updateTask({ ...task, status }))
    }
  }

  return (
    <div className="rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-slate-200 bg-slate-50 text-xs font-medium uppercase text-slate-500 dark:border-slate-800 dark:bg-slate-900/50 dark:text-slate-400">
            <tr>
              <th className="px-6 py-4">Task Name</th>
              <th className="px-6 py-4">Status</th>
              <th className="px-6 py-4">Priority</th>
              <th className="px-6 py-4">Due Date</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
            {tasks.map((task) => (
              <tr key={task.id} className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="font-medium text-slate-900 dark:text-white">{task.title}</span>
                    <span className="text-xs text-slate-500 line-clamp-1">{task.description}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <Badge
                    variant="secondary"
                    className={cn(
                      "capitalize font-normal",
                      task.status === TaskStatus.DONE && "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400",
                      task.status === TaskStatus.IN_PROGRESS && "bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400",
                      task.status === TaskStatus.TODO && "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400"
                    )}
                  >
                    {task.status.replace("_", " ")}
                  </Badge>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-2">
                    {priorityIcons[task.priority]}
                    <span className="capitalize">{task.priority}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-slate-500">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{task.dueDate ? format(task.dueDate, "MMM d, yyyy") : "No date"}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon-sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => handleStatusChange(task.id, TaskStatus.TODO)}>Mark as To Do</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleStatusChange(task.id, TaskStatus.IN_PROGRESS)}>Mark as In Progress</DropdownMenuItem>
                      <DropdownMenuItem onClick={() => handleStatusChange(task.id, TaskStatus.DONE)}>Mark as Done</DropdownMenuItem>
                      <Separator className="my-1" />
                      <DropdownMenuItem className="text-red-500" onClick={() => handleDelete(task.id)}>Delete</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            ))}
            {tasks.length === 0 && (
              <tr>
                <td colSpan={5} className="px-6 py-12 text-center text-slate-500">
                  No tasks found. Create one to get started!
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
