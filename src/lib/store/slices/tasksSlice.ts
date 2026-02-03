import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { Task } from '@/types'

interface TasksState {
  tasks: Task[]
  loading: boolean
  error: string | null
}


const initialState: TasksState = {
  tasks: [], // Start empty for SSR safety
  loading: false,
  error: null,
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setTasks: (state, action: PayloadAction<Task[]>) => {
      state.tasks = action.payload
      state.loading = false
      state.error = null
    },
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload)
      if (typeof window !== 'undefined') {
        localStorage.setItem('tasks', JSON.stringify(state.tasks))
      }
    },
    updateTask: (state, action: PayloadAction<Task>) => {
      const index = state.tasks.findIndex((task) => task.id === action.payload.id)
      if (index !== -1) {
        state.tasks[index] = action.payload
      }
      if (typeof window !== 'undefined') {
        localStorage.setItem('tasks', JSON.stringify(state.tasks))
      }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload)
      if (typeof window !== 'undefined') {
        localStorage.setItem('tasks', JSON.stringify(state.tasks))
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload
      state.loading = false
    },
  },
})

export const { setTasks, addTask, updateTask, deleteTask, setLoading, setError } =
  tasksSlice.actions
export default tasksSlice.reducer
