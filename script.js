const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
const close = document.getElementById("close");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

// login page validation

// function seterror(id, error) {
//   element = document.getElementById(id);
//   element.getElementByClassName("formerror")[0].innerHTML = error;
// }

// function validateForm() {
//   var returnval = true;
//   var name = document.forms["myForm"]["fname"].value;
//   if (name.length < 5) {
//     seterror("name", "Length of name is too short");
//     returnval = false;
//   }

//   return returnval;
// }



//  Cart Page


// Function to update cart totals
function updateCartTotals() {
  let cartRows = document.querySelectorAll('tbody tr');
  let total = 0;

  cartRows.forEach((row) => {
      let price = parseFloat(row.querySelector('td:nth-child(4)').innerText.replace('$', ''));
      let quantity = row.querySelector('input').value;
      let subtotal = price * quantity;

      // Update the subtotal for the row
      row.querySelector('td:nth-child(6)').innerText = `$${subtotal.toFixed(2)}`;
      total += subtotal;
  });

  // Update the Cart Totals section
  document.querySelector('#subtotal table tr:nth-child(1) td:nth-child(2)').innerText = `$${total.toFixed(2)}`;
  document.querySelector('#subtotal table tr:nth-child(3) td:nth-child(2)').innerText = `$${total.toFixed(2)}`;
}

// Function to remove items from the cart
function removeItem(event) {
  event.preventDefault();
  let row = event.target.closest('tr');
  row.remove();
  updateCartTotals(); // Update totals after removing an item
}

// Function to handle quantity change
function changeQuantity(event) {
  let input = event.target;
  if (input.value <= 0) {
      input.value = 1; // Prevent quantity from going below 1
  }
  updateCartTotals(); // Update totals when quantity is changed
}

// Event listeners for remove buttons
document.querySelectorAll('tbody tr td a').forEach(button => {
  button.addEventListener('click', removeItem);
});

// Event listeners for quantity input change
document.querySelectorAll('tbody tr td input').forEach(input => {
  input.addEventListener('change', changeQuantity);
});

// Initialize cart totals on page load
window.onload = updateCartTotals;



