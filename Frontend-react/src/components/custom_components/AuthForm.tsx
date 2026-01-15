import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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

type Field = {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
};

type Props = {
  title: string;
  description?: string;
  fields: Field[];
  defaultValues?: Record<string, any>;
  schema?: any;
  onSubmit: (values: any) => void;
  submitLabel?: string;
  secondary?: { text: string; onClick: () => void } | null;
};

export default function AuthForm({
  title,
  description,
  fields,
  defaultValues = {},
  schema,
  onSubmit,
  submitLabel = "Submit",
  secondary = null,
}: Props) {
  const resolver = schema ? zodResolver(schema) : undefined;

  const form = useForm({ resolver, defaultValues });

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4 overflow-hidden">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 hover:scale-105"
        style={{
          backgroundImage:
            "url('https://cdn.pixabay.com/photo/2025/12/12/04/17/misty-forest-10009813_1280.jpg')",
        }}
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
                <FormField key={f.name} control={form.control} name={f.name} render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-200 text-lg">{f.label}</FormLabel>
                    <FormControl>
                      <Input
                        type={f.type ?? "text"}
                        placeholder={f.placeholder}
                        {...field}
                        className="bg-white/5 border-white/10  focus:ring-blue-500 placeholder:text-white/50 placeholder:font-semibold text-white"
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )} />
              ))}

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-all transform active:scale-[0.98] cursor-pointer">
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
                className="text-blue-400 hover:text-blue-300 font-medium transition-colors cursor-pointer"
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
