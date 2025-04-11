"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"

const JelaCafeMap = () => {
  const mapRef = useRef(null)
  const [mapLoaded, setMapLoaded] = useState(false)
  const [mapError, setMapError] = useState(null)

  useEffect(() => {
    // Define initMap on the window object
    window.initMap = () => {
      initializeMap()
    }

    // Load Google Maps script
    const loadGoogleMapsScript = () => {
      // For development, we can use the map without an API key
      // This will show a development watermark but will work for testing
      const googleMapsScript = document.createElement("script")
      googleMapsScript.src = `https://maps.googleapis.com/maps/api/js?callback=initMap&libraries=places&v=weekly`
      googleMapsScript.async = true
      googleMapsScript.defer = true

      // Handle script loading errors
      googleMapsScript.onerror = () => {
        setMapError("Failed to load Google Maps. Please check your internet connection.")
      }

      document.head.appendChild(googleMapsScript)
    }

    const initializeMap = () => {
      if (!mapRef.current) return

      try {
        // Nigeria coordinates
        const nigeriaCoordinates = { lat: 9.082, lng: 8.6753 }

        // Create map instance
        const map = new window.google.maps.Map(mapRef.current, {
          center: nigeriaCoordinates,
          zoom: 6, // Zoomed out to show the entire country
          mapTypeId: "roadmap",
          mapTypeControl: true,
          mapTypeControlOptions: {
            style: window.google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
            position: window.google.maps.ControlPosition.TOP_RIGHT,
          },
          zoomControl: true,
          zoomControlOptions: {
            position: window.google.maps.ControlPosition.RIGHT_TOP,
          },
          scaleControl: true,
          streetViewControl: true,
          streetViewControlOptions: {
            position: window.google.maps.ControlPosition.RIGHT_TOP,
          },
          fullscreenControl: true,
          fullscreenControlOptions: {
            position: window.google.maps.ControlPosition.RIGHT_TOP,
          },
        })

        // Add sample markers for Nigerian landmarks
        const landmarks = [
          { position: { lat: 9.0765, lng: 7.3986 }, title: "Abuja" },
          { position: { lat: 6.5244, lng: 3.3792 }, title: "Lagos" },
          { position: { lat: 6.335, lng: 5.6037 }, title: "Benin City" },
          { position: { lat: 7.3775, lng: 3.947 }, title: "Ibadan" },
          { position: { lat: 11.9968, lng: 8.5137 }, title: "Kano" },
          { position: { lat: 4.8156, lng: 7.0498 }, title: "Port Harcourt" },
        ]

        // Create markers for each landmark
        landmarks.forEach((landmark) => {
          const marker = new window.google.maps.Marker({
            position: landmark.position,
            map: map,
            title: landmark.title,
          })
        })

        setMapLoaded(true)
      } catch (error) {
        setMapError("Error initializing map: " + (error instanceof Error ? error.message : String(error)))
      }
    }

    if (!mapLoaded && !mapError) {
      loadGoogleMapsScript()
    }

    return () => {
      // Clean up
      window.initMap = () => {}
    }
  }, [mapLoaded, mapError])

  return (
    <Card className="w-full h-[calc(100vh-2rem)] overflow-hidden rounded-lg shadow-lg">
      <div className="relative w-full h-full">
        {mapError ? (
          <div className="flex items-center justify-center h-full p-4 text-red-500">
            <div className="text-center">
              <p className="font-semibold">{mapError}</p>
              <p className="mt-2 text-sm">
                For production use, please obtain a Google Maps API key from the Google Cloud Console.
              </p>
            </div>
          </div>
        ) : (
          <>
            <div ref={mapRef} className="w-full h-full" />

            {/* Google Maps attribution */}
            <div className="absolute bottom-0 right-0 bg-white px-2 py-1 text-xs text-gray-600 z-10">
              Map data ©2023 Google | Terms | Report a map error
            </div>

            {/* Search box placeholder (for visual matching) */}
            <div className="absolute top-4 left-4 bg-white rounded-md shadow-md w-64 z-10">
              <div className="flex items-center p-2">
                <div className="flex-shrink-0 mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search Google Maps"
                  className="w-full bg-transparent border-none focus:outline-none text-sm"
                  readOnly
                />
              </div>
            </div>

            {/* Zoom controls */}
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-md shadow-md z-10">
              <button className="p-2 hover:bg-gray-100 block w-full border-b border-gray-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mx-auto text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </button>
              <button className="p-2 hover:bg-gray-100 block w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mx-auto text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
              </button>
            </div>
          </>
        )}
      </div>
    </Card>
  )
}

export default JelaCafeMap
