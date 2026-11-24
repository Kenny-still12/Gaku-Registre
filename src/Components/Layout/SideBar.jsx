import Logo from "../Logo";
import {
    RiDashboardHorizontalFill,
    RiBriefcase4Fill,
    RiWallet3Fill,
    RiBookOpenFill,
    RiSettings3Fill,
} from "react-icons/ri";


import { Link } from "react-router-dom";
export default function Sidebar({ isOpen }) {

    const iconSize = 18

    const navClass = "flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-neutral-300 transition-colors duration-150 hover:bg-neutral-800 hover:text-green-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400"

    return (
        <aside className={`min-h-screen border-r border-neutral-700/60 overflow-hidden shrink-0 bg-neutral-950 py-2 flex flex-col justify-between transition-[width,padding] duration-300 ease-in-out 
        ${isOpen
                ? "w-64 px-4"
                : "w-0 px-0"}`} >
            <div className="flex flex-col gap-10">
                <Logo variant="ring" />
                <nav aria-label="Main navigation" >
                    <ul className="flex flex-col gap-2 ">
                        <Link to="/" className={navClass}>
                            <RiDashboardHorizontalFill size={iconSize} className="shrink-0" />
                            Dashboard
                        </Link>
                        <Link to="/work" className={navClass}>
                            <RiBriefcase4Fill size={iconSize} className="shrink-0" />
                            Work
                        </Link>
                        <Link to="/money" className={navClass}>
                            <RiWallet3Fill size={iconSize} className="shrink-0" />
                            Money
                        </Link>
                        <Link to="/study" className={navClass}>
                            <RiBookOpenFill size={iconSize} className="shrink-0" />
                            Study
                        </Link>
                    </ul>
                </nav>
            </div>
            <div>
                <a
                    href="#settings"
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-neutral-400
        transition-colors duration-150
        hover:bg-neutral-700 hover:text-white
        focus-visible:outline-2 focus-visible:outline-offset-2
        focus-visible:outline-sky-400"
                >
                    <RiSettings3Fill size={iconSize} className="shrink-0" />
                    Settings
                </a>
            </div>
        </aside >
    )
}