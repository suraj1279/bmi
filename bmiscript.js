let heightInput = document.querySelector("#height");
let weightInput = document.querySelector("#weight");
let button = document.querySelector("#btn");
let result = document.querySelector("#result");

button.addEventListener("click", () => {
  let height = parseFloat(heightInput.value);
  let weight = parseFloat(weightInput.value);
  console.log(weight);
  if (isNaN(height) || height <= 0) {
    result.innerHTML = "Provide a valid Height!";
  } else if (isNaN(weight) || weight <= 0) {
    result.innerHTML = "Provide a valid Weight!";
  } else {
    let bmi = (weight / ((height * height)
    / 10000)).toFixed(2);
    result.innerHTML = "BMI: " + bmi;
        if (bmi < 18.6) result.innerHTML =
            `Under Weight : <span>${bmi}</span>`;
 
        else if (bmi >= 18.6 && bmi < 24.9)
            result.innerHTML =
                `Normal : <span>${bmi}</span>`;
 
        else result.innerHTML =
            `Over Weight : <span>${bmi}</span>`;
    }
});
