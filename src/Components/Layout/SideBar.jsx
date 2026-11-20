import Logo from "../Logo";
import { Link } from "react-router-dom";
export default function Sidebar({ isOpen }) {


    // <ul className="flex flex-col gap-2 ">
    //     <li ><a
    //         href="Dashboard.jsx"
    //         className={navClass}
    //     >Dashboard</a></li>
    //     <li ><a
    //         href="Work.jsx"
    //         className={navClass}
    //     >work</a></li>
    //     <li ><a
    //         href=""
    //         className={navClass}
    //     >Money</a></li>
    //     <li ><a
    //         href=""
    //         className={navClass}
    //     >Study</a></li>
    // </ul>

    const navClass = "block rounded-lg px-3 py-2 text-sm font-medium text-neutral-300 transition-colors duration-150 hover:bg-neutral-700 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"

    return (
        <aside className={`min-h-screen overflow-hidden shrink-0 bg-neutral-800 py-2 flex flex-col justify-between transition-[width,padding] duration-300 ease-in-out 
        ${isOpen
                ? "w-64 px-4"
                : "w-0 px-0"}`} >
            <div className="flex flex-col gap-10">
                <Logo variant="ring" />
                <nav aria-label="Main navigation" >
                    <ul className="flex flex-col gap-2 ">
                        <Link to="/" className={navClass}>Dashboard</Link>
                        <Link to="/work" className={navClass}>work</Link>
                        <Link to="/money" className={navClass}>money</Link>
                        <Link to="/study" className={navClass}>study</Link>
                    </ul>
                </nav>
            </div>
            <div>
                <a
                    href="#settings"
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-neutral-400
        transition-colors duration-150
        hover:bg-neutral-700 hover:text-white
        focus-visible:outline-2 focus-visible:outline-offset-2
        focus-visible:outline-sky-400"
                >
                    Settings
                </a>
            </div>
        </aside >
    )
}