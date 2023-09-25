let input = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");

let arr = Array.from(buttons);

let string = "";
arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      input.value = string;
    } else if (e.target.innerHTML == "AC") {
      string = "";
      input.value = string;
    } else if (e.target.innerHTML == "DEL") {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else {
      string += e.target.innerHTML;
      input.value = string;
    }
  });
});

document.addEventListener("keydown", function (event) {
  // Get the key code of the pressed key
  const key = event.key;
  console.log(key);

  // Check for the corresponding actions based on the key pressed
  switch (key) {
    case "1":
      string += "1";
      input.value = string;

      break;
    case "2":
      string += "2";
      input.value = string;
      break;
    case "3":
      string += "3";
      input.value = string;
      break;
    case "4":
      string += "4";
      input.value = string;
      break;
    case "5":
      string += "5";
      input.value = string;
      break;
    case "6":
      string += "6";
      input.value = string;
      break;
    case "7":
      string += "7";
      input.value = string;
      break;
    case "8":
      string += "8";
      input.value = string;
      break;
    case "9":
      string += "9";
      input.value = string;
      break;
    case "0":
      string += "0";
      input.value = string;
      break;
    case "+":
      string += "+";
      input.value = string;
      break;
    case "-":
      string += "-";
      input.value = string;
      break;
    case "*":
      string += "*";
      input.value = string;
      break;
    case "/":
      string += "/";
      input.value = string;
      break;
    case ".":
      string += ".";
      input.value = string;
      break;
    case "%":
      string += "%";
      input.value = string;
      break;
    case "Escape":
      string = "";
      input.value = string;
      break;
    case ".":
      string += ".";
      input.value = string;
      break;
    case "Enter":
      string = eval(string);
      input.value = string;
      break;
    case "Backspace":
      string = string.substring(0, string.length - 1);
      input.value = string;
      break;
    default:
      break;
  }
});
