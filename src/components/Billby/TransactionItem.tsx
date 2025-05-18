import type { Transaction } from "../../utils/types"
import TransactionAmount from "./TransactionAmount"

const TransactionItem = ( {transaction}: {transaction: Transaction}) => {

    return (
        <div className="p-2 font-alt tracking-wide border rounded-2xl border-gray-700 w-full grow flex items-center justify-between bg-gray-800">
            <p>{transaction.name}</p>
            <TransactionAmount amount={transaction?.amount} type={transaction?.type}/>
        </div>
    )

}

export default TransactionItem