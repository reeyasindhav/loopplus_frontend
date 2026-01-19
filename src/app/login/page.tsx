"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Logo from "@/components/Logo";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Eye, EyeOff } from "lucide-react";
import { login } from "@/lib/api";

export default function LoginPage() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [apiError, setApiError] = useState("");

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            rememberMe: false
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Invalid email address")
                .required("Email is required"),
            password: Yup.string()
                .required("Password is required")
        }),
        onSubmit: async (values, { setSubmitting }) => {
            setApiError("");
            try {
                const response = await login({
                    email: values.email,
                    password: values.password
                });
                console.log("Login success:", response);
                // Redirect on success (assuming response handles auth token etc.)
                // router.push("/dashboard"); // or wherever the user should go
            } catch (error) {
                console.error("Login error:", error);
                setApiError("Invalid email or password. Please try again.");
            } finally {
                setSubmitting(false);
            }
        },
    });

    return (
        <div className="min-h-screen bg-[#f8fcfa] dark:bg-[#112117] flex flex-col items-center justify-center px-4">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <Link href="/" className="inline-block">
                        <Logo size="large" />
                    </Link>
                    <h1 className="mt-6 text-2xl font-bold text-[#0e1b13] dark:text-white">Welcome back</h1>
                    <p className="mt-2 text-[#4e976b]">Sign in to continue learning</p>
                </div>

                <div className="bg-white dark:bg-[#1a2e22] rounded-2xl shadow-lg p-8 border border-[#e7f3ec] dark:border-white/10">
                    <form onSubmit={formik.handleSubmit} className="space-y-6">

                        {apiError && (
                            <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-lg text-sm text-center">
                                {apiError}
                            </div>
                        )}

                        <div>
                            <label className="block text-sm font-medium text-[#0e1b13] dark:text-white mb-2">Email</label>
                            <input
                                type="email"
                                {...formik.getFieldProps("email")}
                                className={`w-full h-12 px-4 rounded-lg border ${formik.touched.email && formik.errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-[#e7f3ec] dark:border-white/10'} bg-[#f8fcfa] dark:bg-[#112117] text-[#0e1b13] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#19e66b]/50 focus:border-[#19e66b] transition-all`}
                                placeholder="you@university.edu"
                            />
                            {formik.touched.email && formik.errors.email ? (
                                <div className="text-red-500 text-xs mt-1">{formik.errors.email}</div>
                            ) : null}
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-[#0e1b13] dark:text-white mb-2">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    {...formik.getFieldProps("password")}
                                    className={`w-full h-12 px-4 pr-12 rounded-lg border ${formik.touched.password && formik.errors.password ? 'border-red-500 ring-1 ring-red-500' : 'border-[#e7f3ec] dark:border-white/10'} bg-[#f8fcfa] dark:bg-[#112117] text-[#0e1b13] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#19e66b]/50 focus:border-[#19e66b] transition-all`}
                                    placeholder="••••••••"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#19e66b] transition-colors focus:outline-none"
                                >
                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                </button>
                            </div>
                            {formik.touched.password && formik.errors.password ? (
                                <div className="text-red-500 text-xs mt-1">{formik.errors.password}</div>
                            ) : null}
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input
                                    type="checkbox"
                                    {...formik.getFieldProps("rememberMe")}
                                    className="w-4 h-4 rounded border-[#e7f3ec] text-[#19e66b] focus:ring-[#19e66b]"
                                />
                                <span className="text-[#4e976b]">Remember me</span>
                            </label>
                            <Link href="#" className="text-[#19e66b] hover:underline font-medium">
                                Forgot password?
                            </Link>
                        </div>

                        <button
                            type="submit"
                            disabled={formik.isSubmitting}
                            className={`w-full h-12 bg-[#19e66b] hover:bg-[#15c65c] text-[#0e1b13] font-bold rounded-lg transition-colors shadow-sm shadow-[#19e66b]/20 ${formik.isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            {formik.isSubmitting ? 'Signing In...' : 'Sign In'}
                        </button>
                    </form>

                    <div className="mt-6 text-center text-sm text-[#4e976b]">
                        Don&apos;t have an account?{" "}
                        <Link href="/signup" className="text-[#19e66b] hover:underline font-medium">
                            Sign up free
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
