import dayjs from "dayjs"
import MainHeader from "./MainHeader"
import MonthDisplay from "./MonthDisplay"
import { useEffect, useState } from "react"
import type { SupabaseClient } from "@supabase/supabase-js"
import type { Transaction, MonthTransactionGroup } from "../../utils/types"
import { Limits, TableName } from "../../utils/enums"

const Billby = ({supabase}: {supabase: SupabaseClient}) => {

    const monthsWithTransactions: MonthTransactionGroup[] = []
    const [appData, setAppData] = useState<Transaction[]>([])

    // For the next X months ahead
    for(let month = 0; month < Limits.months; month++ ){

        const currentLoopMonth = dayjs().add(month, 'M')
        const transactionsThisMonth: Transaction[] = []

        // Check all transactions for ones happening this month
        for( let eventIndex = 0; eventIndex < appData?.length; eventIndex++ ){
            const currentEvent = appData[eventIndex]
            if(currentEvent.event_month === (currentLoopMonth.month() + 1)){
                transactionsThisMonth.push(currentEvent)
            }
        }

        // Push all to main object
        monthsWithTransactions.push({
            month: currentLoopMonth,
            transactions: transactionsThisMonth
        })
    }

    useEffect( () => {
        fetchAppData();
    }, [])

    const fetchAppData = async () => {
        const { data } = await supabase.from(TableName.TRANSACTION).select();
        setAppData(data as Transaction[]);
    }

    const transactionsToday = monthsWithTransactions[0]?.transactions?.filter( (event) => event?.event_day === dayjs().date() )?.length ?? 0

    return (
        <div className="flex flex-col gap-4 mb-10 mx-auto max-w-2xl rounded-lg relative px-2">
            <MainHeader transactionsToday={transactionsToday} />
            { monthsWithTransactions.map( (monthsWithEvent, index) => (
                <MonthDisplay key={index} month={monthsWithEvent.month} transactions={monthsWithEvent.transactions} currentMonth={!index}/>
            ))}
        </div>
    )
}

export default Billby