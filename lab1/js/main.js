let getLocation = document.getElementById("getLocation");
let clearLocation = document.getElementById("clearLocation");
let id;
let openedWindow;
function getLoc() {
  id = navigator.geolocation.watchPosition(showPos, handleErr, options);
}

function showPos(position) {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  openedWindow = window.open(
    "http://maps.google.com/maps?q=" + lat + ",+" + long,
    "openedWindow",
    "height=400,width=400"
  );
}

function stopWatch(id) {
  navigator.geolocation.clearWatch(id);
  openedWindow.close();
}

getLocation.addEventListener("click", () => {
  getLoc();
});

clearLocation.addEventListener("click", () => {
  stopWatch(id);
});

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
};
