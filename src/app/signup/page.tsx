'use client'
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';

const SignUpPage = () => {
  const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData.entries()) as {
      name: string;
      email: string;
      image: string;
      password: string;
      confirmPassword: string
    };

    const { data, error } = await authClient.signUp.email({
      ...user,
      callbackURL: "/",
    });

    if (data) {
      toast.success("Successfully signed up!");
      redirect("/");
    }

    if (error) {
      toast.error("Signup failed!");
    }
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  const handleGitHubSignIn = async () => {
    await authClient.signIn.social({
      provider: "github",
    });
  }
  return (
    <div className="my-6 flex min-h-screen flex-col items-center px-4 py-6 sm:my-8 sm:py-8">
      {/* Heading */}
      <div className="mb-6 w-full max-w-lg text-center">
        <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
          অ্যাকাউন্ট তৈরি করুন
        </h2>
        <p className="mt-3 text-sm leading-6 text-base-content/70 sm:text-base">
          বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
        </p>
      </div>

      {/* Signup Card */}
      <div className="w-full max-w-lg rounded-2xl border border-base-300 bg-base-100 p-4 shadow-sm sm:p-6">
        <form onSubmit={onSubmit}>
          <fieldset className="fieldset w-full rounded-box border-0 bg-base-200 p-4 sm:p-5">
            <label className="label">নাম</label>
            <input
              type="text"
              name="name"
              className="input w-full"
              placeholder="যেমন: রহিম উদ্দিন"
              required
            />

            <label className="label mt-2">ইমেইল</label>
            <input
              type="email"
              name="email"
              className="input w-full"
              placeholder="you@example.com"
              required
            />

            <label className="label mt-2">Image URL</label>
            <input
              type="url"
              name="image"
              className="input w-full"
              placeholder="https://example.com/image.jpg"
            />

            <label className="label mt-2">পাসওয়ার্ড</label>
            <input
              type="password"
              name="password"
              className="input w-full"
              placeholder="কমপক্ষে ৮ অক্ষর"
              minLength={8}
              required
            />

            <label className="label mt-2">পাসওয়ার্ড নিশ্চিত করুন</label>
            <input
              type="password"
              name="confirmPassword"
              className="input w-full"
              placeholder="আবার লিখুন"
              minLength={8}
              required
            />

            <button type="submit" className="btn bg-green-600 text-white text-md mt-5 w-full">
              অ্যাকাউন্ট তৈরি করুন
            </button>

            <div className="divider my-2">অথবা</div>
          </fieldset>
        </form>

        {/* Social Login */}
        <div className="mt-4 flex flex-col gap-3 sm:flex-row">
          <button
            onClick={handleGoogleSignIn}
            className="btn min-w-0 flex-1 whitespace-normal"
          >
            <Image className='w-4 h-4' src='/Google.png' alt='' width={10} height={5}></Image>
            Google দিয়ে চালিয়ে যান
          </button>

          <button
            onClick={handleGitHubSignIn}
            className="btn min-w-0 flex-1 whitespace-normal"
          >
            <Image className='w-4 h-4' src='/Github.png' alt='' width={10} height={5}></Image>

            GitHub দিয়ে চালিয়ে যান
          </button>
        </div>

        {/* Sign In Link */}
        <div className="my-5 text-center text-sm sm:text-base">
          <p>
            অ্যাকাউন্ট আছে?{" "}
            <Link
              className="font-bold text-green-600 hover:text-green-700"
              href="/signin"
            >
              সাইন ইন করুন
            </Link>
          </p>
        </div>
      </div>

      {/* Back Home */}
      <Link
        href="/"
        className="mt-6 text-sm text-base-content/70 transition-colors hover:text-green-600 sm:text-base"
      >
        ← হোম পেজে ফিরে যান
      </Link>
    </div>



  );
};

export default SignUpPage;