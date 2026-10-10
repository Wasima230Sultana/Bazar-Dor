'use client'
import { authClient } from '@/lib/auth-client';
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
        <div className='flex flex-col justify-center items-center my-4'>
            <h2 className='font-bold text-4xl '>সাইন ইন</h2>
            <p>বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।</p>
            <div className='bg-white p-4'>
                <form onSubmit={onSubmit}>
         <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 my-4">


   <label className="label">ইমেইল</label>
  <input type="email" name='email' className="input w-md" placeholder="you@example.com" />

 
 <label className="label">পাসওয়ার্ড</label>
  <input type="password" name='password' className="input w-md" placeholder="কমপক্ষে ৮ অক্ষর" />


  <button type='submit' className="btn btn-neutral mt-4">সাইন ইন</button>
  <div className='divider'>অথবা</div>
</fieldset>
        </form>
            <div className='flex gap-4 items-center justify-center'>
                <button onClick={handleGoogleSignIn} className='btn'>Google দিয়ে চালিয়ে যান</button>
                <button onClick={handleGitHubSignIn} className='btn '>GitHub দিয়ে চালিয়ে যান</button>

            </div>
            <div className='text-center my-3'>
                <p>অ্যাকাউন্ট নেই? 
                    <Link className='text-green-600 font-bold text-xl' href={'/signup'}> সাইন আপ করুন</Link></p>
            </div>
            
            </div>
            <Link href={'/'}>
             <p>← হোম পেজে ফিরে যান</p>
             </Link>
            </div>
              
       
    );
};

export default SignInPage;