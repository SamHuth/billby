import type { DayTransactionGroup } from "../../utils/types"

const DayDisplay = ({day}: {day: DayTransactionGroup}) => {

    const {date, transactions} = day

    return (
        <p className="border-t first-of-type:border-0 border-gray-300">
            <span className="w-[40px] inline-block font-bold">{date}</span>
            <span className="text-gray-700 text-xs">{ transactions?.length ? transactions?.length + ' items' : '-'}</span>
        </p>
    )
}


export default DayDisplay