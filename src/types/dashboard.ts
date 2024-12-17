export interface CardData {
  balance: number
  cardHolder: string
  validThru: string
  cardNumber: string
}

export interface TransactionData {
  id: string
  type: 'deposit' | 'withdraw'
  amount: number
  date: string
  from?: string
  to?: string
}

export interface WeeklyActivityData {
  day: string
  deposit: number
  withdraw: number
}

export interface ExpenseData {
  name: string
  value: number
  color: string
}

export interface QuickTransferUser {
  id: string
  name: string
  role: string
  avatar: string
} 