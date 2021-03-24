var x;
function calc_0() {
  x = document.getElementById("browser").value;
  console.log(x);
  if (x == "eV to Joule") {
    document.location = "/calcs/calc0";
  } else if (x == "Speed of light to km/h") {
    document.location = "/calcs/calc1";
  } else if (x == "Seconds to Planck Times") {
    document.location = "/calcs/calc2";
  } else if (x == "Meters to Planck Lengths") {
    document.location = "/calcs/calc3";
  } else if (x == "Lightyears to Km") {
    document.location = "/calcs/calc4";
  }
  return false;
}
function contact() {
  window.location.href = "/contact";
}
