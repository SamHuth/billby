import type { Dayjs } from "dayjs"

export type Transaction = {
    id: number
    name: string
    event_day: number
    event_month: number
    event_year: number
    amount: number
    is_recurring: boolean
    recurring_day: boolean
}

export type MonthTransactionGroup = {
    month: Dayjs
    transactions: Transaction[]
}

export type DayTransactionGroup = {
    date: number
    transactions: Transaction[]
}