// Welcome message
console.log("Welcome to BookHive! 🛒");

// Show alert when page loads
// alert("BookHive is loading!");

// ====================
// VARIABLES - Store Data
// ====================

// const - for values that won't change
const SITE_NAME = "BookHive";
const FOUNDED_YEAR = 2026;
const PI = 3.14159;

// let - for values that WILL change
let cartCount = 0;
let totalAmount = 0;
let currentUser = null;

// Print values
console.log(SITE_NAME);
console.log("Founded:", FOUNDED_YEAR);
console.log("Cart count:", cartCount);

// Change let variables
cartCount = 3;
totalAmount = 1497;

console.log("New cart count:", cartCount);
console.log("Total amount: ₹" + totalAmount);

// Try changing a const - will ERROR
// SITE_NAME = "BookStore"; // Error!

// ====================
// DATA TYPES IN JAVASCRIPT
// ====================

// STRING - text
const bookTitle = "Wings of Fire";
const author = 'A.P.J. Abdul Kalam';
const description = `Bestseller since 1999`;

// NUMBER - any number
const price = 299;
const discount = 0.20;
const rating = 4.8;

// BOOLEAN - true or false
const isInStock = true;
const isOnSale = false;

// NULL - intentionally empty
const couponCode = null;

// UNDEFINED - not yet set
let promoMessage;

// Check the type
console.log(typeof bookTitle);
console.log(typeof price);
console.log(typeof isInStock);
console.log(typeof promoMessage);


// ====================
// TEMPLATE LITERALS
// ====================

// OLD way - hard to read
const message1 = "Hello, " + author + "! Your book '" + bookTitle + "' costs ₹" + price;

// NEW way with template literals
const message2 = `Hello, ${author}! Your book '${bookTitle}' costs ₹${price}`;

console.log(message1);
console.log(message2);

// Multi-line strings work too
const productCard = `
    <div class="book-card">
        <h3>${bookTitle}</h3>
        <p>by ${author}</p>
        <p>₹${price}</p>
    </div>
`;

console.log(productCard);


// ====================
// MATH FOR BOOKHIVE
// ====================

const bookPrice = 299;
const quantity = 3;

// Basic math
const subtotal = bookPrice * quantity;  // 897
const tax = subtotal * 0.05;            // 5% GST
const total = subtotal + tax;           // 941.85
const discountAmount = total * 0.10;          // 10% off
const finalPrice = total - discountAmount;    // 847.665

console.log("Subtotal:", subtotal);
console.log("Tax:", tax);
console.log("Total:", total);
console.log("After discount:", finalPrice);

// Round to 2 decimals (for currency)
console.log("Final:", finalPrice.toFixed(2)); // "847.67"

// Math object functions
console.log(Math.round(4.7));  // 5
console.log(Math.ceil(4.2));   // 5
console.log(Math.floor(4.9));  // 4
console.log(Math.max(10, 20)); // 20
console.log(Math.min(10, 20)); // 10
console.log(Math.random());    // Random number from 0 to less than 1


// ====================
// DOM MANIPULATION - First Time!
// ====================

const heroTitle = document.getElementById("hero-title");
const heroSubtitle = document.getElementById("hero-subtitle");

if (heroTitle && heroSubtitle) {
    console.log("Current title:", heroTitle.textContent);
    heroTitle.textContent = "Welcome to BookHive";

    const currentHour = new Date().getHours();
    let greeting;

    if (currentHour < 12) {
        greeting = "Good Morning! 🛒";
    } else if (currentHour < 17) {
        greeting = "Good Afternoon! 🛒";
    } else {
        greeting = "Good Evening! 🛒";
    }

    heroSubtitle.textContent =
        `${greeting} Find your next great read.`;
}

// ====================
// 3 WAYS TO SELECT ELEMENTS
// ====================

// 1. By ID (unique)
const heroTitleById = document.getElementById("hero-title");

// 2. By class (multiple)
const allBookCards = document.getElementsByClassName("book-card");

// 3. Modern way - querySelector (uses CSS selectors!)
const firstCard = document.querySelector(".book-card");
const titleByQuery = document.querySelector("#hero-title");
const allCardsQuery = document.querySelectorAll(".book-card");

// querySelector returns FIRST match
// querySelectorAll returns ALL matches

console.log("Number of book cards:", allCardsQuery.length);


// ====================
// UPDATE THE CART COUNT
// ====================

function updateCartCount() {
    const cartCountElement = document.getElementById("cart-count");

    if (cartCountElement) {
        cartCountElement.textContent = cartCount;
    }
}

// Test it - let's pretend the cart has 3 items
cartCount = 3;
updateCartCount();

console.log("cart count test", cartCount);