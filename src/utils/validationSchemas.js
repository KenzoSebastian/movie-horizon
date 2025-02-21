import { z } from "zod";

export const emailSchema = z
  .string()
  .email({ message: "Invalid email address" })
  .nonempty({
    message: "Email is required",
  });

export const passwordSchema = z
  .string()
  .min(8, {
    message: "Password must be at least 8 characters",
  })
  .regex(/[a-z]/, {
    message: "Password must contain at least one lowercase letter",
  })
  .regex(/[A-Z]/, {
    message: "Password must contain at least one uppercase letter",
  })
  .regex(/[0-9]/, { message: "Password must contain at least one number" })
  .nonempty({
    message: "Password is required",
  });

export const usernameSchema = z
  .string()
  .min(3, {
    message: "Username must be at least 3 characters",
  })
  .nonempty({
    message: "Username is required",
  });
