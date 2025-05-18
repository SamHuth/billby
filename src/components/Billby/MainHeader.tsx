import dayjs from "dayjs"
import { DateFormat } from "../../utils/enums"

const MainHeader = ({transactionsToday}: {transactionsToday: number}) => {

    return(
        <div className="flex flex-col rounded-2xl p-8 py-8 mt-2 bg-black text-white border-2 border-gray-700 bg-radial-[at_25%_0%] from-slate-700 via-gray-700 to-black to-200%">
            <div className="flex gap-4 justify-between items-center">
                <div>
                    <h1 className="font-bold text-5xl sm:text-6xl md:text-7xl font-alt mt-20">{ dayjs().format(DateFormat.TODAY) }</h1>
                    <p className="text-xl mt-4 text-white bg-black px-4 py-2 rounded-2xl font-alt">{transactionsToday} Transactions Today</p>
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