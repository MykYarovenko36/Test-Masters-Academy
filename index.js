const wrapperContainer = document.querySelector("._wrapper");
const inputButton = document.querySelector(".input_button");
const inputField = document.querySelector(".input_field");
const resultList = document.querySelector(".result__container");
const clearButton = document.querySelector(".clear_button");
inputButton.addEventListener('click', showResult);
function showResult() {
  let inputText = inputField.value;
  const valid = isValid(inputText);
  resultList.appendChild(resultItem(inputText, valid));
  inputField.value = "";
};
inputField.addEventListener('keydown', (e) => {
    if (e.code === "NumpadEnter" || e.code === "Enter" ) {
      showResult()
    }
});
clearButton.addEventListener('click', () => {
  resultList.innerHTML = "";
});
const isValid = (data) => {
  const regExp = /[#%&()*+<>.,$-/:-?{-~!"^_`\[\]@]/;
  return regExp.test(data)
};
const resultItem = (data, item) => {
  const element = document.createElement("p");
    element.innerText = data;
  const array = Array.from(data);
  if (item === false && array.length > 3) { 
    element.style.color = "rgb(89, 219, 56)";
      } else {
        element.style.color = "rgb(236, 20, 38)";
  }
  return element
};

