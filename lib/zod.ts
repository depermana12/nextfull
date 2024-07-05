import { object, string, number } from "zod";

export const signInSchema = object({
  email: string({ required_error: "Email is required" })
    .min(1, "Email is required")
    .email("Invalid email"),
  password: string({ required_error: "Password is required" })
    .min(1, "Password is required")
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
});

export const productSchema = object({
  name: string().min(3),
  price: number().min(1),
});

export const userSchema = object({
  name: string().min(3),
  email: string().email({ message: "email is required" }),
});
