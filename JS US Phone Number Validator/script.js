const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");


checkBtn.addEventListener("click", () => {
  const regex = /^(1\s?)?(\([0-9]{3}\)|[0-9]{3})([\s-]?)[0-9]{3}([\s-]?)[0-9]{4}$/
  
  if (userInput.value === "") {
    alert("Please provide a phone number")
    }

  const pTag = document.createElement('p');
  pTag.className = 'results-text';
  regex.test(userInput.value)
    ? (pTag.style.color = '#00ff00')
    : (pTag.style.color = '#ff0000');
  pTag.appendChild(
    document.createTextNode(
      `${regex.test(userInput.value) ? 'Valid' : 'Invalid'} US number: ${userInput.value}`
    )
  );
  resultsDiv.appendChild(pTag);

  userInput.value = "";
})

clearBtn.addEventListener("click", () => {
  resultsDiv.textContent = "";
});

userInput.addEventListener("keydown", e => {
  if (e.key === "Enter") {
    checkBtn.click();
  }
});