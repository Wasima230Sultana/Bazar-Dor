'use client'
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import toast from 'react-hot-toast';


const SignInPage = () => {
const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const user = Object.fromEntries(formData.entries()) as {
    email: string;
    password: string;
  };

  const { data, error } = await authClient.signIn.email({
    ...user,
    callbackURL: "/",
  });

  if (data) {
    toast.success("Successfully signed in!");
  }

  if (error) {
    toast.error("Invalid email or password");
    console.log(error);
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
  <div className="mb-6 w-full max-w-lg text-center">
    <h2 className="text-3xl font-bold sm:text-4xl">
      সাইন ইন
    </h2>
    <p className="mt-3 text-sm leading-6 text-base-content/70 sm:text-base">
      বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।
    </p>
  </div>

  <div className="w-full max-w-lg rounded-2xl border border-base-300 bg-base-100 p-4 shadow-sm sm:p-6">
    <form onSubmit={onSubmit}>
      <fieldset className="fieldset rounded-box w-full border-0 p-0">
        <label className="label text-sm font-medium">
          ইমেইল
        </label>
        <input
          type="email"
          name="email"
          className="input w-full"
          placeholder="you@example.com"
          required
        />

        <label className="label mt-3 text-sm font-medium">
          পাসওয়ার্ড
        </label>
        <input
          type="password"
          name="password"
          className="input w-full"
          placeholder="কমপক্ষে ৮ অক্ষর"
          required
        />

        <button type="submit" className="btn text-white text-md mt-5 w-full bg-green-600">
          সাইন ইন
        </button>

        <div className="divider my-3">অথবা</div>
      </fieldset>
    </form>

    <div className="flex flex-col gap-3 sm:flex-row">
      <button
        onClick={handleGoogleSignIn}
        className="btn min-w-0 flex-1 whitespace-normal"
      >
        <Image className='w-4 h-4' src='/Google.png' alt=''width={10} height={5}></Image>
        Google দিয়ে চালিয়ে যান
      </button>

      <button
        onClick={handleGitHubSignIn}
        className="btn min-w-0 flex-1 whitespace-normal"
      >
               <Image className='w-4 h-4' src='/Github.png' alt=''width={10} height={5}></Image> GitHub দিয়ে চালিয়ে যান
      </button>
    </div>

    <div className="my-5 text-center text-sm sm:text-base">
      <p>
        অ্যাকাউন্ট নেই?{" "}
        <Link
          className="font-bold text-green-600 hover:text-green-700"
          href="/signup"
        >
          সাইন আপ করুন
        </Link>
      </p>
    </div>
  </div>

  <Link
    href="/"
    className="mt-6 text-sm text-base-content/70 transition-colors hover:text-green-600 sm:text-base"
  >
    ← হোম পেজে ফিরে যান
  </Link>
</div>
              
       
    );
};

export default SignInPage;