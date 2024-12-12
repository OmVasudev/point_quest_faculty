"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { z, ZodError } from "zod";

// Zod schema for form validation
const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email format"),
  password: z.string().min(5, "Password must be at least 5 characters long"),
  phoneNo: z
    .string()
    .regex(/^\d+$/, "Phone number must only contain digits")
    .min(10, "Phone number must be at least 10 digits"),
  branch: z.string().min(1, "Branch is required"),
  uid: z.string().min(1, "uid is required"),
});

export default function Form({ branches }) {
  const router = useRouter();
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const formValues = {
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      password: formData.get("password"),
      phoneNo: formData.get("phoneNo"),
      branch: formData.get("branch"),
      uid: formData.get("uid"),
    };

    try {
      formSchema.parse(formValues);
      const response = await fetch(`/api/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      });

      if (response.ok) {
        router.push("/login");
      }
    } catch (error) {
      if (error instanceof ZodError) {
        const validationErrors = {};
        error.errors.forEach((err) => {
          validationErrors[err.path[0]] = err.message;
        });
        setErrors(validationErrors);
      }
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-lg rounded-lg bg-white p-8 shadow-md">
        <h1 className="mb-6 text-center text-2xl font-bold text-gray-800">
          Sign Up
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex space-x-4">
            <div className="w-1/2">
              <input
                name="firstName"
                className="w-full rounded-lg border px-4 py-2"
                type="text"
                placeholder="First Name"
              />
              {errors.firstName && (
                <p className="text-red-600">{errors.firstName}</p>
              )}
            </div>
            <div className="w-1/2">
              <input
                name="lastName"
                className="w-full rounded-lg border px-4 py-2"
                type="text"
                placeholder="Last Name"
              />
              {errors.lastName && (
                <p className="text-red-600">{errors.lastName}</p>
              )}
            </div>
          </div>
          <input
            name="email"
            className="w-full rounded-lg border px-4 py-2"
            type="email"
            placeholder="Email"
          />
          {errors.email && <p className="text-red-600">{errors.email}</p>}
          <input
            name="password"
            className="w-full rounded-lg border px-4 py-2"
            type="password"
            placeholder="Password"
          />
          {errors.password && <p className="text-red-600">{errors.password}</p>}
          <input
            name="phoneNo"
            className="w-full rounded-lg border px-4 py-2"
            type="number"
            placeholder="Phone Number"
          />
          {errors.phoneNo && <p className="text-red-600">{errors.phoneNo}</p>}
          <select name="branch" className="w-full rounded-lg border px-4 py-2">
            <option value="">Select Branch</option>
            {branches.map((branch) => (
              <option key={branch.id} value={branch.name}>
                {branch.name}
              </option>
            ))}
          </select>
          {errors.branch && <p className="text-red-600">{errors.branch}</p>}
          <input
            name="uid"
            className="w-full rounded-lg border px-4 py-2"
            type="text"
            placeholder="UID"
          />
          {errors.uid && <p className="text-red-600">{errors.uid}</p>}
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-4 py-2 font-bold text-white transition hover:bg-blue-700"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
