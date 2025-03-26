/* eslint-disable react/prop-types */
import {useState } from "react";

const YourLOCATION = { lat: 24.9048, lng: 91.86 }; // Set your location

const LocationCheck = ({ onLocationCheck }) => {
  const [isInRange, setIsInRange] = useState(false);
  const [error, setError] = useState(null);

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Earth's radius in kilometers
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in kilometers
  };

  const deg2rad = (deg) => deg * (Math.PI / 180);

  const checkLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const distance = calculateDistance(
            latitude,
            longitude,
            YourLOCATION.lat,
            YourLOCATION.lng
          );
          const inRange = distance <= 9; // 9 km range
          setIsInRange(inRange);
          setError(null); // Clear any previous error
          onLocationCheck(inRange);
        },
        () => {
          setError(
            "Unable to retrieve location. Please allow location access in browser settings."
          );
          onLocationCheck(false);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
      onLocationCheck(false);
    }
  };

  return (
    <div>
      <button onClick={checkLocation} className="px-3 py-1 bg-blue-500 text-white rounded">
        Check My Location
      </button>

      {error ? (
        <p className="text-xs text-red-800">{error}</p>
      ) : (
        <div>
          {isInRange ? (
            <p className="text-xs text-green-800">✅ You are within delivery range!</p>
          ) : (
            <p className="text-xs text-red-800">❌ You are outside our delivery range.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default LocationCheck;
