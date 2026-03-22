# Task Management System

A full-featured task management web application built with modern web technologies, enabling users to efficiently organize, track, and manage their tasks with intuitive interfaces and powerful filtering capabilities.

## Features Implemented

- **Complete CRUD Operations**: Create, read, update, and delete tasks with seamless user experience
- **Multiple View Modes**: Switch between board view (kanban), list view, and calendar view for task visualization
- **Task Prioritization**: Four priority levels (Low, Medium, High, Urgent) with color-coded visual indicators
- **Due Date Management**: Set and track task deadlines with calendar integration and reminders
- **Status Tracking**: Track task progress through TODO, IN_PROGRESS, and DONE states
- **Team Collaboration**: Manage team members and collaborate on group tasks
- **Analytics Dashboard**: Visual insights into task distribution, completion rates, and productivity metrics
- **Real-time Updates**: Instant synchronization using Socket.io for live collaboration and updates
- **Dark/Light Theme**: Toggle between dark and light modes for comfortable viewing in any environment
- **Optimistic UI Updates**: Immediate feedback on user actions for a smooth experience

## Technology Stack

- **Frontend Framework**: Next.js 16 with React 19
- **Language**: TypeScript for type-safe code
- **State Management**: Redux Toolkit for global state management
- **Styling**: Tailwind CSS with Radix UI components
- **Animations**: Framer Motion for smooth transitions
- **Form Handling**: React Hook Form with Zod validation
- **Real-time Communication**: Socket.io Client
- **Data Visualization**: Recharts for analytics charts
- **Date Handling**: date-fns for date manipulation
- **Icons**: Lucide React icon library

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── dashboard/         # Main dashboard pages
│   │   ├── tasks/         # Tasks management (today's tasks)
│   │   ├── calendar/      # Calendar view
│   │   ├── analytics/     # Analytics dashboard
│   │   ├── team/          # Team management
│   │   └── inbox/         # Inbox/Notifications
│   └── api/               # API routes
├── components/            # React components
│   ├── dashboard/         # Dashboard-specific components
│   │   ├── task-board.tsx      # Kanban board view
│   │   ├── task-card.tsx        # Individual task card
│   │   ├── task-list-view.tsx   # List view mode
│   │   ├── task-modal.tsx       # Task creation/edit modal
│   │   └── task-view.tsx        # Task detail view
│   ├── ui/                # Reusable UI components (Button, Dialog, etc.)
│   └── providers/         # Context providers (Theme)
├── lib/                    # Utility functions
│   ├── store/             # Redux store configuration
│   │   ├── index.ts       # Store setup
│   │   ├── hooks.ts       # Typed Redux hooks
│   │   └── slices/        # Redux slices (tasksSlice)
│   └── hooks/             # Custom React hooks (useSocket)
└── types/                 # TypeScript type definitions
```

## Key Features Detail

### Task Management
- Create tasks with title, description, priority, due date, and status
- Edit existing tasks through intuitive modal interfaces
- Delete tasks with confirmation
- Filter tasks by status, priority, or date range
- Search functionality across all tasks

### Dashboard
- Overview of all tasks with statistics
- Quick access to today's tasks
- Recent activity feed
- Team member overview

### Calendar View
- Monthly/weekly calendar visualization
- Tasks displayed on their due dates
- Quick task creation from calendar

### Analytics
- Task completion statistics
- Priority distribution charts
- Productivity trends over time

### UI/UX
- Fully responsive design
- Keyboard navigation support
- Toast notifications for actions
- Loading states and error handling
- Accessible components

---

Built with modern best practices and designed for scalability. The application uses local storage for data persistence in development, with easy integration to backend APIs for production deployment.
