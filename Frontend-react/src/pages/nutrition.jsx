import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";

export default function NutritionPage() {
  return (
    <div className="p-6">
      <Card className="bg-white/5 border-white/10 text-white backdrop-blur-sm">
        <CardContent>
          <p className="text-sm text-gray-300">
            -here it shows meal/nutrition recommendation (using AI) on basis of its signup details and custom prefernce
            </p>
        </CardContent>
      </Card>
    </div>
  );
}
