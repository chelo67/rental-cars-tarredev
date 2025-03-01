import { LogoDashBoard } from "../LogoDashboard";
import { SidebarRoutes } from "../SidebarRoutes";

export function Sidebar() {
  return (
    <div className="h-screen">
        <div className="flex flex-col h-full border-r">
            <LogoDashBoard />
            <SidebarRoutes />
        </div>

    </div>
  )
}
