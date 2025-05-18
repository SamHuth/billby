import { DateFormat } from "../../utils/enums"
import type { DayTransactionGroup } from "../../utils/types"
import TransactionItem from "./TransactionItem"

const DayDisplay = ({day}: {day: DayTransactionGroup}) => {

    const {transactions, dateObject} = day

    return (
        <div className="p-4 border-t-2 border-gray-700 flex flex-col gap-1">
            <span className="inline-block font-alt text-gray-300 text-xs">{dateObject.format(DateFormat.DAY)}</span>
            {transactions?.length > 0 && (
                <div className="inline-flex flex-col grow gap-2">
                    {transactions?.map( transaction => <TransactionItem transaction={transaction}/> )}
                </div>
            )}
        </div>
    )
}


export default DayDisplay