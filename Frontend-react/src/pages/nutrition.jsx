import React, { useState } from "react";
import { Sparkles, Utensils, Flame, Scale, ChevronRight, RefreshCw } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

// --- Sub-component: AI Recommendation Card ---
const MealCard = ({ type, meal, calories, macros }) => (
  <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all group">
    <div className="flex justify-between items-start mb-2">
      <Badge variant="outline" className="text-blue-400 border-blue-400/30 bg-blue-400/10">
        {type}
      </Badge>
      <span className="text-xs text-gray-400 flex items-center gap-1">
        <Flame className="w-3 h-3 text-orange-500" /> {calories} kcal
      </span>
    </div>
    <h4 className="text-white font-semibold mb-3 group-hover:text-blue-400 transition-colors">{meal}</h4>
    <div className="grid grid-cols-3 gap-2 text-[10px] uppercase tracking-widest text-gray-500">
      <div className="text-center p-1 rounded bg-black/20">P: {macros.p}g</div>
      <div className="text-center p-1 rounded bg-black/20">C: {macros.c}g</div>
      <div className="text-center p-1 rounded bg-black/20">F: {macros.f}g</div>
    </div>
  </div>
);

export default function NutritionPage() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate AI loading time
    setTimeout(() => {
      setIsGenerating(false);
      setShowResult(true);
    }, 1500);
  };

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-8">
      {/* Header Section */}
      <div className="flex flex-col gap-2 text-center items-center justify-center">
        <h1 className="text-3xl font-bold text-white flex items-center gap-3">
          <Sparkles className="text-blue-500" /> Nutrition AI
        </h1>
        <p className="text-gray-400">Get personalized meal plans based on your fitness goals and biometrics.</p>
      </div>

      <div className="block gap-8">
        {/* Left: Input Preferences */}
        <div className="lg:col-span-1 space-y-6">
          <Card className="bg-white/5 border-white/10 text-white backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-lg">Your Details</CardTitle>
              <CardDescription className="text-gray-400 text-xs">AI uses these to calculate macros.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-400">Current Weight (kg)</label>
                <Input type="number" placeholder="75" className="bg-white/5 border-white/10" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-400">Primary Goal</label>
                <select className="w-full h-10 px-3 py-2 bg-zinc-900 border border-white/10 rounded-md text-sm outline-none">
                  <option>Muscle Gain</option>
                  <option>Fat Loss</option>
                  <option>Maintenance</option>
                </select>
              </div>
              <Button 
                onClick={handleGenerate} 
                disabled={isGenerating}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold mt-4"
              >
                {isGenerating ? <RefreshCw className="w-4 h-4 animate-spin mr-2" /> : <Sparkles className="w-4 h-4 mr-2" />}
                {isGenerating ? "Generating..." : "Generate Plan"}
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Right: Results Section */}
        <div className="lg:col-span-2">
          {!showResult ? (
            <div className="h-full min-h-[400px] border-2 border-dashed border-white/5 rounded-2xl flex flex-col items-center justify-center text-center p-8">
              <Utensils className="w-12 h-12 text-white/10 mb-4" />
              <p className="text-gray-500">Enter your details and click generate to see your AI-tailored nutrition plan.</p>
            </div>
          ) : (
            <Card className="bg-white/5 border-white/10 text-white backdrop-blur-sm animate-in fade-in slide-in-from-bottom-4 duration-500">
              <CardHeader className="border-b border-white/5">
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Daily Recommendation</CardTitle>
                    <CardDescription className="text-blue-400">High Protein • Lean Bulk Phase</CardDescription>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold">2,850</p>
                    <p className="text-[10px] text-gray-500 uppercase tracking-tighter">Daily Target Calories</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <MealCard 
                  type="Breakfast" 
                  meal="Oatmeal with Protein Powder & Blueberries" 
                  calories="450" 
                  macros={{ p: 35, c: 50, f: 12 }} 
                />
                <MealCard 
                  type="Lunch" 
                  meal="Grilled Chicken Breast with Quinoa & Broccoli" 
                  calories="650" 
                  macros={{ p: 55, c: 60, f: 10 }} 
                />
                <MealCard 
                  type="Dinner" 
                  meal="Baked Salmon with Sweet Potato" 
                  calories="720" 
                  macros={{ p: 45, c: 45, f: 28 }} 
                />
                <Button variant="ghost" className="w-full text-gray-400 hover:text-white border border-white/5 mt-4">
                  View Full Week Schedule <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}