import { useState } from "react"
import { RiAddLine, RiCalendarScheduleFill } from "react-icons/ri"
import ShiftCard from "../Components/work/ShiftCard"
import ShiftForm from "../Components/work/ShiftForm"

export default function Work() {

    //useState 
    const [shift, setShift] = useState([])

    function focusShiftForm() {
        const dateInput = document.getElementById("shiftDate")
        dateInput.scrollIntoView({ behavior: "smooth", block: "center" })
        dateInput.focus({ preventScroll: true })
    }


    function renderCard() {

        if (shift.length === 0) {
            return (
                <div className="mt-6 flex flex-col items-center rounded-xl border-2 border-dashed border-neutral-700 px-6 py-12 text-center">
                    <div className="grid size-14 place-items-center rounded-full bg-green-500/10 text-green-500">
                        <RiCalendarScheduleFill className="size-7" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold">No shifts yet</h3>
                    <p className="mt-1 max-w-sm text-sm text-neutral-400">
                        Log your first shift to start tracking your hours and see what you've earned.
                    </p>
                    <button
                        type="button"
                        onClick={focusShiftForm}
                        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-green-600 px-5 py-2 font-medium text-white transition-colors hover:bg-green-500"
                    >
                        <RiAddLine className="size-5" />
                        Add your first shift
                    </button>
                </div>
            )
        }

        return shift.map((shift) => (
            <ShiftCard key={shift.id} shift={shift} />
        ))
    }


    return (
        <div className="flex flex-col gap-2">
            <h2 className="font-semibold text-xl">Welcom back</h2>
            <p className="text-sm text-neutral-500 mb-5">Manage your working hours with blink of an eye.</p>
            <ShiftForm
                setShift={setShift}
            />
            {renderCard()}
        </div>
    )
}