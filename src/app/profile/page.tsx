'use client'
import { useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import toast from 'react-hot-toast';

const ProfilePage = () => {
  const { data: session } = authClient.useSession()
  const user = session?.user
  const router = useRouter();
    // console.log(user)
    const handleSignout = async () => {
        await authClient.signOut();
        toast.success("Signout success");
    };
        const handleUpdateProfile = async (e: React.SubmitEvent<HTMLFormElement>) => {
            e.preventDefault();
            const formData = new FormData(e.currentTarget); 
            const newUserData = Object.fromEntries(formData.entries()) as { name: string }
            const result = await authClient.updateUser({
                ...newUserData,
            })
            if (!result.error) {
                router.push('/profile');
                // router.refresh();
            } else {
                console.error('Profile update failed:', result.error);
            }
    
        }
  return (

<div className="my-6 px-4 text-center">
  <div className="mb-6">
    <h2 className="text-2xl font-bold">আমার প্রোফাইল</h2>
    <p className="mt-2 text-gray-500">
      আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
    </p>
  </div>

  <div className="flex justify-center">
    <div className="card w-full max-w-lg bg-base-100 shadow-md">
      <div className="card-body">
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <div className="avatar">
            <div className="w-20 rounded-full ring-2 ring-primary ring-offset-2">
              <img
                alt="User avatar"
                src={user?.image as string}
              />
            </div>
          </div>

          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-xl font-bold">{user?.name}</h2>
            <p className="text-sm text-gray-500">{user?.email}</p>
          </div>

          <button
            onClick={handleSignout}
            className="rounded-lg border border-red-400 p-2 text-red-600 hover:bg-red-50"
          >
            ↩ সাইন আউট
          </button>
        </div>
      </div>
    </div>
  </div>

  <div className="my-6 flex justify-center">
    <form onSubmit={handleUpdateProfile} className="w-full max-w-lg">
      <fieldset className="fieldset rounded-box border border-base-300 bg-base-200 p-6 text-left">
        <legend className="fieldset-legend">প্রোফাইল আপডেট</legend>

        <label className="label">নাম</label>
        <input
          type="text"
          name="name"
          defaultValue={user?.name || ""}
          placeholder="আপনার নাম লিখুন"
          className="input w-full"
          required
        />

        <button type="submit" className="btn btn-neutral mt-4">
          আপডেট করুন
        </button>
      </fieldset>
    </form>
  </div>
</div>

  );
};

export default ProfilePage;