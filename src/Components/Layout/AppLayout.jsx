import Sidebar from "./SideBar";
import Header from "./Header"
import { useState } from "react";
import MainContent from "./MainContent";
export default function AppLayout({ children }) {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev)
    }

    return (
        <div className="flex min-h-screen">
            <Sidebar
                isOpen={isSidebarOpen}
            />
            <div className="flex min-w-0 flex-1 flex-col">
                <Header
                    onMenuClick={toggleSidebar}
                />
                <MainContent>
                    {children}
                </MainContent>
            </div>
        </div>
    )
}