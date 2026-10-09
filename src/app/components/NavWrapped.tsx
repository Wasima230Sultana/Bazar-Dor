import { Suspense } from 'react';
import Navbar from './Navbar';
import NavLinks from './NavLinks';
import Marquee from './Marquee';

export default function NavWrapped() {
    return (
        <div className='bg-[#FAFCFA]'>
            <Navbar />

            <Suspense
                fallback={
                    <div className="max-w-7xl mx-auto px-4 py-4">
                        Loading categories...
                    </div>
                }
            >
                <NavLinks />
              <Marquee></Marquee> 
            </Suspense>
        </div>
    );
}