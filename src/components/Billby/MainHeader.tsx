import dayjs from "dayjs"
import { DateFormat } from "../../utils/enums"

const MainHeader = ({transactionsToday}: {transactionsToday: number}) => {

    return(
        <div className="flex flex-col bg-white border-b border-gray-300 p-2 sticky top-0">
            <div className="flex gap-4 justify-between items-center">
                <div>
                    <h1 className="font-bold text-lg">{ dayjs().format(DateFormat.TODAY) }</h1>
                    <p>{transactionsToday} Transactions Today</p>
                </div>
                {/* <div className="flex gap-1">
                    <p className="w-[30px] h-[30px] bg-slate-400 rounded-full inline-flex items-center justify-center"><span className="text-white font-bold text-xl ">S</span></p>
                    <p className="w-[30px] h-[30px] bg-slate-400 rounded-full inline-flex items-center justify-center"><span className="text-white font-bold text-xl ">S</span></p>
                    <p className="w-[30px] h-[30px] bg-slate-400 rounded-full inline-flex items-center justify-center"><span className="text-white font-bold text-xl ">S</span></p>
                </div> */}
            </div>
        </div>
    )

}

export default MainHeader