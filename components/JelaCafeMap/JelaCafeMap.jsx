"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Search, Navigation, Briefcase, Building, X, Loader2 } from "lucide-react"

const JelaCafeMap = () => {
  const mapRef = useRef(null)
  const [map, setMap] = useState(null)
  const [userMarker, setUserMarker] = useState(null)
  const [userLocation, setUserLocation] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [isSearching, setIsSearching] = useState(false)
  const [locationError, setLocationError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [routeInfo, setRouteInfo] = useState({
    asaba: null,
    onitsha: null,
  })
  const [infoVisible, setInfoVisible] = useState(true)

  // Important locations
  const destinations = {
    asaba: { lat: 6.2049, lng: 6.7334, name: "Asaba", description: "JelaCafe Main Branch" },
    onitsha: { lat: 6.1667, lng: 6.7833, name: "Onitsha", description: "JelaCafe Second Branch" },
  }

  // Nigerian cities with their coordinates (for initial search suggestions)
  const cities = [
    { name: "Asaba", lat: 6.2049, lng: 6.7334, isMainBranch: true },
    { name: "Onitsha", lat: 6.1667, lng: 6.7833, isSecondBranch: true },
    { name: "Abuja", lat: 9.0765, lng: 7.3986, isCapital: true },
    { name: "Lagos", lat: 6.5244, lng: 3.3792, isCommercial: true },
    { name: "Benin City", lat: 6.335, lng: 5.6037 },
    { name: "Ibadan", lat: 7.3775, lng: 3.947 },
    { name: "Kano", lat: 11.9968, lng: 8.5137 },
    { name: "Port Harcourt", lat: 4.8156, lng: 7.0498 },
    { name: "Enugu", lat: 6.4584, lng: 7.5464 },
    { name: "Calabar", lat: 4.9757, lng: 8.3417 },
    { name: "Kaduna", lat: 10.5222, lng: 7.4383 },
    { name: "Sokoto", lat: 13.0059, lng: 5.2476 },
    { name: "Maiduguri", lat: 11.8311, lng: 13.151 },
    { name: "Jos", lat: 9.8965, lng: 8.8583 },
    { name: "Owerri", lat: 5.4833, lng: 7.0333 },
    { name: "Warri", lat: 5.5167, lng: 5.75 },
  ]

  useEffect(() => {
    // Load Leaflet CSS
    const linkElement = document.createElement("link")
    linkElement.rel = "stylesheet"
    linkElement.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
    linkElement.integrity = "sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
    linkElement.crossOrigin = ""
    document.head.appendChild(linkElement)

    // Load Leaflet JS
    const script = document.createElement("script")
    script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
    script.integrity = "sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
    script.crossOrigin = ""

    script.onload = () => {
      if (typeof window.L !== "undefined") {
        initializeMap()
      }
    }

    document.head.appendChild(script)

    return () => {
      if (document.head.contains(linkElement)) {
        document.head.removeChild(linkElement)
      }
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [])

  const initializeMap = () => {
    if (!mapRef.current || typeof window.L === "undefined") return

    // Create map instance - initially centered on Delta State (between Asaba and Onitsha)
    const nigeriaMap = window.L.map(mapRef.current, {
      zoomControl: false, // Disable default zoom control to reposition it
    }).setView([6.1858, 6.7584], 11)

    // Add OpenStreetMap tiles
    window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(nigeriaMap)

    // Add custom positioned zoom control
    window.L.control
      .zoom({
        position: "bottomright",
      })
      .addTo(nigeriaMap)

    setMap(nigeriaMap)

    // Add markers for important locations
    addDestinationMarkers(nigeriaMap)

    // Add markers for other Nigerian cities
    addCityMarkers(nigeriaMap)

    // Try to get user's location
    getUserLocation(nigeriaMap)
  }

  const addDestinationMarkers = (mapInstance) => {
    // Main Branch marker (Asaba)
    const mainBranchIcon = window.L.divIcon({
      className: "main-branch-icon",
      html: `<div style="background-color: #4CAF50; 
                        width: 16px; 
                        height: 16px; 
                        border-radius: 50%; 
                        border: 3px solid white;
                        box-shadow: 0 0 6px rgba(0,0,0,0.5);">
             </div>`,
      iconSize: [22, 22],
      iconAnchor: [11, 11],
    })

    const asabaMarker = window.L.marker([destinations.asaba.lat, destinations.asaba.lng], { icon: mainBranchIcon })
      .addTo(mapInstance)
      .bindPopup(`<b>${destinations.asaba.name}</b><br>${destinations.asaba.description}`)

    // Second Branch marker (Onitsha)
    const secondBranchIcon = window.L.divIcon({
      className: "second-branch-icon",
      html: `<div style="background-color: #FF9800; 
                        width: 16px; 
                        height: 16px; 
                        border-radius: 50%; 
                        border: 3px solid white;
                        box-shadow: 0 0 6px rgba(0,0,0,0.5);">
             </div>`,
      iconSize: [22, 22],
      iconAnchor: [11, 11],
    })

    const onitshaMarker = window.L.marker([destinations.onitsha.lat, destinations.onitsha.lng], {
      icon: secondBranchIcon,
    })
      .addTo(mapInstance)
      .bindPopup(`<b>${destinations.onitsha.name}</b><br>${destinations.onitsha.description}`)
  }

  const addCityMarkers = (mapInstance) => {
    cities.forEach((city) => {
      // Skip Asaba and Onitsha as we already added them with special markers
      if (city.name === "Asaba" || city.name === "Onitsha") return

      const markerIcon = window.L.divIcon({
        className: "custom-div-icon",
        html: `<div style="background-color: ${city.isCapital ? "#ff4433" : city.isCommercial ? "#8833ff" : "#3388ff"}; 
                          width: 10px; 
                          height: 10px; 
                          border-radius: 50%; 
                          border: 2px solid white;
                          box-shadow: 0 0 4px rgba(0,0,0,0.3);">
               </div>`,
        iconSize: [14, 14],
        iconAnchor: [7, 7],
      })

      window.L.marker([city.lat, city.lng], { icon: markerIcon })
        .addTo(mapInstance)
        .bindPopup(
          `<b>${city.name}</b>${city.isCapital ? "<br>Capital City" : city.isCommercial ? "<br>Commercial Hub" : ""}`,
        )
    })
  }

  const getUserLocation = (mapInstance) => {
    setIsLoading(true)

    if (navigator.geolocation) {
      try {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords

            // Check if location is within Nigeria (rough boundaries)
            const isInNigeria = isLocationInNigeria(latitude, longitude)

            // Use the location if in Nigeria, otherwise use a default location
            const userLoc = isInNigeria ? { lat: latitude, lng: longitude } : { lat: 6.5244, lng: 3.3792 } // Default to Lagos if not in Nigeria

            setUserLocation(userLoc)

            // Create user marker with red pointer
            const userIcon = window.L.divIcon({
              className: "user-location-icon",
              html: `<div style="background-color: #ff0000; 
                                width: 16px; 
                                height: 16px; 
                                border-radius: 50%; 
                                border: 3px solid white;
                                box-shadow: 0 0 6px rgba(0,0,0,0.5);">
                     </div>`,
              iconSize: [22, 22],
              iconAnchor: [11, 11],
            })

            // Add user marker to map
            const marker = window.L.marker([userLoc.lat, userLoc.lng], { icon: userIcon })
              .addTo(mapInstance)
              .bindPopup("<b>Your Location</b>")
              .openPopup()

            setUserMarker(marker)

            // Center map on user's location
            mapInstance.setView([userLoc.lat, userLoc.lng], 10)

            // Calculate and display routes to destinations
            calculateRoutes(userLoc, mapInstance)

            setIsLoading(false)

            // Set up location watching for real-time updates
            navigator.geolocation.watchPosition(
              (newPosition) => {
                const { latitude: newLat, longitude: newLng } = newPosition.coords

                // Update user location
                const newUserLoc = { lat: newLat, lng: newLng }
                setUserLocation(newUserLoc)

                // Update marker position
                if (marker) {
                  marker.setLatLng([newLat, newLng])
                }

                // Recalculate routes
                calculateRoutes(newUserLoc, mapInstance)
              },
              (error) => {
                console.warn("Error watching position:", error)
              },
              { enableHighAccuracy: true, maximumAge: 10000, timeout: 10000 },
            )
          },
          (error) => {
            console.error("Error getting location:", error)
            setLocationError(`Location access denied: ${error.message}`)
            setIsLoading(false)

            // If location access is denied, center on Delta State (between Asaba and Onitsha)
            mapInstance.setView([6.1858, 6.7584], 11)

            // Show both destinations
            const bounds = window.L.latLngBounds([
              [destinations.asaba.lat, destinations.asaba.lng],
              [destinations.onitsha.lat, destinations.onitsha.lng],
            ])
            mapInstance.fitBounds(bounds, { padding: [50, 50] })
          },
          { enableHighAccuracy: true, timeout: 10000, maximumAge: 0 },
        )
      } catch (error) {
        console.error("Geolocation error:", error)
        setLocationError("Unable to access location services")
        setIsLoading(false)

        // Center on Delta State (between Asaba and Onitsha)
        mapInstance.setView([6.1858, 6.7584], 11)
      }
    } else {
      setLocationError("Geolocation is not supported by your browser")
      setIsLoading(false)

      // Center on Delta State (between Asaba and Onitsha)
      mapInstance.setView([6.1858, 6.7584], 11)
    }
  }

  const isLocationInNigeria = (lat, lng) => {
    // Rough boundaries of Nigeria
    const nigeriaBox = {
      north: 13.9, // Northern boundary
      south: 4.2, // Southern boundary
      west: 2.7, // Western boundary
      east: 14.7, // Eastern boundary
    }

    return lat >= nigeriaBox.south && lat <= nigeriaBox.north && lng >= nigeriaBox.west && lng <= nigeriaBox.east
  }

  const calculateRoutes = (from, mapInstance) => {
    // Calculate routes to both destinations
    const asabaInfo = calculateRoute(from, destinations.asaba, mapInstance, "#4CAF50")
    const onitshaInfo = calculateRoute(from, destinations.onitsha, mapInstance, "#FF9800")

    setRouteInfo({
      asaba: asabaInfo,
      onitsha: onitshaInfo,
    })

    // Fit map to show user and both destinations
    const points = [
      [from.lat, from.lng],
      [destinations.asaba.lat, destinations.asaba.lng],
      [destinations.onitsha.lat, destinations.onitsha.lng],
    ]

    const bounds = window.L.latLngBounds(points)
    mapInstance.fitBounds(bounds, { padding: [50, 50] })
  }

  const calculateRoute = (from, to, mapInstance, color) => {
    // Calculate distance in kilometers
    const distance = calculateDistance(from.lat, from.lng, to.lat, to.lng)

    // Draw line between user and destination
    const line = window.L.polyline(
      [
        [from.lat, from.lng],
        [to.lat, to.lng],
      ],
      {
        color: color,
        weight: 3,
        opacity: 0.7,
        dashArray: "10, 10",
      },
    ).addTo(mapInstance)

    // Calculate bearing for direction
    const bearing = calculateBearing(from.lat, from.lng, to.lat, to.lng)
    const direction = getDirectionFromBearing(bearing)

    return {
      distance: distance.toFixed(2),
      direction: direction,
      line: line,
    }
  }

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371 // Radius of the earth in km
    const dLat = deg2rad(lat2 - lat1)
    const dLon = deg2rad(lon2 - lon1)
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    return R * c // Distance in km
  }

  const calculateBearing = (lat1, lon1, lat2, lon2) => {
    const y = Math.sin(deg2rad(lon2 - lon1)) * Math.cos(deg2rad(lat2))
    const x =
      Math.cos(deg2rad(lat1)) * Math.sin(deg2rad(lat2)) -
      Math.sin(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.cos(deg2rad(lon2 - lon1))
    const brng = Math.atan2(y, x)
    return (rad2deg(brng) + 360) % 360
  }

  const getDirectionFromBearing = (bearing) => {
    const directions = ["North", "Northeast", "East", "Southeast", "South", "Southwest", "West", "Northwest"]
    return directions[Math.round(bearing / 45) % 8]
  }

  const deg2rad = (deg) => {
    return deg * (Math.PI / 180)
  }

  const rad2deg = (rad) => {
    return rad * (180 / Math.PI)
  }

  // Handle search input change
  const handleSearchChange = (e) => {
    const value = e.target.value
    setSearchTerm(value)

    if (value.trim() === "") {
      setSearchResults([])
      return
    }

    // First check our predefined cities
    const cityResults = cities.filter((city) => city.name.toLowerCase().includes(value.toLowerCase()))

    if (cityResults.length > 0) {
      setSearchResults(cityResults)
      return
    }

    // If no predefined cities match, search using Nominatim API
    searchLocation(value)
  }

  // Search for locations using OpenStreetMap Nominatim API
  const searchLocation = async (query) => {
    setIsSearching(true)

    try {
      // Limit search to Nigeria with the countrycodes parameter
      const response = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&countrycodes=ng&limit=5`,
      )

      if (!response.ok) {
        throw new Error("Network response was not ok")
      }

      const data = await response.json()

      // Format the results to match our city structure
      const formattedResults = data.map((item) => ({
        name: item.display_name.split(",")[0],
        fullName: item.display_name,
        lat: Number.parseFloat(item.lat),
        lng: Number.parseFloat(item.lon),
        type: item.type,
      }))

      setSearchResults(formattedResults)
    } catch (error) {
      console.error("Error searching for location:", error)
      // If API fails, just show a message
      setSearchResults([{ name: "Search failed. Try again.", isError: true }])
    } finally {
      setIsSearching(false)
    }
  }

  // Handle city selection from search results
  const handleCitySelect = (location) => {
    if (location.isError) return

    if (map) {
      map.setView([location.lat, location.lng], 12)

      // Add a temporary marker for the searched location
      const searchIcon = window.L.divIcon({
        className: "search-result-icon",
        html: `<div style="background-color: #9c27b0; 
                          width: 12px; 
                          height: 12px; 
                          border-radius: 50%; 
                          border: 2px solid white;
                          box-shadow: 0 0 4px rgba(0,0,0,0.3);">
               </div>`,
        iconSize: [16, 16],
        iconAnchor: [8, 8],
      })

      const marker = window.L.marker([location.lat, location.lng], { icon: searchIcon })
        .addTo(map)
        .bindPopup(`<b>${location.name}</b>${location.fullName ? `<br><small>${location.fullName}</small>` : ""}`)
        .openPopup()

      // Remove the marker after 10 seconds
      setTimeout(() => {
        if (map) map.removeLayer(marker)
      }, 10000)
    }

    setSearchTerm(location.name)
    setSearchResults([])
  }

  // Navigate to user's location
  const centerOnUser = () => {
    if (map && userLocation) {
      map.setView([userLocation.lat, userLocation.lng], 14)
      if (userMarker) {
        userMarker.openPopup()
      }
    }
  }

  // Navigate to Asaba
  const centerOnAsaba = () => {
    if (map) {
      map.setView([destinations.asaba.lat, destinations.asaba.lng], 14)
    }
  }

  // Navigate to Onitsha
  const centerOnOnitsha = () => {
    if (map) {
      map.setView([destinations.onitsha.lat, destinations.onitsha.lng], 14)
    }
  }

  // Toggle info panel visibility (for mobile)
  const toggleInfoPanel = () => {
    setInfoVisible(!infoVisible)
  }

  return (
    <Card className="w-full h-[calc(100vh-2rem)] overflow-hidden rounded-lg shadow-lg">
      <div className="relative w-full h-full">
        {/* Map container */}
        <div ref={mapRef} className="w-full h-full z-0"></div>

        {/* Loading indicator */}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-70 z-50">
            <div className="text-center">
              <div className="w-12 h-12 border-4 border-t-blue-500 border-blue-200 rounded-full animate-spin mx-auto mb-2"></div>
              <p className="text-gray-700">Loading map and locating you...</p>
            </div>
          </div>
        )}

        {/* Location error message */}
        {locationError && (
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-md z-20 max-w-[90%] md:max-w-md text-center">
            <p className="font-semibold">{locationError}</p>
            <p className="text-sm mt-1">
              For location services to work, please:
              <br />• Ensure you're using HTTPS
              <br />• Allow location access when prompted
              <br />• Enable location services on your device
            </p>
          </div>
        )}

        {/* Search box */}
        <div className="absolute top-4 left-4 bg-white rounded-md shadow-md w-[calc(100%-2rem)] md:w-64 z-10">
          <div className="flex items-center p-2">
            {isSearching ? (
              <Loader2 className="h-5 w-5 text-gray-400 mr-2 animate-spin" />
            ) : (
              <Search className="h-5 w-5 text-gray-400 mr-2" />
            )}
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search any location in Nigeria"
              className="w-full bg-transparent border-none focus:outline-none text-sm"
            />
            {searchTerm && (
              <button onClick={() => setSearchTerm("")} className="text-gray-400 hover:text-gray-600">
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          {/* Search results */}
          {searchResults.length > 0 && (
            <div className="max-h-60 overflow-y-auto border-t">
              {searchResults.map((location, index) => (
                <div
                  key={index}
                  className={`p-2 hover:bg-gray-100 cursor-pointer ${location.isError ? "text-red-500" : ""}`}
                  onClick={() => !location.isError && handleCitySelect(location)}
                >
                  <div className="flex items-center">
                    {!location.isError && (
                      <div
                        className="w-3 h-3 rounded-full mr-2 flex-shrink-0"
                        style={{
                          backgroundColor: location.isMainBranch
                            ? "#4CAF50"
                            : location.isSecondBranch
                              ? "#FF9800"
                              : location.isCapital
                                ? "#ff4433"
                                : location.isCommercial
                                  ? "#8833ff"
                                  : "#9c27b0",
                        }}
                      ></div>
                    )}
                    <div>
                      <div className="truncate">{location.name}</div>
                      {location.fullName && <div className="text-xs text-gray-500 truncate">{location.fullName}</div>}
                      {location.isMainBranch && <span className="text-xs text-green-600">Main Branch</span>}
                      {location.isSecondBranch && <span className="text-xs text-orange-600">Second Branch</span>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Mobile toggle for info panel */}
        {userLocation && (
          <button
            onClick={toggleInfoPanel}
            className="md:hidden absolute bottom-20 right-4 bg-white p-2 rounded-full shadow-md z-10"
          >
            {infoVisible ? <X className="h-5 w-5" /> : <Navigation className="h-5 w-5" />}
          </button>
        )}

        {/* Destinations and navigation info */}
        {userLocation && (
          <div
            className={`absolute bottom-4 left-4 bg-white rounded-md shadow-md p-3 z-10 max-w-xs transition-all duration-300 
                      ${infoVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0 md:translate-x-0 md:opacity-100"}`}
          >
            <h3 className="font-bold text-lg mb-2">JelaCafe Locations</h3>

            {/* Asaba info */}
            <div className="mb-2 pb-2 border-b border-gray-200">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full mr-2 bg-green-500"></div>
                <h4 className="font-semibold flex items-center">
                  <Briefcase className="h-4 w-4 mr-1 text-green-600" />
                  Asaba (Main Branch)
                </h4>
              </div>
              {routeInfo.asaba && (
                <p className="text-sm mt-1 pl-5">
                  <span className="font-medium">Distance:</span> {routeInfo.asaba.distance} km
                  <br />
                  <span className="font-medium">Direction:</span> {routeInfo.asaba.direction}
                </p>
              )}
            </div>

            {/* Onitsha info */}
            <div className="mb-3">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full mr-2 bg-orange-500"></div>
                <h4 className="font-semibold flex items-center">
                  <Building className="h-4 w-4 mr-1 text-orange-600" />
                  Onitsha (Second Branch)
                </h4>
              </div>
              {routeInfo.onitsha && (
                <p className="text-sm mt-1 pl-5">
                  <span className="font-medium">Distance:</span> {routeInfo.onitsha.distance} km
                  <br />
                  <span className="font-medium">Direction:</span> {routeInfo.onitsha.direction}
                </p>
              )}
            </div>

            {/* Navigation buttons */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={centerOnUser}
                className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded-md text-xs flex items-center"
              >
                <Navigation className="h-3 w-3 mr-1" /> Your Location
              </button>
              <button
                onClick={centerOnAsaba}
                className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded-md text-xs flex items-center"
              >
                <Briefcase className="h-3 w-3 mr-1" /> Asaba
              </button>
              <button
                onClick={centerOnOnitsha}
                className="bg-orange-500 hover:bg-orange-600 text-white px-2 py-1 rounded-md text-xs flex items-center"
              >
                <Building className="h-3 w-3 mr-1" /> Onitsha
              </button>
            </div>
          </div>
        )}

        {/* Map attribution */}
        <div className="absolute bottom-0 right-0 bg-white px-2 py-1 text-xs text-gray-600 z-10">
          JelaCafe Map | Nigeria
        </div>
      </div>
    </Card>
  )
}

export default JelaCafeMap
