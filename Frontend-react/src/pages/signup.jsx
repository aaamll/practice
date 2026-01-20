import React from "react";
import { useNavigate } from "react-router-dom";
import AuthForm from "../components/custom_components/AuthForm";

function SignUp() {
    const navigate = useNavigate();

    function onSubmit(values) {
        console.log("Authenticated Data:", values);
        navigate("/dashboard");
    }

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">

            <AuthForm
                title="Sign Up"
                description="Create your account to access the dashboard"
                fields={[
                    { name: "name", label: "Full Name", placeholder: "Enter your Full Name" },
                    { name: "email", label: "Email", type:"email", placeholder: "abc@gmail.com" },
                    { name: "password", label: "Password", type: "password", placeholder: "Create a strong password" },
                    { name: "phone", label: "Phone Number",type:"number", placeholder: "Enter your Phone Number" },
                    { name: "bio", label: "Bio", placeholder: "Enter your Bio" },
                    { name: "location", label: "location", placeholder: "Enter your location" },
                ]}
                defaultValues={{ name: "", email: "", password: "", phone: "", bio: "" }}
                onSubmit={onSubmit}
                submitLabel="Create account"
            />
        </div>
    );
}

export default SignUp;