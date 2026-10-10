'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';

const SignUpPage= () => {
const onSubmit = async (e: React.SubmitEvent<HTMLElement>) => {
  e.preventDefault();

  const formData = new FormData(e.target);
  const user = Object.fromEntries(formData.entries()) as {
    name: string;
    email: string;
    image: string;
    password: string;
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
        <div className='flex flex-col justify-center items-center my-4'>
            <h2 className='font-bold text-4xl '>অ্যাকাউন্ট তৈরি করুন</h2>
            <p>বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।</p>
            <div className='bg-white p-4'>
                 <form onSubmit={onSubmit}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 my-4">

                    <label className="label">নাম</label>
                    <input type="name" name='name' className="input w-md" placeholder="যেমন: রহিম উদ্দিন" />

                    <label className="label">ইমেইল</label>
                    <input type="email" name='email' className="input w-md" placeholder="you@example.com" />

                    <label className="label">ImageURL</label>
                    <input type="url" name='image' className="input w-md" placeholder="Image" />


                    <label className="label">পাসওয়ার্ড</label>
                    <input type="password" name='password' className="input w-md" placeholder="কমপক্ষে ৮ অক্ষর" />

                    <label className="label">পাসওয়ার্ড নিশ্চিত করুন</label>
                    <input type="password" name='password' className="input w-md" placeholder="আবার লিখুন" />

                    <button type='submit' className="btn btn-neutral mt-4">অ্যাকাউন্ট তৈরি করুন</button>
                    <div className='divider'>অথবা</div>
                </fieldset>
            </form>
              <div className='flex gap-4 items-center justify-center'>
                <button onClick={handleGoogleSignIn} className='btn'>Google দিয়ে চালিয়ে যান</button>
                <button onClick={handleGitHubSignIn} className='btn '>GitHub দিয়ে চালিয়ে যান</button>

            </div>
            <div className='text-center my-3'>
                <p>অ্যাকাউন্ট আছে?
                    <Link className='text-green-600 font-bold text-xl' href={'/signin'}> সাইন ইন করুন</Link></p>
            </div>
            
            </div>
            <Link href={'/'}>
             <p>← হোম পেজে ফিরে যান</p>
             </Link>
          
          
        </div>
     
      

    );
};

export default SignUpPage;