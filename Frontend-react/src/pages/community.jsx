import React from "react";
import { Mail, MapPin, MessageSquare } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

// 1. Mock Data - Easily replaceable with an API response
const COMMUNITY_USERS = [
  {
    id: 1,
    name: "Alex Thompson",
    email: "alex.t@example.com",
    location: "New York, USA",
    avatar: "https://github.com/shadcn.png",
    initials: "AT",
  },
    {
    id: 1,
    name: "Alex Thompson",
    email: "alex.t@example.com",
    location: "New York, USA",
    avatar: "https://github.com/shadcn.png",
    initials: "AT",
  },
    {
    id: 1,
    name: "Alex Thompson",
    email: "alex.t@example.com",
    location: "New York, USA",
    avatar: "https://github.com/shadcn.png",
    initials: "AT",
  },
];

// 2. Reusable User Card Component
const UserCard = ({ user }) => {
  return (
    <Card className="relative pt-12 mx-auto w-1/2 bg-white/5 border-white/10 text-white backdrop-blur-sm overflow-visible transition-all hover:border-white/20">
      {/* Centered Profile Image - Absolute positioning for the "top-center" look */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2">
        <Avatar className="h-20 w-20 border-4 border-[#0a0a0a] shadow-xl">
          <AvatarImage src={user.avatar} alt={user.name} />
          <AvatarFallback className="bg-zinc-800 text-white">{user.initials}</AvatarFallback>
        </Avatar>
      </div>

      <CardContent className="text-center space-y-2 pb-2">
        <h3 className="text-xl font-bold tracking-tight">{user.name}</h3>
        
        <div className="flex flex-col items-center gap-1 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <Mail className="w-3.5 h-3.5" />
            <span>{user.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5" />
            <span>{user.location}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="pt-4 pb-6">
        <Button 
          className="w-full bg-blue-900 hover:bg-blue-800 text-white gap-2 transition-colors"
        >
          <MessageSquare className="w-4 h-4" />
          Message
        </Button>
      </CardFooter>
    </Card>
  );
};

// 3. Main Community Page Component
export default function CommunityPage() {
  return (
    <div className="p-6 md:p-12 mx-auto">
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-white mb-2">Community Feed</h1>
        <p className="text-gray-400">Connect with other members in the community.</p>
      </div>

      {/* Grid for Cards - Responsive: 1 column on mobile, 2 on tablet, 3 on desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-10">
        {COMMUNITY_USERS.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}