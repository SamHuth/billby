import type { DayTransactionGroup } from "../../utils/types"
import TransactionItem from "./TransactionItem"

const DayDisplay = ({day}: {day: DayTransactionGroup}) => {

    const {date, transactions} = day

    return (
        <div className="p-4 border-t-2 border-gray-700 flex flex-col gap-1">
            <span className="w-[40px] inline-block font-bold">{date}</span>
            <div className="inline-flex flex-col grow gap-2">
                {transactions?.map( transaction => <TransactionItem transaction={transaction}/> )}
            </div>
        </div>
    )
}


export default DayDisplay