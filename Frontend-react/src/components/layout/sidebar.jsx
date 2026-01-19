import React from "react";
import { User, Bell, LogOutIcon, Heart, Library } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom"; // Added useLocation
import Logo from "../custom_components/logo";

const navItems = [
    { id: "profile", label: "Profile", icon: User, color: "text-blue-800" },
    { id: "library", label: "Workout Library", icon: Library, color: "text-blue-800" },
    { id: "nutrition", label: "Nutrition AI", icon: Heart, color: "text-blue-800" },
    { id: "community", label: "Community feed", icon: Bell, color: "text-blue-800" },
];

export default function Sidebar() {
    const navigate = useNavigate();
    const location = useLocation(); 
    return (
        <aside className="fixed top-0 left-0 w-64 h-screen border-r border-black/10 bg-gray-50/90 backdrop-blur-xl flex flex-col p-4 z-50">
            <div className="flex items-center gap-2 px-2 mb-20 shrink-0">
               <Logo/>
            </div>

            <nav className="flex-1 flex flex-col mt-20 gap-4 overflow-y-auto pr-2 custom-scrollbar">
                {navItems.map((item) => {
                    // Check if the current URL ends with or includes the item ID
                    const isActive = location.pathname.includes(item.id.toLowerCase());

                    return (
                        <button
                            key={item.id}
                            onClick={() => navigate(`/dashboard/${item.id.toLowerCase()}`)}
                            className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl transition-all group relative ${
                                isActive 
                                ? "bg-gray-800 text-white shadow-lg" 
                                : "text-gray-700 hover:text-white hover:bg-gray-800/50"
                            }`}
                        >
                            {/* Active indicator line */}
                            {isActive && (
                                <div className="absolute left-0 w-1 h-6 bg-blue-500 rounded-r-full" />
                            )}

                            <item.icon 
                                size={25} 
                                className={`${isActive ? "text-blue-400" : item.color} opacity-80 group-hover:opacity-100`} 
                            />
                            <span className={`text-xl font-semibold ${isActive ? "translate-x-1" : ""} transition-transform`}>
                                {item.label}
                            </span>
                        </button>
                    );
                })}
            </nav>

            <div className="pt-4 border-t border-black/5 shrink-0">
                <button onClick={() => navigate("/")} className="w-full flex items-center gap-3 px-3 py-2 text-gray-500 hover:text-red-500 transition-colors">
                    <LogOutIcon />
                    <span className="text-md font-medium uppercase">Logout User</span>
                </button>
            </div>
        </aside>
    );
}