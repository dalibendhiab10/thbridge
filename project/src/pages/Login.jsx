import React from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { toast } from "react-toastify"; // Import toast

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Display success message via toast
    toast.success("Page Created for UX purposes.", {
      position: "bottom-right", 
      autoClose: 5000, 
      hideProgressBar: false, 
      closeOnClick: true, 


    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <Input
            label="Email"
            id="email"
            name="email"
            type="email"
            required
          />
          <Input
            label="Password"
            id="password"
            name="password"
            type="password"
            required
          />
          <Button type="submit" className="w-full">
            Sign in
          </Button>
        </form>
      </div>

    </div>
  );
};

export default Login;
