import React from 'react'

const CafeMap = () => {
  return (
    <div className="bg-gray-300 py-4 grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Original Location - 18 Oguta Rd */}
      <div className="w-full mb-4">
        <h3 className="text-lg text-center font-semibold mb-2">Main Branch</h3>
        <iframe
          className="w-full h-64 lg:h-72  border-none border-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3931.581693144684!2d6.7865615!3d6.1509749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10439301cecefdc1%3A0x7f62ee163cb6bd0a!2s18%20Oguta%20Rd%2C%20%C3%89n%C3%BA%20%E1%BB%8Cn%E1%BB%8Bcha%2C%20Onitsha%20434106%2C%20Anambra!5e0!3m2!1sen!2sng!4v1692004323707!5m2!1sen!2sng"
          allowFullScreen=""
          loading="lazy"
          title="Main Branch - 18 Oguta Rd, Onitsha"
        ></iframe>
      </div>

      {/* Second Location - 33 Old Market Rd */}
      <div className="w-full mb-4">
        <h3 className="text-lg text-center font-semibold mb-2">Downtown Branch</h3>
        <iframe
          className="w-full h-64 lg:h-72  border-none border-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3931.535687088473!2d6.7810318!3d6.1539837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1043930a2d1e1e3b%3A0x7a4e3a8a7b5a5a5a!2s33%20Old%20Market%20Rd%2C%20Onitsha%20434102%2C%20Anambra!5e0!3m2!1sen!2sng!4v1692004323707!5m2!1sen!2sng"
          allowFullScreen=""
          loading="lazy"
          title="Downtown Branch - 33 Old Market Rd, Onitsha"
        ></iframe>
      </div>

      {/* Third Location - 12 Awka Rd */}
      <div className="w-full mb-4">
        <h3 className="text-lg text-center font-semibold mb-2">Awka Road Branch</h3>
        <iframe
          className="w-full h-64 lg:h-72  border-none border-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3931.61123456789!2d6.7891234!3d6.1487654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1043930a2d1e1e3b%3A0x7a4e3a8a7b5a5a5a!2s12%20Awka%20Rd%2C%20Onitsha%20434103%2C%20Anambra!5e0!3m2!1sen!2sng!4v1692004323707!5m2!1sen!2sng"
          allowFullScreen=""
          loading="lazy"
          title="Awka Road Branch - 12 Awka Rd, Onitsha"
        ></iframe>
      </div>
    </div>
  )
}

export default CafeMap
