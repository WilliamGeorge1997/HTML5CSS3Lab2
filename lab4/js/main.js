let latitude = document.getElementById("latitude")
let longitude = document.getElementById("longitude")
function getLoc() {
  navigator.geolocation.getCurrentPosition(showPos, handleErr, options);
}

function showPos(position) {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
 latitude.setAttribute('content',lat)
 longitude.setAttribute('content',long)
}




function handleErr(x) {
  switch (x.code) {
    case 0:
      alert(x.message);
      break;
    case 1:
      alert(x.message);
      break;
    case 2:
      alert(x.message);
      break;
    case 3:
      alert(x.message);
      break;
  }
}

let options = {
  enableHighAccuracy: false,
  timeout: Infinity,
  maximumAge: 0,
};


console.log(latitude , longitude)
getLoc()