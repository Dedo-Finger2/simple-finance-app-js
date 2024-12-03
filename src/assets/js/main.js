document.querySelector("#values-form").addEventListener('submit', (event) => {
  event.preventDefault();

  const SelectCategory = document.querySelector("#category");
  const InputMoneyValue = document.querySelector("#money-value");

  const formObject = {
    category: SelectCategory.value,
    value: InputMoneyValue.value,
  };

  fetch("http://localhost:8000/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formObject),
  });

  console.log("teste");
});
