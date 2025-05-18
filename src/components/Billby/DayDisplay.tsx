import type { DayTransactionGroup } from "../../utils/types"

const DayDisplay = ({day}: {day: DayTransactionGroup}) => {

    const {date, transactions} = day

    return (
        <p className="border-t first-of-type:border-0 border-gray-200">
            <span className="w-[40px] inline-block">{date}</span>
            <span className="text-gray-300 text-xs">{ transactions?.length } items</span>
        </p>
    )
}


export default DayDisplay