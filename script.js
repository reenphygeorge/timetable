function chem_amt() {
  window.open("https://meet.google.com/uhu-gbvq-fhp", "_blank");
}

function chem_ash() {
  window.open("https://meet.google.com/spj-rroj-oaz ", "_blank");
}

function cp() {
  window.open("https://meet.google.com/yga-hqyx-bgt", "_blank");
}

function bee() {
  window.open("https://meet.google.com/pmc-sxhr-yrw", "_blank");
}

function bec() {
  window.open("http://meet.google.com/tse-ncyr-njs", "_blank");
}

function maths() {
  window.open("https://meet.google.com/wgm-jbym-emp", "_blank");
}

function eg() {
  window.open("https://meet.google.com/hsh-ocyv-wen", "_blank");
}

function pcsj() {
  window.open("https://meet.google.com/pvo-bdjc-wvy", "_blank");
}

function pcsr() {
  window.open("https://meet.google.com/fov-kjyv-hnk", "_blank");
}

function pcfr() {
  window.open("#", "_blank");
}

const drop = document.querySelector(".dp_dwn");
const mon = document.querySelector("#mon");
const tue = document.querySelector("#tue");
const wed = document.querySelector("#wed");
const thu = document.querySelector("#thu");
const fri = document.querySelector("#fri");
const sat = document.querySelector("#sat");

function monday() {
  mon.classList.remove("d-none");
  tue.classList.add("d-none");
  wed.classList.add("d-none");
  thu.classList.add("d-none");
  fri.classList.add("d-none");
  sat.classList.add("d-none");
  drop.innerHTML = "Monday ";
}

function tueday() {
  mon.classList.add("d-none");
  tue.classList.remove("d-none");
  wed.classList.add("d-none");
  thu.classList.add("d-none");
  fri.classList.add("d-none");
  sat.classList.add("d-none");
  drop.innerHTML = "Tuesday ";
}

function wednesday() {
  mon.classList.add("d-none");
  tue.classList.add("d-none");
  wed.classList.remove("d-none");
  thu.classList.add("d-none");
  fri.classList.add("d-none");
  sat.classList.add("d-none");
  drop.innerHTML = "Wednesday ";
}

function thursday() {
  mon.classList.add("d-none");
  tue.classList.add("d-none");
  wed.classList.add("d-none");
  thu.classList.remove("d-none");
  fri.classList.add("d-none");
  sat.classList.add("d-none");
  drop.innerHTML = "Thursday ";
}

function friday() {
  mon.classList.add("d-none");
  tue.classList.add("d-none");
  wed.classList.add("d-none");
  thu.classList.add("d-none");
  fri.classList.remove("d-none");
  sat.classList.add("d-none");
  drop.innerHTML = "Friday ";
}

function saturday() {
  mon.classList.add("d-none");
  tue.classList.add("d-none");
  wed.classList.add("d-none");
  thu.classList.add("d-none");
  fri.classList.add("d-none");
  sat.classList.remove("d-none");
  drop.innerHTML = "Saturday ";
}

function auto() {
  const d = new Date();
  if (d.getDay() == 1) {
      monday();
      drop.innerHTML = "Auto ";
  }
  else if (d.getDay() == 2) {
      tueday();
      drop.innerHTML = "Auto ";
  }
  else if (d.getDay() == 3) {
      wednesday();
      drop.innerHTML = "Auto ";
  } 
  else if (d.getDay() == 4) {
      thursday();
      drop.innerHTML = "Auto ";
  }
  else if (d.getDay() == 5) {
      friday();
      drop.innerHTML = "Auto ";
  }
  if (d.getDay() == 6) {
      saturday();
      drop.innerHTML = "Auto ";
  }
}

const deviceWidth = window.matchMedia("(max-width:767px)");
if(deviceWidth.matches) {
    auto();
}
