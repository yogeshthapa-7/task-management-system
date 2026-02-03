'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CheckCircle2, Zap, Users, BarChart3, Shield, Clock } from 'lucide-react'

export default function Home() {
  const features = [
    {
      icon: CheckCircle2,
      title: 'Easy Task Management',
      description: 'Create, organize, and track tasks with an intuitive interface designed for productivity.',
    },
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Real-time synchronization and instant updates keep your team in sync.',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Assign tasks, share updates, and collaborate seamlessly with your team.',
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Track progress with detailed insights and actionable metrics.',
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security to keep your data safe and protected.',
    },
    {
      icon: Clock,
      title: 'Time Tracking',
      description: 'Monitor time spent on tasks and optimize your workflow.',
    },
  ]

  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 sm:py-32">
        <div className="container-max relative z-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-16">
            <div className="flex-1">
              <Badge variant="outline" className="mb-4">
                ✨ Introducing TaskFlow Pro
              </Badge>
              <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tighter text-slate-900 dark:text-white sm:text-5xl md:text-6xl">
                Manage Your Tasks
                <span className="text-gradient ml-2">Effortlessly</span>
              </h1>
              <p className="mb-8 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
                A powerful, intuitive task management system that helps you stay organized, collaborate with your team, and achieve your goals faster.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild variant="primary" size="lg" className="sm:w-auto">
                  <Link href="/dashboard">Get Started Free</Link>
                </Button>
                <Button variant="outline" size="lg">
                  Watch Demo
                </Button>
              </div>
              <p className="mt-8 text-sm text-slate-600 dark:text-slate-400">
                ✓ No credit card required • ✓ 30-day free trial • ✓ Cancel anytime
              </p>
            </div>

            {/* Hero Illustration */}
            <div className="relative flex-1">
              <div className="aspect-square w-full max-w-md rounded-2xl bg-gradient-to-br from-primary-100 to-secondary-100 p-8 dark:from-slate-700 dark:to-slate-600">
                <div className="flex h-full flex-col justify-between">
                  <div className="space-y-4">
                    <div className="h-3 w-3/4 rounded-full bg-primary-300 dark:bg-primary-600"></div>
                    <div className="h-2 w-1/2 rounded-full bg-slate-300 dark:bg-slate-500"></div>
                  </div>
                  <div className="grid gap-3">
                    <div className="flex items-center gap-3 rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
                      <div className="h-4 w-4 rounded bg-success-500"></div>
                      <div className="h-2 flex-1 rounded bg-slate-200 dark:bg-slate-600"></div>
                    </div>
                    <div className="flex items-center gap-3 rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
                      <div className="h-4 w-4 rounded bg-warning-500"></div>
                      <div className="h-2 flex-1 rounded bg-slate-200 dark:bg-slate-600"></div>
                    </div>
                    <div className="flex items-center gap-3 rounded-lg bg-white p-3 shadow-sm dark:bg-slate-800">
                      <div className="h-4 w-4 rounded bg-primary-500"></div>
                      <div className="h-2 flex-1 rounded bg-slate-200 dark:bg-slate-600"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gradient Blobs */}
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary-200 opacity-20 blur-3xl dark:opacity-10"></div>
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-secondary-200 opacity-20 blur-3xl dark:opacity-10"></div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 dark:bg-slate-900 sm:py-32">
        <div className="container-max">
          <div className="mb-12 text-center">
            <Badge variant="secondary" className="mx-auto mb-4">
              Powerful Features
            </Badge>
            <h2 className="mb-4 text-3xl font-bold tracking-tighter text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
              Everything You Need to Succeed
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-slate-600 dark:text-slate-300">
              Comprehensive tools and features designed to streamline your workflow and maximize productivity.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <Card key={index} className="card-hover">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 dark:bg-primary-900">
                      <Icon className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 py-16 dark:from-primary-700 dark:to-secondary-700">
        <div className="container-max">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: 'Active Users', value: '50K+' },
              { label: 'Tasks Completed', value: '2M+' },
              { label: 'Teams Using', value: '5K+' },
              { label: 'Uptime', value: '99.9%' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-bold text-white">{stat.value}</p>
                <p className="text-white/80">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 dark:bg-slate-900 sm:py-32">
        <div className="container-max">
          <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 p-12 text-center dark:border-slate-700 dark:from-slate-800 dark:to-slate-900 lg:p-20">
            <h2 className="mb-4 text-3xl font-bold tracking-tighter text-slate-900 dark:text-white sm:text-4xl">
              Ready to Transform Your Workflow?
            </h2>
            <p className="mb-8 text-lg text-slate-600 dark:text-slate-300">
              Join thousands of teams already using TaskFlow to manage their tasks and projects.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild variant="primary" size="lg">
                <Link href="/dashboard">Start Free Trial</Link>
              </Button>
              <Button variant="outline" size="lg">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50 py-12 dark:border-slate-700 dark:bg-slate-900">
        <div className="container-max">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="mb-4 font-semibold text-slate-900 dark:text-white">Product</h3>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li><Link href="#" className="transition-colors hover:text-slate-900 dark:hover:text-white">Features</Link></li>
                <li><Link href="#" className="transition-colors hover:text-slate-900 dark:hover:text-white">Pricing</Link></li>
                <li><Link href="#" className="transition-colors hover:text-slate-900 dark:hover:text-white">Security</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-semibold text-slate-900 dark:text-white">Company</h3>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li><Link href="#" className="transition-colors hover:text-slate-900 dark:hover:text-white">About</Link></li>
                <li><Link href="#" className="transition-colors hover:text-slate-900 dark:hover:text-white">Blog</Link></li>
                <li><Link href="#" className="transition-colors hover:text-slate-900 dark:hover:text-white">Careers</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-semibold text-slate-900 dark:text-white">Legal</h3>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li><Link href="#" className="transition-colors hover:text-slate-900 dark:hover:text-white">Privacy</Link></li>
                <li><Link href="#" className="transition-colors hover:text-slate-900 dark:hover:text-white">Terms</Link></li>
                <li><Link href="#" className="transition-colors hover:text-slate-900 dark:hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-semibold text-slate-900 dark:text-white">Follow Us</h3>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li><Link href="#" className="transition-colors hover:text-slate-900 dark:hover:text-white">Twitter</Link></li>
                <li><Link href="#" className="transition-colors hover:text-slate-900 dark:hover:text-white">GitHub</Link></li>
                <li><Link href="#" className="transition-colors hover:text-slate-900 dark:hover:text-white">LinkedIn</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-slate-200 pt-8 text-center text-sm text-slate-600 dark:border-slate-700 dark:text-slate-400">
            <p>&copy; 2024 TaskFlow. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

