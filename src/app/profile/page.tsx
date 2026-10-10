'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';

const ProfilePage = () => {
        const { data: session } = authClient.useSession()
        const user = session?.user
        console.log(user)
    return (
        <div className='flex justify-center items-center my-6'>
           <div className="card bg-base-100 w-96 shadow-sm">
  <figure className="px-10 pt-10">
   <div className="avatar">
  <div className="ring-primary ring-offset-base-100 w-20 rounded-full ring-2 ring-offset-2">
    <img alt="Tailwind-CSS-Avatar-component" src={user?.image as string}/>
  </div>
</div>
  </figure>
  <div className="card-body items-center text-center">
    
<h2 className='card-title'>{user?.name}</h2>
<h2>{user?.email}</h2>    <div className="card-actions">
    <Link href={'/updateprofile'}>
          <button className="btn btn-primary">Update Profile</button>

</Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default ProfilePage;