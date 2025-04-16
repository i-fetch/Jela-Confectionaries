import React from 'react';
import PageHeader from '@/public/page-header-bg2.jpg';
import AboutSection from '@/components/AboutSection/AboutSection';
import DailyOffers from '@/components/DailyOffers/DailyOffers';
import ReserveTable from '@/components/ReserveTable/ReserveTable';
import Footers from '@/components/Footers/Footers';
import OurApproach from '@/components/OurApproach/OurApproach';
import AlwaysQuality from '@/components/AlwaysQuality/AlwaysQuality';
import OurVideo from '@/components/OurVideo/OurVideo';
import FaQ from '@/components/FaQ/FaQ';
import Navbar from '@/components/Navbar/Navbar';
import AboutSection2 from '@/components/AboutSection2/AboutSection2';


export default function page() {
  return (
    <div>
      <Navbar />
      <header className="pb-20 relative bg-fixed bg-bottom bg-cover bg-no-repeat h-[50vh] md:h-[45vh] lg:h-[50vh] overflow-hidden"
        style={{ backgroundImage: `url(${PageHeader?.src || ''})` }} >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-70 z-10" />
 
        {/* Breadcrumb  */}
        <div className='absolute inset-0 z-20 flex flex-col items-center justify-center h-full pt-20 px-4 md:pb-20'>
          <h1 className='text-gray-300 font-bold uppercase text-2xl xl:4xl'>About Us</h1>
          <p className='text-gray-300 text-xs xl:text-2xl font-medium space-x-1.5'> <span>Home</span>/ <span>About Us</span></p>
        </div>

      </header>
      <AboutSection />
      <AboutSection2 />
      <OurApproach />
      <DailyOffers />
      <ReserveTable />
      <Footers />
    

    </div>
  )
}


