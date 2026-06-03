"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { signIn } from "@/lib/auth-client";
import { redirect } from "next/navigation";

export default function SigninPage() {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async(e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const signinData = Object.fromEntries(formData.entries())


    const {data, error} = await signIn.email({
      email: signinData.email,
      password: signinData.password,
    })

    if(data){
      alert('Sign-in successful!')
      redirect('/')
    }
    if(error){
      alert(error.message)
    }
  };

   const handleSignIn = async () => {
  const data = await signIn.social({
    provider: "google",
  });
  if(data){
    alert('Signup successful!')
    redirect('/')
  }
};

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white flex items-center justify-center px-4 py-10">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-600/20 blur-[120px]" />
        <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-purple-600/20 blur-[120px]" />
      </div>

      {/* Card */}
      <div className="relative z-10 w-full max-w-md rounded-3xl border border-zinc-800 bg-zinc-950/80 p-8 backdrop-blur-xl shadow-2xl">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="bg-linear-to-r from-indigo-400 to-purple-500 bg-clip-text text-4xl font-bold text-transparent">
            Sign In
          </h1>

          <p className="mt-2 text-sm text-zinc-400">
            Welcome back! Sign in to continue.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm text-zinc-300"
            >
              Email Address
            </label>

            <div className="relative">
              <Mail
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
              />

              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="example@email.com"
                className="w-full rounded-xl border border-zinc-800 bg-zinc-900 py-3 pl-11 pr-4 outline-none transition focus:border-indigo-500"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <div className="mb-2 flex items-center justify-between">
              <label
                htmlFor="password"
                className="text-sm text-zinc-300"
              >
                Password
              </label>

              <Link
                href="/forgot-password"
                className="text-sm text-indigo-400 hover:text-indigo-300"
              >
                Forgot Password?
              </Link>
            </div>

            <div className="relative">
              <Lock
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500"
              />

              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                required
                placeholder="Enter password"
                className="w-full rounded-xl border border-zinc-800 bg-zinc-900 py-3 pl-11 pr-12 outline-none transition focus:border-indigo-500"
              />

              <button
                type="button"
                aria-label="Toggle Password"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300"
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>
          </div>

          {/* Remember Me */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-zinc-400">
              <input
                type="checkbox"
                className="h-4 w-4 accent-indigo-500"
              />
              Remember me
            </label>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-xl bg-linear-to-r from-indigo-600 to-purple-600 py-3 font-semibold transition hover:opacity-90"
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-zinc-800" />
          <span className="text-sm text-zinc-500">OR</span>
          <div className="h-px flex-1 bg-zinc-800" />
        </div>

        {/* Social Login */}
        <div className="grid grid-cols-2 gap-4">
          <button onClick={handleSignIn}
            type="button"
            className="rounded-xl border border-zinc-800 bg-zinc-900 py-3 transition hover:bg-zinc-800"
          >
            Google
          </button>

          <button
            type="button"
            className="rounded-xl border border-zinc-800 bg-zinc-900 py-3 transition hover:bg-zinc-800"
          >
            GitHub
          </button>
        </div>

        {/* Register Link */}
        <p className="mt-6 text-center text-sm text-zinc-400">
          Don&lsquo;t have an account?{" "}
          <Link
            href="/register"
            className="font-semibold text-indigo-400 hover:text-indigo-300"
          >
            Register
          </Link>
        </p>
      </div>
    </section>
  );
}