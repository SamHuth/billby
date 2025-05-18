import { TransactionType } from "../../utils/enums"

const TransactionAmount = ({ type, amount}: {type:TransactionType, amount: number}) => {

    if( type === TransactionType.DEBIT ){
        return <p className="p-0.5 px-2 bg-red-900 text-red-100 rounded-2xl font-bold">-${amount}</p>
    }

    if( type === TransactionType.CREDIT ){
        return <p className="p-0.5 px-2 bg-emerald-900 text-emerald-100 rounded-2xl font-bold">+${amount}</p>
    }

    if( type === TransactionType.SAVING ){
        return <p className="p-0.5 px-2 bg-sky-900 text-sky-100 rounded-2xl font-bold">+${amount}</p>
    }

    return <p>${amount}</p>

}

export default TransactionAmount