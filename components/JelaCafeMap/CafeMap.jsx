import React from 'react'
import { Card } from '../ui/card'

const CafeMap = () => {
  return (
    <section>
      <Card className="w-full h-[calc(100vh-2rem)] overflow-hidden rounded-lg shadow-lg">
        <div className="relative w-full h-full">
          <iframe
            className="contact-map-size w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3931.581693144684!2d6.7865615!3d6.1509749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10439301cecefdc1%3A0x7f62ee163cb6bd0a!2s18%20Oguta%20Rd%2C%20%C3%89n%C3%BA%20%E1%BB%8Cn%E1%BB%8Bcha%2C%20Onitsha%20434106%2C%20Anambra!5e0!3m2!1sen!2sng!4v1692004323707!5m2!1sen!2sng"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          >
          </iframe>
          {/* Map attribution */}
          <div className="absolute bottom-0 right-0 bg-white px-2 py-1 text-xs text-gray-600 z-10">
            JelaCafe Map | Nigeria
          </div>
        </div>
      </Card>
    </section>
  )
}

export default CafeMap
