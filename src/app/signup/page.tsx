import React from 'react';

const page = () => {
    return (
        <div className='flex flex-col justify-center items-center my-4'>
            <h2 className='font-bold text-4xl '>অ্যাকাউন্ট তৈরি করুন</h2>
            <p>বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।</p>
              <form>
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

  <button className="btn btn-neutral mt-4">অ্যাকাউন্ট তৈরি করুন</button>
  <div className='divider'>অথবা</div>
</fieldset>
        </form>
        </div>
      
    );
};

export default page;