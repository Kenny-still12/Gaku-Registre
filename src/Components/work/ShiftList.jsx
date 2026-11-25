import ShiftCard from "./ShiftCard.jsx"

export default function ShiftList({shift}){
    return (
    <>
        {shift.map((shift) => (
            <ShiftCard key={shift.id} shift={shift} />
        ))}
    </>
    )
}