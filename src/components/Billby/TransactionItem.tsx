import { TransactionType } from "../../utils/enums"
import type { Transaction } from "../../utils/types"
import TransactionAmount from "./TransactionAmount"

const TransactionItem = ( {transaction}: {transaction: Transaction}) => {




    return (
        <div className={`p-2 font-alt tracking-wide rounded-lg w-full grow flex items-center justify-between ${ transaction?.type === TransactionType.DEBIT ? "bg-red-950  " : transaction?.type == TransactionType.CREDIT ? "bg-emerald-950  " : "bg-sky-950 "}`}>
            <p>{transaction.name}</p>
            <TransactionAmount amount={transaction?.amount} type={transaction?.type}/>
        </div>
    )

}

export default TransactionItem