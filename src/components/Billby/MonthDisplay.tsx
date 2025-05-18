import type { Dayjs } from "dayjs"
import DayDisplay from "./DayDisplay"
import type { DayTransactionGroup, Transaction } from "../../utils/types"
import dayjs from "dayjs"

const MonthDisplay = ({month, transactions, currentMonth}: {month: Dayjs, transactions: Transaction[] ,currentMonth: boolean}) => {
    
    const daysRemainingInMonth: number = currentMonth ? month.daysInMonth() - month.date() : month.daysInMonth()
    const daysToDisplay: DayTransactionGroup[] = []
    
    for( let daysRemaining = currentMonth ? month.daysInMonth() - daysRemainingInMonth : 1; daysRemaining <= month.daysInMonth(); daysRemaining++ ){

        const matchingTransactions: Transaction[] = transactions.filter( transaction => transaction.event_day === daysRemaining )

        daysToDisplay.push(
            {
                dateObject: dayjs(`${month.year()}/${month.month()}/${daysRemaining}`),
                transactions: matchingTransactions
            }
        )
    }

    return (
        <div className="flex flex-col border-2 border-gray-700 rounded-2xl">
            <p className="p-4 text-3xl bg-black text-white rounded-t-2xl font-bold font-alt">{month.format('MMMM')}</p>
            <div className="flex flex-col gap-1 rounded-b-2xl pb-1 bg-black text-white">
                {daysToDisplay.map( day => {
                    return (
                        <DayDisplay key={day.dateObject.toISOString()} day={day}/>
                    )
                })}
            </div>
        </div>
    )
}

export default MonthDisplay