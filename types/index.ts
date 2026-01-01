import { Event, Note, EventPriority, EventStatus, NoteType } from '@prisma/client'

// ============================================
// TIPOS DE EVENTOS
// ============================================

export type EventWithUser = Event & {
  user: {
    id: string
    name: string | null
    email: string
  }
}

export type CreateEventInput = {
  title: string
  description?: string
  startDate: Date
  endDate?: Date
  allDay?: boolean
  location?: string
  priority?: EventPriority
  status?: EventStatus
  color?: string
  isRecurring?: boolean
  recurrence?: string
}

export type UpdateEventInput = Partial<CreateEventInput>

// ============================================
// TIPOS DE NOTAS
// ============================================

export type NoteWithUser = Note & {
  user: {
    id: string
    name: string | null
    email: string
  }
}

export type CreateNoteInput = {
  title?: string
  content: string
  type?: NoteType
  color?: string
  isPinned?: boolean
  date?: Date
  tags?: string[]
}

export type UpdateNoteInput = Partial<CreateNoteInput>

// ============================================
// TIPOS DE CALENDÁRIO
// ============================================

export type CalendarView = 'day' | 'week' | 'month' | 'year'

export type CalendarEvent = {
  id: string
  title: string
  start: Date
  end?: Date
  allDay: boolean
  color?: string
  priority: EventPriority
  status: EventStatus
}

export type DayWithItems = {
  date: Date
  events: Event[]
  notes: Note[]
}

// ============================================
// TIPOS DE API RESPONSE
// ============================================

export type ApiResponse<T> = {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export type PaginatedResponse<T> = ApiResponse<{
  items: T[]
  total: number
  page: number
  pageSize: number
  totalPages: number
}>

// ============================================
// TIPOS DE FORMULÁRIOS
// ============================================

export type LoginFormData = {
  email: string
  password: string
}

export type RegisterFormData = {
  name: string
  email: string
  password: string
  confirmPassword: string
}
