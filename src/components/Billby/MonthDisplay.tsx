import type { Dayjs } from "dayjs"
import DayDisplay from "./DayDisplay"
import type { DayTransactionGroup, Transaction } from "../../utils/types"

const MonthDisplay = ({month, transactions, currentMonth}: {month: Dayjs, transactions: Transaction[] ,currentMonth: boolean}) => {
    
    const daysRemainingInMonth: number = currentMonth ? month.daysInMonth() - month.date() : month.daysInMonth()
    const daysToDisplay: DayTransactionGroup[] = []
    
    for( let daysRemaining = currentMonth ? month.daysInMonth() - daysRemainingInMonth : 1; daysRemaining <= month.daysInMonth(); daysRemaining++ ){

        const matchingTransactions: Transaction[] = transactions.filter( transaction => transaction.event_day === daysRemaining )

        daysToDisplay.push(
            {
                date: daysRemaining,
                transactions: matchingTransactions
            }
        )
    }

    console.log(daysToDisplay)


    return (
        <div className="flex flex-col px-2">
            <p className="px-2 py-2 text-2xl font-light bg-slate-200 rounded">{month.format('MMMM')}</p>
            <div className="px-2">
                {daysToDisplay.map( day => {
                    return (
                        <DayDisplay key={day.date} day={day} />
                    )
                })}
            </div>
        </div>
    )
}

export default MonthDisplay