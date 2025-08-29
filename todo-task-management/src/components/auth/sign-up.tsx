import { useState } from "react";
import Input from "../ui/Input";
import Icon from "../ui/Icon";
import Button from "../ui/Button";

const SignUp = ({ setStep, setUser }: any) => {
  const [formData, setFormData] = useState<{ [key: string]: string }>({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const inputItem: { name: string; placeholder: string; icon: string }[] = [
    { name: "firstName", placeholder: "Enter First Name", icon: "User" },
    { name: "lastName", placeholder: "Enter Last Name", icon: "User" },
    { name: "userName", placeholder: "Enter Username", icon: "User" },
    { name: "email", placeholder: "Enter Email", icon: "Mail" },
    { name: "password", placeholder: "Enter Password", icon: "Lock" },
    { name: "confirmPassword", placeholder: "Confirm Password", icon: "Lock" },
  ];

  return (
    <section className="flex items-center justify-center min-h-screen">
      <div className="flex max-w-5xl w-full bg-white rounded-lg shadow-lg min-h-[580px] overflow-hidden">
        <div className="hidden md:flex flex-1 items-center justify-center bg-white p-6">
          <img
            src="../../../image/user.png"
            alt="Sign up illustration"
            className="w-3/4 h-auto"
          />
        </div>

        <div className="flex flex-col flex-1 p-8 gap-4">
          <h3 className="text-2xl font-bold mb-4">Sign Up</h3>

          {inputItem.map((item, i) => (
            <div key={i} className="relative">
              <Input
                placeholder={item.placeholder}
                className="w-full py-2 pl-8 text-sm border rounded"
                value={formData[item.name]}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    [item.name]: e.target.value,
                  }))
                }
              />
              <Icon
                name={item.icon as any}
                className="absolute top-2.5 left-2 text-gray-500"
              />
            </div>
          ))}

          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" className="accent-pink-500" />I agree to all
            terms
          </label>

          <Button
            title="Register"
            className="w-full py-2 bg-pink-600 text-white rounded transition"
            onClick={() => setUser(true)}
          />

          <p className="text-sm text-gray-500 text-center">
            Already have an account?{" "}
            <Button
              title="Sign In"
              className="text-blue-500 hover:underline"
              onClick={() => setStep("sign-in")}
            />
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
