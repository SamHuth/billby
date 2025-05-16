import type { Dayjs } from "dayjs"
import dayjs from "dayjs"

const MonthDisplay = ({month, currentMonth}: {month: Dayjs, currentMonth: boolean}) => {

    const daysRemainingInMonth: number = currentMonth ? month.daysInMonth() - dayjs().date() + 1  : month.daysInMonth()
    const daysToDisplay: string[] = []
    
    for( let daysRemaining = currentMonth ? daysRemainingInMonth : 1; daysRemaining <= month.daysInMonth(); daysRemaining++ ){
        daysToDisplay.push(
            String(daysRemaining)
        )
    }


    return (
        <div className="flex flex-col">
            <p className="px-2 py-2 text-2xl font-light bg-slate-200 rounded">{month.format('MMMM')}</p>
            <p className="px-2">{daysToDisplay.map( day => (
                <p className="border-t first-of-type:border-0 border-gray-200"><span className="w-[40px] inline-block">{day}</span><span className="text-gray-300 text-xs">No items</span></p>
            ))}</p>
        </div>
    )
}

export default MonthDisplay