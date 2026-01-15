import React from "react";
import { User, BarChart3, Bell, LogOutIcon, Heart, Library } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Logo from "../custom_components/logo";

// Configuration for our Sidebar Items
const navItems = [
    { id: "profile", label: "Profile", icon: User, color: "text-blue-800" },
    { id: "library", label: "Workout Library", icon: Library, color: "text-blue-800" },
    { id: "Nutrition", label: "Nutrition AI", icon: Heart, color: "text-blue-800" },
    { id: "community", label: "Community feed", icon: Bell, color: "text-blue-800" },
];

export default function Sidebar() {
    const navigate = useNavigate();

    return (
        <aside className="w-64 h-screen border-r border-black/10 bg-gray-50/90 backdrop-blur-xl flex flex-col p-4 z-50">
            {/* Logo Section */}
            <div className="flex items-center gap-2 px-2 mb-20 shrink-0">
               <Logo/>
            </div>

            {/* Navigation Section - flex-1 makes this take up all available vertical space */}
            <nav className="flex-1 flex flex-col mt-20 gap-9 overflow-y-auto pr-2 custom-scrollbar">
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => navigate(`/dashboard/${String(item.id).toLowerCase()}`)}
                        className="w-full flex items-center gap-3 px-3 py-3 rounded-xl text-gray-700 hover:text-white hover:bg-gray-800 transition-all group"
                    >
                        <item.icon size={25} className={`${item.color} opacity-80 group-hover:opacity-100`} />
                        <span className="text-xl font-semibold">{item.label}</span>
                    </button>
                ))}
            </nav>

            {/* Optional: Bottom Profile/Logout Section */}
            <div className="pt-4 border-t border-black/5 shrink-0">
                <button onClick={() => navigate("/")} className="w-full flex items-center gap-3 px-3 py-2 text-gray-500 hover:text-red-500 transition-colors">
                    <LogOutIcon />
                    <span className="text-md font-medium uppercase">Logout User</span>
                </button>
            </div>
        </aside>
    );
}