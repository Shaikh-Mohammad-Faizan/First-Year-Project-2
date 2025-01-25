let display = document.getElementById('display');

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function deleteChar() {
  display.value = display.value.slice(0, -1);
}

function calculate(operation) {
  try {
    if (operation === 'sqrt') {
      display.value = Math.sqrt(eval(display.value));
    } else if (operation === 'pow') {
      display.value = Math.pow(eval(display.value), 2);
    } else if (operation === 'sin') {
      display.value = Math.sin(eval(display.value) * Math.PI / 180).toFixed(5);
    } else if (operation === 'cos') {
      display.value = Math.cos(eval(display.value) * Math.PI / 180).toFixed(5);
    } else if (operation === 'tan') {
      display.value = Math.tan(eval(display.value) * Math.PI / 180).toFixed(5);
    } else if (operation === 'log') {
      display.value = Math.log10(eval(display.value)).toFixed(5);
    } else {
      display.value = eval(display.value);
    }
  } catch (error) {
    display.value = 'Error';
  }
}
