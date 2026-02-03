export interface Task {
  id: string
  title: string
  description?: string
  status: TaskStatus
  priority: TaskPriority
  createdAt: Date
  updatedAt: Date
  dueDate?: Date
  assignedTo?: string
}

export enum TaskStatus {
  TODO = 'todo',
  IN_PROGRESS = 'in_progress',
  DONE = 'done',
}

export enum TaskPriority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  URGENT = 'urgent',
}

export interface User {
  id: string
  name: string
  email: string
  avatar?: string
}
