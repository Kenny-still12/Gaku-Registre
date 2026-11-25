import { useState, useEffect } from "react";

export default function ShiftForm({ setShift }) {

    const initialFormData = {
        id: "",
        shiftDate: "",
        shiftStartHour: "",
        shiftEndTime: "",
        shiftBreak: "",
        status: "",
    }

    const fieldLabels = {
        shiftDate: "Shift date",
        shiftStartHour: "Start time",
        shiftEndTime: "End time",
        shiftBreak: "Break",
    }


    const [formData, setFormData] = useState(initialFormData)
    const [errors, setErrors] = useState({})

    function addShift(e) {
        e.preventDefault();

        const newErrors = getEmptyFieldErrors(formData);
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({});

        setShift(prev => [
            ...prev, 
            {
                ...formData,
                id: crypto.randomUUID(),
            },
        ])

        setFormData(initialFormData);
    }

    function handleChange(e) {
        const { name, value } = e.target;

        setFormData(prevData => ({
            ...prevData,
            [name]: value,
            status: "completed",
        }))

        if (errors[name]) {
            setErrors(prevErrors => {
                const { [name]: _, ...rest } = prevErrors;
                return rest;
            })
        }
    }



    function getEmptyFieldErrors(formData) {
        const newErrors = {};

        Object.entries(fieldLabels).forEach(([key, label]) => {
            const value = formData[key];
            if (value == null || String(value).trim() === "") {
                newErrors[key] = `${label} is required`;
            }
        })

        return newErrors;
    }

    function inputClassName(name) {
        const borderClass = errors[name]
            ? "border-red-500 focus:border-red-500 focus:ring-red-500"
            : "border-neutral-600 focus:border-green-500 focus:ring-green-500";

        return `w-full rounded-xl border-2 bg-neutral-900 text-white outline-none focus:ring-1 py-2 px-3 ${borderClass}`;
    }

    function renderError(name) {
        if (!errors[name]) return null;

        return <p className="text-sm text-red-400">{errors[name]}</p>;
    }


    return (
        <form
            className="rounded-xl border border-neutral-600 bg-neutral-800 p-5 sm:p-6"
            action=""
            onSubmit={(e) => addShift(e)}
        >

            <h2 className="text-lg font-semibold mb-5">Add Shift</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

                <div
                    className="flex flex-col gap-2"
                >
                    <label
                        htmlFor="shiftDate"
                        className="text-sm font-medium text-neutral-200"
                    >Shift Date</label>
                    <input
                        type="date"
                        name="shiftDate"
                        id="shiftDate"
                        className={inputClassName("shiftDate")}
                        value={formData.shiftDate}
                        onChange={(e) => handleChange(e)}

                    />
                    {renderError("shiftDate")}
                </div>
                <div
                    className="flex flex-col gap-2"
                >
                    <label
                        htmlFor="shiftStartHour"
                        className="text-sm font-medium text-neutral-200"
                    >Start Time</label>
                    <input
                        type="time"
                        name="shiftStartHour"
                        id="shiftStartHour"
                        className={inputClassName("shiftStartHour")}
                        value={formData.shiftStartHour}
                        onChange={(e) => handleChange(e)}
                    />
                    {renderError("shiftStartHour")}
                </div>

                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="shiftEndTime"
                        className="text-sm font-medium text-neutral-200"
                    >End Time</label>
                    <input
                        type="time"
                        name="shiftEndTime"
                        id="shiftEndTime"
                        className={inputClassName("shiftEndTime")}
                        value={formData.shiftEndTime}
                        onChange={(e) => handleChange(e)}
                    />
                    {renderError("shiftEndTime")}
                </div>

                <div className="flex flex-col gap-2">
                    <label
                        htmlFor="shiftBreak"
                        className="text-sm font-medium text-neutral-200"
                    >Break</label>
                    <input
                        type="number"
                        name="shiftBreak"
                        id="shiftBreak"
                        className={inputClassName("shiftBreak")}
                        value={formData.shiftBreak}
                        onChange={(e) => handleChange(e)}
                    />
                    {renderError("shiftBreak")}
                </div>
            </div>

            <div className="mt-6 flex justify-end" >
                <button
                    type="submit"
                    className="rounded-xl py-1.5 px-6.5 bg-green-600 font-medium text-white transition-colors hover:bg-green-500"
                >Add</button>
            </div>

        </form>
    )
}