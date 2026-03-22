"use client"

import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Task, TaskPriority, TaskStatus } from "@/types"
import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea,
} from "@/components/ui"
import { useAppDispatch } from "@/lib/store/hooks"
import { addTask, updateTask } from "@/lib/store/slices/tasksSlice"
import { toast } from "sonner"

const taskSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  status: z.nativeEnum(TaskStatus),
  priority: z.nativeEnum(TaskPriority),
  dueDate: z.string().optional(),
})

type TaskFormValues = z.infer<typeof taskSchema>

interface TaskModalProps {
  isOpen: boolean
  onClose: () => void
  task?: Task | null
}

export function TaskModal({ isOpen, onClose, task }: TaskModalProps) {
  const dispatch = useAppDispatch()

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm<TaskFormValues>({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      status: TaskStatus.TODO,
      priority: TaskPriority.MEDIUM,
    },
  })

  useEffect(() => {
    if (task) {
      reset({
        title: task.title,
        description: task.description || "",
        status: task.status,
        priority: task.priority,
        dueDate: task.dueDate ? new Date(task.dueDate).toISOString().split('T')[0] : "",
      })
    } else {
      reset({
        title: "",
        description: "",
        status: TaskStatus.TODO,
        priority: TaskPriority.MEDIUM,
        dueDate: "",
      })
    }
  }, [task, reset])

  const onSubmit = (data: TaskFormValues) => {
    if (task) {
      dispatch(
        updateTask({
          ...task,
          ...data,
          updatedAt: new Date(),
          dueDate: data.dueDate ? new Date(data.dueDate) : undefined,
        })
      )
      toast.success("Task updated successfully")
    } else {
      const newTask = {
        id: Math.random().toString(36).substring(7),
        ...data,
        createdAt: new Date(),
        updatedAt: new Date(),
        dueDate: data.dueDate ? new Date(data.dueDate) : undefined,
      }
      dispatch(addTask(newTask))
      toast.success("Task created successfully")
    }
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{task ? "Edit Task" : "Create New Task"}</DialogTitle>
          <DialogDescription>
            {task ? "Update the details of your task below." : "Add a new task to your project."}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              placeholder="e.g., Design homepage"
              {...register("title")}
              className={errors.title ? "border-red-500" : ""}
            />
            {errors.title && (
              <p className="text-xs text-red-500">{errors.title.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Add more details about this task..."
              {...register("description")}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Status</Label>
              <Select
                defaultValue={watch("status")}
                onValueChange={(value) => setValue("status", value as TaskStatus)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={TaskStatus.TODO}>To Do</SelectItem>
                  <SelectItem value={TaskStatus.IN_PROGRESS}>In Progress</SelectItem>
                  <SelectItem value={TaskStatus.DONE}>Done</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Priority</Label>
              <Select
                defaultValue={watch("priority")}
                onValueChange={(value) => setValue("priority", value as TaskPriority)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={TaskPriority.LOW}>Low</SelectItem>
                  <SelectItem value={TaskPriority.MEDIUM}>Medium</SelectItem>
                  <SelectItem value={TaskPriority.HIGH}>High</SelectItem>
                  <SelectItem value={TaskPriority.URGENT}>Urgent</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="dueDate">Due Date</Label>
            <Input
              id="dueDate"
              type="date"
              {...register("dueDate")}
            />
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" variant="primary">
              {task ? "Save Changes" : "Create Task"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
