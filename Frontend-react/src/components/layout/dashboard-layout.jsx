import Sidebar from "./sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen w-full bg-slate-950 overflow-hidden">
      {/* Sidebar - Fixed width */}
      <Sidebar />
      
      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-8 text-white relative">
        {/* Optional: Add the same gradient/bg style here for consistency */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-900/20 to-black pointer-events-none" />
        <div className="relative z-10">
          {children}
        </div>
      </main>
    </div>
  );
}