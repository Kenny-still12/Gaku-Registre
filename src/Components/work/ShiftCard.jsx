export default function ShiftCard({ shift }) {

    const { id, shiftDate, shiftStartHour, shiftEndTime, shiftBreak, Status } = shift

    const monthConvert = {
        1: "JAN",
        2: "FEB",
        3: "MAR",
        4: "APR",
        5: "MAY",
        6: "JUN",
        7: "JLY",
        8: "AUG",
        9: "SEP",
        10: "OCT",
        11: "NOV",
        12: "DEC",
    }

    console.log(shiftDate)
    const [year, monthNum, day] = shiftDate.split("-")


    //monthConvert[Number(monthNum)]
    //Number(day)
    return (
        // main container
        <section className="bg-neutral-800 rounded-xl border border-neutral-600 p-5 sm:p-6">
            {/* first container <top> */}
            <div className="flex gap-2 justify-between items-center">

                <div className="flex gap-3 sm:gap-5 items-center ">
                    {/* date container */}
                    <div className="bg-neutral-900 border border-neutral-600 rounded-xl px-5 py-2.5 flex flex-col items-center">
                        <h2 className="font-medium text-sm text-neutral-500">{monthConvert[Number(monthNum)]}</h2>
                        <p className="text-2xl font-semibold">{Number(day)}</p>
                    </div>
                    {/* shift info container */}
                    <div className="min-w-0">
                        <h2 className="font-medium text-2xl">Friday Shift</h2>
                        <p className="text-sm text-neutral-500">Airline Laundry</p>
                    </div>
                </div>
                {/* status tag <complete> <reserve> */}
                <div className="self-center rounded-lg bg-green-700 px-3 py-1 shrink-0">
                    <p className="whitespace-nowrap text-green-300 font-semibold text-sm">{Status}</p>
                </div>
            </div>

            <div className="border border-neutral-600 my-5"></div>
            {/* middle container */}

            <div className="w-full flex flex-col gap-4 items-center">
                {/* start and end time container*/}
                <div className="w-full flex gap-2 rounded-xl p-5 min-w-0">
                    <div className="flex flex-1 flex-col items-start rounded-lg bg-neutral-600 px-2 py-2.5">
                        <h2 className="text-sm text-neutral-500">START TIME</h2>
                        <p>{shiftStartHour} AM</p>
                    </div>
                    <div className="flex flex-1 flex-col items-start rounded-lg bg-neutral-600 px-2 py-2.5" >
                        <h2 className="text-sm text-neutral-500">END TIME</h2>
                        <p>{shiftEndTime} PM</p>
                    </div>
                </div>

                <div className=" w-full flex items-center justify-between gap-5">
                    <div className="self-center">
                        <p className="text-neutral-500 text-sm">Break : {shiftBreak} min</p>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-green-300 font-semibold text-xl">7.5 hrs</h2>
                        <p className="text-neutral-500 text-sm">Total working time</p>
                    </div>
                </div>
            </div>
            <div className="border border-neutral-600 my-5"></div>
            {/* bottom container */}
            <div className="w-full flex justify-end">
                <div className="flex gap-2">
                    <button className="border border-neutral-500 px-3 py-1.5 rounded-xl text-sm transition-colors hover:border-neutral-700">Edit</button>
                    <button className="border border-red-800 px-3 py-1.5 rounded-xl text-red-500 text-sm transition-colors hover:border-red-900 hover:text-red-700">Delete</button>
                </div>
            </div>
        </section>
    )
}