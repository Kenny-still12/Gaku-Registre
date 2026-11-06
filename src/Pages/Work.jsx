import { useState } from "react"
import ShiftCard from "../Components/work/ShiftCard"
import ShiftForm from "../Components/work/ShiftForm"

export default function Work() {

    //useState 
    const [shift, setShift] = useState([])


    function renderCard() {

        if (shift.length === 0) {
            return (
                <div className="flex justify-center items-center mt-15">
                    <h1 className="text-3xl italic font-light">Let's plan our work...</h1>
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