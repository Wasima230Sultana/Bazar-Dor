'use client'

import { authClient } from "@/lib/auth-client";
import { success } from "better-auth";
import Link from "next/link";
import toast from "react-hot-toast";

const UserInfo = () => {
    const { data: session } = authClient.useSession()
    const user = session?.user
    // console.log(user)
    const handleSignout = async () => {
        await authClient.signOut();
        toast.success("Signout success");
    };
    return (
        <div>
            {
                user ?
                  <div className="flex flex-col items-center">
  <div className="flex items-center gap-3">
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
          <img
            alt="User avatar"
            src={user?.image}
          />
        </div>
      </div>

      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3  p-2 shadow"
      >
        <li className="menu-title">
          <span>{user?.name}</span>
          <span>{user?.email}</span>
        </li>

        <li>
          <Link href="/profile">👤 আমার প্রোফাইল</Link>
        </li>

        <li>
          <button onClick={handleSignout} className="text-red-600">
            ↩ সাইন আউট
          </button>
        </li>
      </ul>
    </div>

    <h2>{user?.name}</h2>
  </div>
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