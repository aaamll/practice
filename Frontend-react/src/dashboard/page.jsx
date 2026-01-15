import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/layout/sidebar";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex">
      <Sidebar />
      <main className="flex-1 p-6 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}