"use client"

import { useAppSelector } from "@/lib/store/hooks"
import { TaskStatus, TaskPriority } from "@/types"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts"

export default function AnalyticsPage() {
  const { tasks } = useAppSelector((state) => state.tasks)

  const statusData = [
    { name: "To Do", value: tasks.filter(t => t.status === TaskStatus.TODO).length },
    { name: "In Progress", value: tasks.filter(t => t.status === TaskStatus.IN_PROGRESS).length },
    { name: "Done", value: tasks.filter(t => t.status === TaskStatus.DONE).length },
  ]

  const priorityData = [
    { name: "Low", value: tasks.filter(t => t.priority === TaskPriority.LOW).length },
    { name: "Medium", value: tasks.filter(t => t.priority === TaskPriority.MEDIUM).length },
    { name: "High", value: tasks.filter(t => t.priority === TaskPriority.HIGH).length },
    { name: "Urgent", value: tasks.filter(t => t.priority === TaskPriority.URGENT).length },
  ]

  const COLORS = ["#94a3b8", "#3b82f6", "#22c55e", "#ef4444"]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          Analytics
        </h1>
        <p className="text-slate-500 dark:text-slate-400">
          Gain insights into your productivity and task distributions.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <Card className="border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle>Task Distribution by Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={statusData}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis allowDecimals={false} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "var(--background)",
                      borderColor: "var(--border)",
                      borderRadius: "8px"
                    }}
                  />
                  <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="border-slate-200 dark:border-slate-800">
          <CardHeader>
            <CardTitle>Task Priority Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={priorityData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {priorityData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "var(--background)",
                      borderColor: "var(--border)",
                      borderRadius: "8px"
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="mt-4 flex justify-center space-x-4">
                {priorityData.map((entry, index) => (
                  <div key={entry.name} className="flex items-center space-x-1">
                    <div
                      className="h-3 w-3 rounded-full"
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    />
                    <span className="text-xs text-slate-500">{entry.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-slate-200 dark:border-slate-800">
        <CardHeader>
          <CardTitle>Productivity Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex h-[200px] items-center justify-center text-slate-500">
            Progress tracking over time will be available as you complete more tasks.
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
