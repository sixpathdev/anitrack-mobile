import { z } from "zod";

export const forgotPasswordSchema = z.object({
  email: z.preprocess(
    (value) => (typeof value === "string" ? value.trim().toLowerCase() : value),
    z.string().superRefine((value, ctx) => {
      if (value === "") return;

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Please enter a valid email address",
        });
      }
    }),
  ),
});

export const loginSchema = z.object({
  email: z.preprocess(
    (value) => (typeof value === "string" ? value.trim().toLowerCase() : value),
    z.string().superRefine((value, ctx) => {
      if (value === "") return;

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Please enter a valid email address",
        });
      }
    }),
  ),
  password: z.string().superRefine((value, ctx) => {
    const trimmedValue = value.trim();

    if (trimmedValue && trimmedValue.length < 4) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Password must be at least 4 characters",
      });
    }
  }),
});

export const signupSchema = z.object({
  fullname: z.string().superRefine((value, ctx) => {
    const trimmedValue = value.trim();

    if (trimmedValue && trimmedValue.length < 4) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "FullName must be at least 4 characters",
      });
    }
  }),
  username: z.string().superRefine((value, ctx) => {
    const trimmedValue = value.trim();

    if (!trimmedValue) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Username is required",
      });
    }

    if (trimmedValue.length < 4) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Username must be at least 4 characters",
      });
    }
  }),
  email: z.preprocess(
    (value) => (typeof value === "string" ? value.trim().toLowerCase() : value),
    z.string().superRefine((value, ctx) => {
      if (value === "") return;

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Please enter a valid email address",
        });
      }
    }),
  ),
  password: z.string().superRefine((value, ctx) => {
    const trimmedValue = value.trim();

    if (trimmedValue && trimmedValue.length < 4) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Password must be at least 4 characters",
      });
    }
  }),
});

export const verifyCodeSchema = z.object({
  code: z.string().superRefine((value, ctx) => {
    const trimmedValue = value.trim();

    if (trimmedValue && trimmedValue.length < 5) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "OTP must be at least 5 characters",
      });
    }
  }),
});

export const resetPasswordSchema = z
  .object({
    // password: z
    //   .string()
    //   .trim()
    //   .min(8, "Password must be at least 8 characters.")
    //   .regex(/[A-Z]/, "Password must contain an uppercase letter.")
    //   .regex(/[a-z]/, "Password must contain a lowercase letter.")
    //   .regex(/[0-9]/, "Password must contain a number.")
    //   .regex(/[^A-Za-z0-9]/, "Password must contain a special character."),
    password: z.string().superRefine((value, ctx) => {
      const trimmedValue = value.trim();

      if (!trimmedValue) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Password is required.",
        });
        return;
      }

      if (trimmedValue.length < 4) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Password must be at least 4 characters.",
        });
      }
    }),

    confirm_password: z.string().superRefine((value, ctx) => {
      if (!value.trim()) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Please confirm your password.",
        });
      }
    }),
  })
  .superRefine(({ password, confirm_password }, ctx) => {
    if (!confirm_password.trim()) {
      return;
    }

  if (password !== confirm_password) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["confirm_password"],
        message: "Passwords do not match.",
      });
    }
  });


export type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;
export type LoginFormData = z.infer<typeof loginSchema>;
export type SignupFormData = z.infer<typeof signupSchema>;
export type VerifyCodeFormData = z.infer<typeof verifyCodeSchema>;
export type ResetPasswordFormData = z.infer<typeof resetPasswordSchema>;
