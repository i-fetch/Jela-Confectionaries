// components/ReserveForm.js
import React from 'react';

const ReserveTable  =() => {
  return (
    <section className="bg-[#1f2120] text-white py-20 px-4 md:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left - Heading and Open Hours */}
        <div>
          <p className="text-xs tracking-wide text-[#b1b19e] uppercase mb-2">Reserve a Table</p>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-snug">
            Reserve Now Your Table <br />
            And <span className="text-[#c2b47c]">Enjoy Dining Experience.</span>
          </h2>

          <div className="mt-8">
            <h4 className="text-lg font-semibold mb-2">Open Hours</h4>
            <ul className="space-y-1 text-sm text-[#b1b19e]">
              <li>Mon - Thu &nbsp; 10:00 AM - 09:00 PM</li>
              <li>Fri - Sat &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 09:00 AM - 10:00 PM</li>
              <li>Sun &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Closed</li>
            </ul>
          </div>
        </div>

        {/* Right - Reservation Form */}
        <div className="bg-[#ffff] rounded-lg shadow-md p-8 space-y-4 text-black -mb-32 z-10 relative min-h-[400px]">
          <div>
            <label className="block text-sm font-medium mb-1">Your Name</label>
            <input type="text" placeholder="e.g. John" className="w-full border border-gray-300 rounded-md px-4 py-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Email Address</label>
              <input type="email" placeholder="e.g. John@example.com" className="w-full border border-gray-300 rounded-md px-4 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone Number</label>
              <input type="text" placeholder="e.g. +123 456 8792" className="w-full border border-gray-300 rounded-md px-4 py-2" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Date</label>
              <input type="date" className="w-full border border-gray-300 rounded-md px-4 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Time</label>
              <select className="w-full border border-gray-300 rounded-md px-4 py-2">
                <option>Select time</option>
                <option>10:00 AM</option>
                <option>01:00 PM</option>
                <option>06:00 PM</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Number Of Person</label>
              <select className="w-full border border-gray-300 rounded-md px-4 py-2">
                <option>number of person</option>
                {[1,2,3,4,5,6].map(n => (
                  <option key={n}>{n}</option>
                ))}
              </select>
            </div>
          </div>

          <button className="mt-4 bg-[#c2b47c] text-white py-2 px-6 rounded-md font-semibold">
            Reserve Now
          </button>
        </div>
      </div>
    </section>
  );
}

export default ReserveTable;
