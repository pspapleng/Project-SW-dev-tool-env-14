function callGeoLocation() {
    if (window.navigator.geolocation) {
        window.navigator.geolocation.getCurrentPosition(setPosition);
    } else { 
        alert("Geolocation is not supported by this browser.")
    }
}
function setPosition (position) {
    localStorage.setItem("userLocation", JSON.stringify({latitude: position.coords.latitude, longitude: position.coords.longitude}))
  }

export default callGeoLocation