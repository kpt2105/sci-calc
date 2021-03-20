var x;
function calc_0() {
  x = document.getElementById("browser").value;
  console.log(x);
  if (x == "eV to Joule") {
    document.location = "/main-calc/index_main_calc-0.html";
  } else if (x == "Speed of light to km/h") {
    document.location = "/main-calc/index_main_calc-1.html";
  } else if (x == "Seconds to Planck Times") {
    document.location = "/main-calc/calc2.html";
  } else if (x == "Meters to Planck Lengths") {
    document.location = "/main-calc/calc3.html";
  }
  return false;
}
function contact() {
  window.location.href = "/contact.html";
}
