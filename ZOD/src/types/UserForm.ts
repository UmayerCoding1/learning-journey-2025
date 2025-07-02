import z from "zod";


export const userFormSchema = z.object({
  name: z.string().min(3, "Name is requried"),
  email: z.string().email("Invalid email"),
  age: z.number().min(18, "Age must be at last 18"),
  password: z
    .string()
    .min(8,'Password must be at least 8 characters long')
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[0-9]/, "Password must contain at least one number"),
    confirmPassword: z.string(),
    phone: z.string().min(10,'Phone number must be at least 10 characters long'),
    gender: z.enum(['male', 'female', 'other'],{
        errorMap: () => {
            return {
                message: "Please enter a valid gender",
            }}
    })
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});


export type UserForm = z.infer<typeof userFormSchema>;

export type UserFormErrors = Partial<Record<keyof UserForm, string[]>>;