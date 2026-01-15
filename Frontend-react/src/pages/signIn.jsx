import React from "react";
import AuthForm from "../components/custom_components/AuthForm";
import * as z from "zod";
import { useNavigate } from "react-router-dom";

// needs to be recheck
const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z.string().min(8, { message: "Password must be at least 8 characters." }),
});

function LoginPage() {
  const navigate = useNavigate();

  function onSubmit(values) {
    console.log("Authenticated Data:", values);
    navigate("/dashboard");
  }

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center p-4 overflow-hidden">
      <AuthForm
        title="Login"
        description="Enter your credentials to access your dashboard"
        fields={[
          { name: "email", label: "Email", placeholder: "name@example.com" },
          { name: "password", label: "Password", type: "password", placeholder: "••••••••" },
        ]}
        schema={formSchema}
        onSubmit={onSubmit}
        submitLabel="Sign In"
        secondary={{ text: "Create one for free", onClick: () => navigate("/signup") }}
      />
    </div>
  );
}

export default LoginPage;