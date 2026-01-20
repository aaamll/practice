import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../ui/card";
import Logo from "./logo";

export default function AuthForm({
  title,
  description,
  fields,
  defaultValues = {},
  schema,
  onSubmit,
  submitLabel = "Submit",
  secondary = null,
}) {
  const resolver = schema ? zodResolver(schema) : undefined;
  const form = useForm({ resolver, defaultValues });

  // Track visibility per field name
  const [showPassword, setShowPassword] = useState({});

  const togglePassword = (name) => {
    setShowPassword(prev => ({
      ...prev,
      [name]: !prev[name]
    }));
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4 overflow-hidden">
      {/* Background image with Tailwind */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105 bg-[url('https://pixabay.com/images/download/x-1284616_1920.jpg')]"
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-black/80 via-blue-950/50 to-purple-900/40" />

      <Logo textColor="text-white" />

      <Card className="relative z-20 w-full max-w-md bg-white/10 backdrop-blur-xl border-white/20 shadow-2xl text-white">
        <CardHeader className="space-y-1">
          <CardTitle className="text-3xl font-bold text-center tracking-tight">{title}</CardTitle>
          {description ? (
            <CardDescription className="text-gray-300 text-lg text-center">{description}</CardDescription>
          ) : null}
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {fields.map((f) => (
                <FormField
                  key={f.name}
                  control={form.control}
                  name={f.name}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-200 text-lg">{f.label}</FormLabel>
                      <div className="relative">
                        <FormControl>
                          <Input
                            type={
                              f.type === "password"
                                ? showPassword[f.name]
                                  ? "text"
                                  : "password"
                                : f.type ?? "text"
                            }
                            placeholder={f.placeholder}
                            {...field}
                            className="bg-white/5 border-white/10 focus:ring-blue-500 placeholder:text-white/50 placeholder:font-semibold text-white pr-10"
                          />
                        </FormControl>
                        {f.type === "password" && (
                          <button
                            type="button"
                            onClick={() => togglePassword(f.name)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                          >
                            {showPassword[f.name] ? <Eye size={20} /> : <EyeOff size={20} />}
                          </button>
                        )}
                      </div>
                      <FormMessage className="text-red-400" />
                    </FormItem>
                  )}
                />
              ))}

              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-all transform active:scale-[0.98]"
              >
                {submitLabel}
              </Button>
            </form>
          </Form>

          {secondary ? (
            <div className="mt-6 text-center text-sm">
              <span className="text-gray-400">Don't have an account? </span>
              <button
                type="button"
                onClick={secondary.onClick}
                className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
              >
                {secondary.text}
              </button>
            </div>
          ) : null}
        </CardContent>
      </Card>
    </div>
  );
}