import React from 'react';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ReserveTable = () => {
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
            <Label className="block text-sm font-medium mb-1">Your Name</Label>
            <Input type="text" placeholder="e.g. John" className="w-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label className="block text-sm font-medium mb-1">Email Address</Label>
              <Input type="email" placeholder="e.g. John@example.com" className="w-full" />
            </div>
            <div>
              <Label className="block text-sm font-medium mb-1">Phone Number</Label>
              <Input type="text" placeholder="e.g. +123 456 8792" className="w-full" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label className="block text-sm font-medium mb-1">Date</Label>
              <Input type="date" className="w-full" />
            </div>
            <div>
              <Label className="block text-sm font-medium mb-1">Time</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select time" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="10:00 AM">10:00 AM</SelectItem>
                  <SelectItem value="01:00 PM">01:00 PM</SelectItem>
                  <SelectItem value="06:00 PM">06:00 PM</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label className="block text-sm font-medium mb-1">Number Of Person</Label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Number of person" />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <SelectItem key={n} value={n.toString()}>
                      {n}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <button className="mt-4 bg-[#c2b47c] text-white py-2 px-6 rounded-md font-semibold">
            Reserve Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReserveTable;