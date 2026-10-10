'use client'
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import React from 'react';

const UpdateProfilePage = () => {
    const { data: session } = authClient.useSession()
    const user = session?.user
    const router = useRouter();
    // console.log(user)
    const handleUpdateProfile = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget); 
        const newUserData = Object.fromEntries(formData.entries()) as { name: string, image: string, }
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
        <div className='flex flex-col justify-center items-center my-4'>
            <form onSubmit={handleUpdateProfile}>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 my-4">


                    <label className="label">নাম</label>
                    <input type="name" name='name' className="input w-md" placeholder="যেমন: রহিম উদ্দিন" />


                    <label className="label">ImageURL</label>
                    <input type="url" name='image' className="input w-md" placeholder="Image" />

                    <button type='submit' className="btn btn-neutral mt-4">update</button>


                </fieldset>
            </form>
        </div>
    );
};

export default UpdateProfilePage;