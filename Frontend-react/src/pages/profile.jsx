import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";

export default function ProfilePage() {
  return (
    <div className="p-6">
      <Card className="bg-white/5 border-white/10 text-white backdrop-blur-sm">
        <CardContent>
          <p className="text-sm text-gray-300">This page has features like : upload profile, upload cover img, diplay user's detail comes from signUp, edit details, preview of feed card .</p>
        </CardContent>
      </Card>
    </div>
  );
}
