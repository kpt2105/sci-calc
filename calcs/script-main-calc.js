console.log("test...");
function back() {
  window.location.href = "/";
}
function contact() {
  window.location.href = "/contact";
}
// Constants
const h = 6.62607004 * Math.pow(10, -34);
const c = 299792458;

function eVolts_Joules() {
  var x = document.getElementById("eVolts-item");
  var y = document.getElementById("Joules-item");
  var volt = parseFloat(x.value);
  var joule = parseFloat(y.value);
  console.log(x.value);
  if (volt > 0) {
    var f = Math.pow(10, -19);
    var z = volt * 1.602176565 * f;
    y.value = z.toString();
  } else if (joule > 0) {
    var ff = Math.pow(10, 18);
    var zz = joule * 6.241509 * ff;
    x.value = zz.toString();
  } else {
    alert("ERROR");
    x.value = null;
    y.value = null;
  }
  return false;
}
function seconds_to_planckTime() {
  var x = document.getElementById("second-item");
  var y = document.getElementById("plancktime-item");
  var second = parseFloat(x.value);
  var plancktime = parseFloat(y.value);
  if (second > 0) {
    var f = Math.pow(10, 43);
    var z = second * 1.855094832 * f;
    y.value = z.toString();
  } else if (plancktime > 0) {
    var ff = Math.pow(10, -43);
    var zz = plancktime * 1.855094832 * ff;
    x.value = zz.toString();
  } else {
    alert("ERROR");
    x.value = null;
    y.value = null;
  }
  return false;
}
function meters_to_planckLength() {
  var x = document.getElementById("meters");
  var y = document.getElementById("planck-length");
  var meters = parseFloat(x.value);
  var plancklength = parseFloat(y.value);
  if (meters > 0) {
    var f = Math.pow(10, 34);
    var z = meters * 6.18724443 * f;
    y.value = z.toString();
  } else if (plancklength > 0) {
    var ff = Math.pow(10, -34);
    var zz = plancklength * 6.18724443 * ff;
    x.value = zz.toString();
  } else {
    alert("ERROR");
    x.value = null;
    y.value = null;
  }
  return false;
}
function lightyears_to_km() {
  var x = document.getElementById("lightyears");
  var y = document.getElementById("km");
  var lightyears = parseFloat(x.value);
  var km = parseFloat(y.value);
  if (lightyears > 0) {
    var f = Math.pow(10, 12);
    var z = lightyears * 9.4605284 * f;
    y.value = z.toString();
  } else if (km > 0) {
    var ff = Math.pow(10, -12);
    var zz = km * 9.4605284 * ff;
    x.value = zz.toString();
  } else {
    alert("ERROR");
    x.value = null;
    y.value = null;
  }
  return false;
}
// MODS to OG are needed
// the next two functions have 1 input + 1 output
function photon_hc_la() {
  var x = document.getElementById("lam");
  var y = document.getElementById("outputinJ");
  var lam = parseFloat(x.value);
  if (lam > 0) {
    var z = (h * c) / lam;
    y.value = z.toString();
  } else {
    alert("ERROR");
    x.value = null;
    y.value = null;
  }
  return false;
}
// MODS to OG are needed
function photon_fh() {
  var x = documant.getElementById("f");
  var y = docmant.getElementById("outputinJ");
  var f = parseFloat(x.value);
  if (f > 0) {
    var z = h * f;
    y.value = z.toString();
  } else {
    alert("ERROR");
    x.value = null;
    y.value = null;
  }
  return false;
}
// MODS to OG are needed
// in the next function two inputs + 1 output will be needed
function T_to_momentum() {
  var x = documant.getElementById("t"); // id="t"
  var y = documant.getElementById("mass"); // id="mass"
  var c = documant.getElementById("outputinkgm/s"); // id="outputinkgm/s"
  var t = parseFloat(x.value);
  var m = parseFloat(y.value);
  if (t > 0 && m > 0) {
    var z = 2 * m * t;
    var zp = Math.pow(z, 0.5);
    c.value = zp.toString();
  } else {
    alert("ERROR");
    x.value = null;
    y.value = null;
    c.value = null;
  }
  return false;
}
// MODS to OG are needed
// the next two functions have 1 input + 1 output
function un_c_E_time() {
  var x = document.getElementById("unInTime");
  var y = document.getElementById("outputUnInE");
  var unInTime = parseFloat(x.value);
  if (unInTime > 0) {
    var z = (h / 4) * Math.PI * unInTime;
    y.value = z.toString();
  } else {
    alert("ERROR");
    x.value = null;
    y.value = null;
  }
  return false;
}
function un_c_E_x() {
  var x = document.getElementById("unInP");
  var y = document.getElementById("outputUnInE");
  var p = parseFloat(x.value);
  if (p > 0) {
    var z = (h / 4) * Math.PI * p;
    y.value = z.toString();
  } else {
    alert("ERROR");
    x.value = null;
    y.value = null;
  }
  return false;
}
