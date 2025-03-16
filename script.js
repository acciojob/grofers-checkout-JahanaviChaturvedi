const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
  // Add your code here
  const prices = document.querySelectorAll(".price"); 
  let total = 0;

  prices.forEach(priceElement => {
    total += parseFloat(priceElement.textContent); 
  });

  const existingTotalRow = document.querySelector("#total-row"); 
  if (existingTotalRow) {
    existingTotalRow.remove();
  }

  const totalRow = document.createElement("tr");
  totalRow.id = "total-row"; 

  const totalCell = document.createElement("td");
  totalCell.colSpan = 2; 
  totalCell.textContent = "Total Price: Rs " + total; 

  totalRow.appendChild(totalCell); 

  const table = document.querySelector("table");
  table.appendChild(totalRow);

  const ansDiv = document.getElementById("ans");
  ansDiv.textContent = "Total Price: Rs " + total;
};

getSumBtn.addEventListener("click", getSum);
