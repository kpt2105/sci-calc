console.log("test...");
function back() {
  window.location.href = "/";
}
function contact() {
  window.location.href = "/contact_form/indexcontact.html";
}

function eVolts_Joules() {
  var x = document.getElementById("eVolts-item");
  var y = document.getElementById("Joules-item");
  var volt = parseInt(x.value);
  var joule = parseInt(y.value);
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
