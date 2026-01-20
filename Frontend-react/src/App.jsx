import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "./dashboard/page";
import SignUp from "./pages/signup";
import ProfilePage from "./pages/profile";
import LibraryPage from "./pages/library";
import NutritionPage from "./pages/nutrition";
import CommunityPage from "./pages/community";
import LoginPage from "./pages/signIn";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />}>
          {/* <Route index element={<div className="p-6"><h2 className="text-2xl font-bold">Dashboard Overview</h2><p className="text-gray-300">Select a module from the sidebar.</p></div>} /> */}
          <Route path="profile" element={<ProfilePage />} />
          <Route path="library" element={<LibraryPage />} />
          <Route path="nutrition" element={<NutritionPage />} />
          <Route path="community" element={<CommunityPage />} />
        </Route>
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;