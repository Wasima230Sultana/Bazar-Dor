import React from 'react';

const page = () => {
    return (
        <div className='flex flex-col justify-center items-center my-4'>
            <h2 className='font-bold text-4xl '>সাইন ইন</h2>
            <p>বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।</p>
              <form>
         <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4 my-4">


   <label className="label">ইমেইল</label>
  <input type="email" name='email' className="input w-md" placeholder="you@example.com" />

 
 <label className="label">পাসওয়ার্ড</label>
  <input type="password" name='password' className="input w-md" placeholder="কমপক্ষে ৮ অক্ষর" />


  <button className="btn btn-neutral mt-4">সাইন ইন</button>
  <div className='divider'>অথবা</div>
</fieldset>
        </form>
        </div>
    );
};

export default page;