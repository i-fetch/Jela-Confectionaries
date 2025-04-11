"use client"
import { useState } from "react"
import { X } from "lucide-react"

const OurVideo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    setIsModalOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setIsModalOpen(false)
    document.body.style.overflow = "auto"
  }

  return (
    <>
      {/* Background Video */}
      <div className="relative w-full aspect-video overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/spicyhunt-intro-bg-video.mp4"
          autoPlay
          muted
          loop
          playsInline
        >
          Your browser does not support the video tag.
        </video>

        {/* Play Button */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
          w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-white bg-black/30 
          backdrop-blur-sm flex items-center justify-center cursor-pointer 
          transition-all duration-300 hover:scale-110 hover:bg-black/50"
          onClick={openModal}
        >
          <span className="text-white font-medium tracking-wider text-xs sm:text-sm">PLAY</span>
        </div>
      </div>

      {/* Video Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm transition-opacity duration-300">
          <div className="relative w-full max-w-6xl mx-4">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 focus:outline-none"
              aria-label="Close video"
            >
              <X size={24} />
            </button>

            {/* YouTube Video Player */}
            <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default OurVideo
