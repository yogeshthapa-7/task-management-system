"use client"

import { Provider } from 'react-redux'
import { store } from '@/lib/store'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { Toaster } from 'sonner'

import { useEffect } from 'react'
import { setTasks } from '@/lib/store/slices/tasksSlice'
import { TaskStatus, TaskPriority } from '@/types'

export function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const saved = localStorage.getItem('tasks')
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        store.dispatch(setTasks(parsed.map((task: any) => ({
          ...task,
          createdAt: new Date(task.createdAt),
          updatedAt: new Date(task.updatedAt),
          dueDate: task.dueDate ? new Date(task.dueDate) : undefined,
        }))))
      } catch (e) {
        console.error('Failed to load tasks', e)
      }
    } else {
      // Initialize with mock data if first time
      const MOCK_TASKS = [
        {
          id: '1',
          title: 'Implement Dashboard Layout',
          description: 'Create a professional sidebar and header for the task management system.',
          status: TaskStatus.IN_PROGRESS,
          priority: TaskPriority.HIGH,
          createdAt: new Date(),
          updatedAt: new Date(),
          dueDate: new Date(Date.now() + 86400000 * 2),
        },
        {
          id: '2',
          title: 'Setup Redux Store',
          description: 'Configure slices and middleware for global state management.',
          status: TaskStatus.DONE,
          priority: TaskPriority.MEDIUM,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: '3',
          title: 'Design Task Board',
          description: 'Create a Kanban-style board for visualizing task progress.',
          status: TaskStatus.TODO,
          priority: TaskPriority.URGENT,
          createdAt: new Date(),
          updatedAt: new Date(),
          dueDate: new Date(Date.now() + 86400000 * 5),
        },
      ]
      store.dispatch(setTasks(MOCK_TASKS))
    }
  }, [])

  return (
    <Provider store={store}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
        <Toaster position="top-right" closeButton richColors />
      </ThemeProvider>
    </Provider>
  )
}
