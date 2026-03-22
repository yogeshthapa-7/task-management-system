"use client"

import { Button, Card, CardContent } from "@/components/ui"
import { UserPlus, Mail } from "lucide-react"

export default function TeamPage() {
  const members = [
    { name: "Yogesh Thapa", role: "Owner", email: "thapay@example.com", initial: "YT" },
    { name: "Suman Giri", role: "Developer", email: "suman@example.com", initial: "SG" },
  ]

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
            Team Members
          </h1>
          <p className="text-slate-500 dark:text-slate-400">
            Manage your team and their access levels.
          </p>
        </div>
        <Button variant="primary">
          <UserPlus className="mr-2 h-4 w-4" />
          Invite Member
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {members.map((member) => (
          <Card key={member.email} className="border-slate-200 dark:border-slate-800">
            <CardContent className="pt-6">
              <div className="flex items-center space-x-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400 font-bold uppercase">
                  {member.initial}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">
                    {member.name}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                    {member.role}
                  </p>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-between text-xs text-slate-500">
                <div className="flex items-center">
                  <Mail className="mr-1 h-3 w-3" />
                  {member.email}
                </div>
                <Button variant="ghost" size="xs">Edit</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
