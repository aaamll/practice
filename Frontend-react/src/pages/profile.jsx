import React, { useState } from "react";
import { Camera, Edit2, Mail, Lock, Phone, User, MapPin, Globe, PenLine } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

// --- Reusable Field Component ---
const ProfileField = ({ icon: Icon, label, value }) => (
  <div className="flex items-center justify-between p-4 rounded-lg bg-white/5 border border-white/5 hover:border-white/20 transition-all group">
    <div className="flex items-center gap-4">
      <div className="p-2 rounded-full bg-white/10">
        <Icon className="w-4 h-4 text-gray-300" />
      </div>
      <div>
        <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">{label}</p>
        <p className="text-sm text-white font-medium">{value}</p>
      </div>
    </div>
    <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
      <Edit2 className="w-4 h-4 text-gray-400" />
    </Button>
  </div>
);

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pb-12">
      {/* 1. Facebook-style Header Section */}
      <div className="relative">
        {/* Cover Image */}
        <div className="h-64 md:h-96 w-full relative group">
          <img
            src="https://images.unsplash.com/photo-1707343843437-caacff5cfa74"
            alt="Cover"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all" />
          <Button variant="secondary" className="absolute bottom-4 right-4 gap-2 bg-black/60 border-white/10 backdrop-blur-md hover:bg-black/80">
            <Camera className="w-4 h-4" /> Edit Cover Photo
          </Button>
        </div>

        {/* Profile Picture & Name Overlay */}
        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="flex flex-col md:flex-row items-center md:items-end -mt-20 md:-mt-24 gap-6">
            <div className="relative group">
              <Avatar className="h-40 w-40 md:h-48 md:w-48 border-[6px] border-[#0a0a0a] shadow-2xl">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Button size="icon" className="absolute bottom-2 right-2 rounded-full bg-zinc-800 border-2 border-[#0a0a0a] hover:bg-zinc-700">
                <Camera className="w-5 h-5" />
              </Button>
            </div>
            
            <div className="flex-1 text-center md:text-left pb-4">
              <h1 className="text-4xl font-bold">Johnathan Doe</h1>
              <p className="text-gray-400 font-medium">Full Stack Developer & UI Enthusiast</p>
            </div>

            <div className="flex gap-2 pb-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Save Profile</Button>
              <Button variant="outline" className="border-white/10 bg-white/5 backdrop-blur-sm">View Public</Button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Details Section */}
      <div className="max-w-6xl mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Bio Card */}
          <Card className="bg-white/5 border-white/10 text-white backdrop-blur-sm h-fit">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-xl">Intro</CardTitle>
              <PenLine className="w-4 h-4 text-gray-400 cursor-pointer" />
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-center text-gray-300 text-sm italic">
                "Building digital experiences that blend functionality with aesthetic glassmorphism."
              </p>
              <div className="space-y-3 pt-4 border-t border-white/10 text-sm text-gray-300">
                <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Lives in San Francisco, CA</div>
                <div className="flex items-center gap-2"><Globe className="w-4 h-4" /> portfolio.dev</div>
              </div>
            </CardContent>
          </Card>

          {/* Detailed Fields Grid */}
          <div className="lg:col-span-2">
            <Card className="bg-white/5 border-white/10 text-white backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ProfileField icon={User} label="Full Name" value="Johnathan Doe" />
                <ProfileField icon={Mail} label="Email Address" value="john.doe@example.com" />
                <ProfileField icon={Phone} label="Contact Number" value="+1 (555) 000-1234" />
                <ProfileField icon={Lock} label="Password" value="••••••••••••" />
                <div className="md:col-span-2">
                  <ProfileField icon={MapPin} label="Office Location" value="123 Tech Lane, Silicon Valley, CA" />
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
}