// The event listener for the button.
document.getElementById("btnSubmit").addEventListener("click", getValues);

// Get the values from the page.
function getValues() {
  let startValue = document.getElementById("startValue").value;
  let endValue = document.getElementById("endValue").value;

  // Change the values of the number fields to integers and round them to whole numbers.
  startValue = Math.round(parseInt(startValue));
  endValue = Math.round(parseInt(endValue));

  // Check to see if the number values are in fact integers.
  if (startValue < 1 && startValue > 100) {
    alert("Please choose a starting number between 1 and 100");

  // Check to see if the ending number is between 0 and 100 and not a negative number
  } else if ((endValue < 0 && endValue > 100) || Math.sign(endValue) === -1) {
    alert("Please choose an ending number between 0 and 100");

  // Check to make sure the starting number is larger than the ending number.
  } else if (startValue <= endValue) {
    alert("The starting number has to be larger than the ending number");

  } else {
    // Call the generateNumbers function with the start and end values
    // passed via the arguments and assign it to the numbers variable.
    let numbers = generateNumbers(startValue, endValue);

    // Call the displayNumbers function and pass the numbers argument to it.
    displayNumbers(numbers);
  }
}

// This function generates the numbers in between the number values and assigns them to an array.
function generateNumbers(sValue, eValue) {
  let numbers = [];
  let i = sValue;
  for (i; i >= eValue; i--) {
    numbers.push(i);
  }
  return numbers;
}

// This function will write the numbers to the html page.
function displayNumbers(numbers) {
  let templateRows = "";

  // The for loop iterates through the numbers array,
  // checks to see if the number is odd or even,
  // then assigns the odd or even css class to them respectively.

  for (let i = 0; i <= numbers.length-1; i++) {
    let className = "even";
    let number = numbers[i];

    if (number % 2 == 0) {
      className = "even";
    } else {
      className = "odd";
    }

    // Now the below line puts that number in some html markup.
  templateRows = templateRows + `<tr><td class="${className}">${number}</td></tr>`;
    // The line below is a modified version for prism to correctly render in the code section of the code page.
    // templateRows += `&lt;tr>&lt;td class="${className}" >${number}&lt;/td>&lt;/tr>
  }
  // The next line inserts the html into the html page.
  document.getElementById("results").innerHTML = templateRows;
}
