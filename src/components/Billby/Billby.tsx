import dayjs, { Dayjs } from "dayjs"
import MainHeader from "./MainHeader"
import MonthDisplay from "./MonthDisplay"

const Billby = () => {

    const months: Dayjs[] = [dayjs()]

    for(let month = 0; month < 6; month++ ){
        months.push(dayjs().add(month + 1, 'M'))
    }


    return (
        <div className="flex flex-col gap-4 my-10 mx-auto max-w-2xl rounded-lg relative p-2">
            <MainHeader />
            { months.map( (month, index) => (
                <MonthDisplay month={month} currentMonth={!index}/>
            ))}
        </div>
    )
}

export default Billby