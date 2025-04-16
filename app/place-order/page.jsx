import React from 'react';
import PageHeader from '@/public/page-header-bg2.jpg';
import Navbar from '@/components/Navbar/Navbar';
import Menu2 from '@/components/Menu2/Menu2';


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
          <h1 className='text-gray-300 font-bold uppercase text-2xl xl:4xl'>Our Menu</h1>
          <p className='text-gray-300 text-xs xl:text-2xl font-medium space-x-1.5'> <span>Home</span>/ <span>Menu</span></p>
        </div>

      </header>

      <Menu2 />
    </div>
  )
}

