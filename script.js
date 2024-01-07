function key(id) {
  let x = document.getElementById(id).textContent;
  document.getElementById("display").value += x;
}
function result() {
  let d = new Date();
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();
  let duration = "AM";
  if (s < 10) {
    s = "0" + s;
  }
  if (m < 10) {
    m = "0" + m;
  }
  if (h > 12) {
    duration = "PM";
  }

  if (h > 12) {
    h = h - 12;
  }
  if (h < 10) {
    h = "0" + h;
  }
  let time = h + ":" + m + ":" + s + ":" + duration;
  // setInterval(clock,1000);

  let result = document.getElementById("display").value;
  let final_result = +eval(result);
  document.getElementById("display").value = final_result;
  document.getElementById("store-history").innerHTML +=
    result +
    "=" +
    final_result +
    "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
    time +
    "</br>";
}
function reset() {
  document.getElementById("display").value = "";
}
function back() {
  let y = document.getElementById("display").value;
  document.getElementById("display").value = y.slice(0, -1);
}
function history() {
  document.getElementById("history").style.display = "block";
}
function hide() {
  document.getElementById("history").style.display = "none";
}
function menu() {
  document.getElementById("settings").style.display = "block";
}
function back_1() {
  document.getElementById("settings").style.display = "none";
}
function theme(id) {
  let z = document.getElementById(id).style.background;
  document.getElementsByTagName("main")[0].style.background = z;
}
function downloadDivData() {
  let div = document.getElementById("store-history");
  let options = {
    backgroundColor: "#000000" // Set the background color to black
  };
  html2canvas(div, options).then(function (canvas) {
    let img = document.createElement("img");
    img.src = canvas.toDataURL();
    let link = document.createElement("a");
    link.download = "store-historyData.jpg";
    link.href = img.src;

    // Add an event listener to the link to show a notification when the download is complete
    link.addEventListener("click", function () {
      // Replace this with your own notification code
      alert("Image downloaded!");
    });

    link.click();
  });
}

function themes() {
  var themesSection = document.getElementById("themes-section");

  if (themesSection.style.display == "none") {
    themesSection.style.display = "grid";
    themesSection.style.gap = "5px";
    themesSection.style.gridTemplateColumns = "repeat(2, 1fr)";
    themesSection.style.gridTemplateRows = "repeat(auto, auto)";
  } else {
    document.getElementById("themes-section").style.display = "none";
  }
}
function font(id) {
  let z = document.getElementById(id).style.fontFamily;
  document.getElementsByTagName("main")[0].style.fontFamily = z;
  document.getElementById("display").style.fontFamily = z;
}

function fonti() {
  if (fonts.style.display == "none") {
    fonts.style.display = "block";
  } else {
    fonts.style.display = "none";
  }
  // fonts.style.color='red';
}
function logout() {
  alert("Visit the history section to download your all calculated data");
}
