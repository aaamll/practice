import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";

export default function CommunityPage() {
  return (
    <div className="p-6">
      <Card className="bg-white/5 border-white/10 text-white backdrop-blur-sm">
        <CardContent>
          <p className="text-sm text-gray-300">
            -This is feed where cards of every user will shown along with their posts
            -there will be a button through which user can upload images with hashtags,title etc
            -can message other users through bottom-right window like in facebook
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
