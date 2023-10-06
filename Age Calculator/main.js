let userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];
let result = document.getElementById("result");
// console.log(userInput.max);

function calculateAge() {
  let birthDay = new Date(userInput.value);

  let d1 = birthDay.getDate();
  let m1 = birthDay.getMonth() + 1;
  let y1 = birthDay.getFullYear();

  let today = new Date();

  let d2 = today.getDate();
  let m2 = today.getMonth() + 1;
  let y2 = today.getFullYear();

  let d3, m3, y3;

  y3 = y2 - y1;

  if (m2 >= m1) {
    m3 = m2 - m1;
  } else {
    y3--;
    m3 = 12 + m2 - m1;
  }

  if (d2 >= d1) {
    d3 = d2 - d1;
  } else {
    m3--;
    d3 = getDaysInMonths(y1, m1) + d2 - d1;
  }
  if (m3 < 0) {
    m3 = 11;
    y3--;
  }

  function getDaysInMonths(year, month) {
    return new Date(year, month, 0).getDate();
  }

  result.innerHTML = `Yor are <span>${y3}</span> years, <span>${m3}</span> months, <span>${d3}</span> days`;

  console.log(y3, m3, d3);
  console.log(result.innerHTML);
}
