var x;
function calc_0() {
  x = document.getElementById("browser").value;
  console.log(x);
  if (x == "eV to Joule") {
    document.location = "/main-calc/index_main_calc-0";
  } else if (x == "Speed of light to km/h") {
    document.location = "/main-calc/index_main_calc-1";
  } else if (x == "Seconds to Planck Times") {
    document.location = "/main-calc/calc2.html";
  }
  return false;
}
function contact() {
   window.location.href = "/contact";
}
