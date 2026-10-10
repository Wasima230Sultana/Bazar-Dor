'use client'

import { authClient } from "@/lib/auth-client";
import Link from "next/link";

const UserInfo = () => {
    const { data: session } = authClient.useSession()
    const user = session?.user
    console.log(user)
    const handleSignout=async()=>{
await authClient.signOut()
    }
    return (
        <div>
            {
                user ?
                    <div className="flex flex-col items-center ">
                        <Link href={'/profile'}>
                        <div className="avatar">
  <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
    <img alt="Tailwind-CSS-Avatar-component" src={user?.image as string}/>
  </div>
</div>
</Link>

<h2>{user?.name}</h2>
<button onClick={handleSignout} className="btn btn-error btn-xs">↩ সাইন আউট</button>
                    </div>
                    :
                    <div className='flex gap-2'>
                        <Link href={'/signin'}>
                            <button className='btn rounded-lg'>সাইন ইন</button>
                        </Link>
                        <Link href={'/signup'}>
                            <button className='btn bg-[#05893E] text-white rounded-lg'>
                                সাইন আপ
                            </button></Link>

                    </div>
            }

        </div>
    );
};

export default UserInfo;