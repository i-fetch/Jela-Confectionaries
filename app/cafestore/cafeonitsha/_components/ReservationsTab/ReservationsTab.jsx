import React from 'react'


const ReservationsTab = () => {
  return (
    <div className="space-y-6">
      <div className="bg-[#1a2235] rounded-lg p-6 flex justify-between items-center">
        <div>
          <h3 className="font-medium">Table for 4</h3>
          <p className="text-gray-400 text-sm">2025-01-20 at 19:00</p>
        </div>
        <span className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full">Confirmed</span>
      </div>

      <div className="bg-[#1a2235] rounded-lg p-6 flex justify-between items-center">
        <div>
          <h3 className="font-medium">Table for 2</h3>
          <p className="text-gray-400 text-sm">2025-01-25 at 20:00</p>
        </div>
        <span className="bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full">Pending</span>
      </div>
    </div>
  )
}

export default ReservationsTab;
