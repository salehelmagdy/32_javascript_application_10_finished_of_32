let hr = document.querySelector("#hrs");
let mn = document.querySelector("#min");
let sc = document.querySelector("#sec");

setInterval(() => {
  let day = new Date();

  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * 6;
  let ss = day.getSeconds() * 6;

  hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  mn.style.transform = `rotateZ(${mm + ss / 60}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`;

  //   Digital Clock

  let hour = document.getElementById("hours");
  let minutes = document.getElementById("minutes");
  let seconds = document.getElementById("seconds");
  let ampm = document.getElementById("ampm");

  let h = day.getHours();
  let m = day.getMinutes();
  let s = day.getSeconds();

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hour.innerHTML = h;
  minutes.innerHTML = m;
  seconds.innerHTML = s;

  var am = h >= 12 ? "PM" : "Am";

  ampm.innerHTML = am;

  if (h > 12) {
    h = h - 12;
  }
});
