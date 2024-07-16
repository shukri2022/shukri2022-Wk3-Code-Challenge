// JavaScript for Interactive Shopping List

// Get references to the DOM elements
const itemInput = document.getElementById('itemInput');
const addItemButton = document.getElementById('addItemButton');
const clearListButton = document.getElementById('clearListButton');
const shoppingList = document.getElementById('shoppingList');

// Array to store shopping list items
let shoppingItems = [];

// Function to add an item to the list
function addItem() {
  const itemText = itemInput.value.trim();
  if (itemText !== '') {
    shoppingItems.push(itemText);
    updateList();
    itemInput.value = '';
  }
}

// Function to update the shopping list in the DOM
function updateList() {
  shoppingList.innerHTML = '';
  shoppingItems.forEach((item, index) => {
    const listItem = document.createElement('li');
    listItem.textContent = item;
    listItem.addEventListener('click', () => markAsPurchased(index));
    shoppingList.appendChild(listItem);
  });
}

// Function to mark an item as purchased
function markAsPurchased(index) {
  const listItem = shoppingList.children[index];
  listItem.classList.toggle('purchased');
}

// Function to clear the list
function clearList() {
  shoppingItems = [];
  updateList();
}

// Attach event listeners
addItemButton.addEventListener('click', addItem);
clearListButton.addEventListener('click', clearList);

// Optional: Allow adding items with the Enter key
itemInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addItem();
  }
});
