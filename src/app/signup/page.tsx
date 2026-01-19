"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import { useFormik } from "formik";
import * as Yup from "yup";
import { signup } from "@/lib/api";

export default function SignupPage() {
    const [apiError, setApiError] = useState("");

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            major: "",
            university: "",
            minor: "",
            year: "",
            interests: "",
            course1_name: "",
            course1_professor: "",
            course2_name: "",
            course2_professor: "",
            password: ""
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Full Name is required"),
            email: Yup.string().email("Invalid email address").required("Email is required"),
            major: Yup.string().required("Major is required"),
            university: Yup.string().required("University is required"),
            year: Yup.string().required("Year is required"),
            password: Yup.string().min(8, "Password must be at least 8 characters").required("Password is required"),
        }),
        onSubmit: async (values, { setSubmitting }) => {
            setApiError("");
            const payload = {
                ...values,
                university_name: values.university, // Map to API expected field
            };
            // Remove the original university field from payload to match exact spec if needed, 
            // but usually extra fields are ignored. The user spec showed "university_name".
            // Let's being precise and construct the exact object to be safe.
            const apiPayload = {
                name: values.name,
                email: values.email,
                university_name: values.university,
                major: values.major,
                minor: values.minor,
                year: values.year,
                interests: values.interests,
                course1_name: values.course1_name,
                course1_professor: values.course1_professor,
                course2_name: values.course2_name,
                course2_professor: values.course2_professor,
                password: values.password
            };

            try {
                const response = await signup(apiPayload);
                console.log("Signup success:", response);
                // Redirect handling would go here
            } catch (error) {
                console.error("Signup error:", error);
                setApiError("Failed to create account. Please try again.");
            } finally {
                setSubmitting(false);
            }
        },
    });

    return (
        <div className="min-h-screen bg-[#f8fcfa] dark:bg-[#112117] flex flex-col items-center justify-center px-4 py-12">
            <div className="w-full max-w-2xl">
                <div className="text-center mb-8">
                    <Link href="/" className="inline-block">
                        <Logo size="large" />
                    </Link>
                    <h1 className="mt-6 text-3xl font-bold text-[#0e1b13] dark:text-white">Create your account</h1>
                    <p className="mt-2 text-[#4e976b]">Join LoopPlus to enhance your academic journey</p>
                </div>

                <div className="bg-white dark:bg-[#1a2e22] rounded-2xl shadow-xl p-8 border border-[#e7f3ec] dark:border-white/10">
                    <form onSubmit={formik.handleSubmit} className="space-y-8">

                        {apiError && (
                            <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-lg text-sm text-center">
                                {apiError}
                            </div>
                        )}

                        {/* Personal Information */}
                        <div className="space-y-4">
                            <h2 className="text-lg font-semibold text-[#0e1b13] dark:text-white border-b border-[#e7f3ec] dark:border-white/10 pb-2">
                                Personal Details
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-[#0e1b13] dark:text-white mb-2">
                                        Full Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        {...formik.getFieldProps("name")}
                                        className={`w-full h-11 px-4 rounded-lg border ${formik.touched.name && formik.errors.name ? 'border-red-500 ring-1 ring-red-500' : 'border-[#e7f3ec] dark:border-white/10'} bg-[#f8fcfa] dark:bg-[#112117] text-[#0e1b13] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#19e66b]/50 focus:border-[#19e66b] transition-all`}
                                        placeholder="Jane Doe"
                                    />
                                    {formik.touched.name && formik.errors.name ? (
                                        <div className="text-red-500 text-xs mt-1">{formik.errors.name}</div>
                                    ) : null}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-[#0e1b13] dark:text-white mb-2">
                                        Email <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        {...formik.getFieldProps("email")}
                                        className={`w-full h-11 px-4 rounded-lg border ${formik.touched.email && formik.errors.email ? 'border-red-500 ring-1 ring-red-500' : 'border-[#e7f3ec] dark:border-white/10'} bg-[#f8fcfa] dark:bg-[#112117] text-[#0e1b13] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#19e66b]/50 focus:border-[#19e66b] transition-all`}
                                        placeholder="you@university.edu"
                                    />
                                    {formik.touched.email && formik.errors.email ? (
                                        <div className="text-red-500 text-xs mt-1">{formik.errors.email}</div>
                                    ) : null}
                                </div>
                            </div>
                        </div>

                        {/* Academic Information */}
                        <div className="space-y-4">
                            <h2 className="text-lg font-semibold text-[#0e1b13] dark:text-white border-b border-[#e7f3ec] dark:border-white/10 pb-2">
                                Academic Information
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium text-[#0e1b13] dark:text-white mb-2">
                                        University <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        {...formik.getFieldProps("university")}
                                        className={`w-full h-11 px-4 rounded-lg border ${formik.touched.university && formik.errors.university ? 'border-red-500 ring-1 ring-red-500' : 'border-[#e7f3ec] dark:border-white/10'} bg-[#f8fcfa] dark:bg-[#112117] text-[#0e1b13] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#19e66b]/50 focus:border-[#19e66b] transition-all`}
                                        placeholder="University Name"
                                    />
                                    {formik.touched.university && formik.errors.university ? (
                                        <div className="text-red-500 text-xs mt-1">{formik.errors.university}</div>
                                    ) : null}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-[#0e1b13] dark:text-white mb-2">
                                        Major <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        {...formik.getFieldProps("major")}
                                        className={`w-full h-11 px-4 rounded-lg border ${formik.touched.major && formik.errors.major ? 'border-red-500 ring-1 ring-red-500' : 'border-[#e7f3ec] dark:border-white/10'} bg-[#f8fcfa] dark:bg-[#112117] text-[#0e1b13] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#19e66b]/50 focus:border-[#19e66b] transition-all`}
                                        placeholder="Computer Science"
                                    />
                                    {formik.touched.major && formik.errors.major ? (
                                        <div className="text-red-500 text-xs mt-1">{formik.errors.major}</div>
                                    ) : null}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-[#0e1b13] dark:text-white mb-2">Minor (Optional)</label>
                                    <input
                                        type="text"
                                        {...formik.getFieldProps("minor")}
                                        className="w-full h-11 px-4 rounded-lg border border-[#e7f3ec] dark:border-white/10 bg-[#f8fcfa] dark:bg-[#112117] text-[#0e1b13] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#19e66b]/50 focus:border-[#19e66b] transition-all"
                                        placeholder="Mathematics"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-[#0e1b13] dark:text-white mb-2">
                                        Year <span className="text-red-500">*</span>
                                    </label>
                                    <select
                                        {...formik.getFieldProps("year")}
                                        className={`w-full h-11 px-4 rounded-lg border ${formik.touched.year && formik.errors.year ? 'border-red-500 ring-1 ring-red-500' : 'border-[#e7f3ec] dark:border-white/10'} bg-[#f8fcfa] dark:bg-[#112117] text-[#0e1b13] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#19e66b]/50 focus:border-[#19e66b] transition-all appearance-none`}
                                    >
                                        <option value="" disabled>Select Year</option>
                                        <option value="Freshman">Freshman</option>
                                        <option value="Sophomore">Sophomore</option>
                                        <option value="Junior">Junior</option>
                                        <option value="Senior">Senior</option>
                                        <option value="Graduate">Graduate</option>
                                    </select>
                                    {formik.touched.year && formik.errors.year ? (
                                        <div className="text-red-500 text-xs mt-1">{formik.errors.year}</div>
                                    ) : null}
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-[#0e1b13] dark:text-white mb-2">Academic Interests</label>
                                    <input
                                        type="text"
                                        {...formik.getFieldProps("interests")}
                                        className="w-full h-11 px-4 rounded-lg border border-[#e7f3ec] dark:border-white/10 bg-[#f8fcfa] dark:bg-[#112117] text-[#0e1b13] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#19e66b]/50 focus:border-[#19e66b] transition-all"
                                        placeholder="AI, Robotics, History..."
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Courses */}
                        <div className="space-y-4">
                            <h2 className="text-lg font-semibold text-[#0e1b13] dark:text-white border-b border-[#e7f3ec] dark:border-white/10 pb-2">
                                Current Courses
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-[#0e1b13] dark:text-white mb-2">Course 1 Name</label>
                                    <input
                                        type="text"
                                        {...formik.getFieldProps("course1_name")}
                                        className="w-full h-11 px-4 rounded-lg border border-[#e7f3ec] dark:border-white/10 bg-[#f8fcfa] dark:bg-[#112117] text-[#0e1b13] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#19e66b]/50 focus:border-[#19e66b] transition-all"
                                        placeholder="Intro to Psychology"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-[#0e1b13] dark:text-white mb-2">Course 1 Professor</label>
                                    <input
                                        type="text"
                                        {...formik.getFieldProps("course1_professor")}
                                        className="w-full h-11 px-4 rounded-lg border border-[#e7f3ec] dark:border-white/10 bg-[#f8fcfa] dark:bg-[#112117] text-[#0e1b13] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#19e66b]/50 focus:border-[#19e66b] transition-all"
                                        placeholder="Dr. Smith"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-[#0e1b13] dark:text-white mb-2">Course 2 Name</label>
                                    <input
                                        type="text"
                                        {...formik.getFieldProps("course2_name")}
                                        className="w-full h-11 px-4 rounded-lg border border-[#e7f3ec] dark:border-white/10 bg-[#f8fcfa] dark:bg-[#112117] text-[#0e1b13] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#19e66b]/50 focus:border-[#19e66b] transition-all"
                                        placeholder="Calculus II"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-[#0e1b13] dark:text-white mb-2">Course 2 Professor</label>
                                    <input
                                        type="text"
                                        {...formik.getFieldProps("course2_professor")}
                                        className="w-full h-11 px-4 rounded-lg border border-[#e7f3ec] dark:border-white/10 bg-[#f8fcfa] dark:bg-[#112117] text-[#0e1b13] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#19e66b]/50 focus:border-[#19e66b] transition-all"
                                        placeholder="Prof. Johnson"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Security */}
                        <div className="space-y-4">
                            <h2 className="text-lg font-semibold text-[#0e1b13] dark:text-white border-b border-[#e7f3ec] dark:border-white/10 pb-2">
                                Security
                            </h2>
                            <div>
                                <label className="block text-sm font-medium text-[#0e1b13] dark:text-white mb-2">
                                    Password <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="password"
                                    {...formik.getFieldProps("password")}
                                    className={`w-full h-11 px-4 rounded-lg border ${formik.touched.password && formik.errors.password ? 'border-red-500 ring-1 ring-red-500' : 'border-[#e7f3ec] dark:border-white/10'} bg-[#f8fcfa] dark:bg-[#112117] text-[#0e1b13] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#19e66b]/50 focus:border-[#19e66b] transition-all`}
                                    placeholder="Min 8 characters"
                                />
                                {formik.touched.password && formik.errors.password ? (
                                    <div className="text-red-500 text-xs mt-1">{formik.errors.password}</div>
                                ) : null}
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={formik.isSubmitting}
                            className={`w-full h-12 bg-[#19e66b] hover:bg-[#15c65c] text-[#0e1b13] font-bold rounded-xl transition-all shadow-md hover:shadow-lg hover:shadow-[#19e66b]/20 mt-4 ${formik.isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                        >
                            {formik.isSubmitting ? 'Creating Account...' : 'Create Account'}
                        </button>
                    </form>

                    <p className="mt-6 text-xs text-center text-[#4e976b]">
                        By signing up, you agree to our{" "}
                        <Link href="/terms" className="text-[#19e66b] hover:underline font-semibold">Terms</Link> and{" "}
                        <Link href="/privacy" className="text-[#19e66b] hover:underline font-semibold">Privacy Policy</Link>
                    </p>

                    <div className="mt-6 text-center text-sm text-[#4e976b]">
                        Already have an account?{" "}
                        <Link href="/login" className="text-[#19e66b] hover:underline font-bold">
                            Sign in
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
