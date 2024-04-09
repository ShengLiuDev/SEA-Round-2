/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 * 
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your 
 *    browser and make sure you can see that change. 
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 * 
 */
const groceryItems = [
    { name: "Mango", category: "Fruits", price: 1.69},
    { name: "Limes", category: "Fruits", price: 0.49},
    { name: "Coconut", category: "Fruits", price: 2.79},
    { name: "Mandarins", category: "Fruits", price: 5.99},
    { name: "Strawberries", category: "Fruits", price: 4.99},
    { name: "Pineapple Chunks", category: "Fruits", price: 3.99},
    { name: "White Seedless Grapes", category: "Fruits", price: 8.99},
    { name: "Small Watermelon Chunks", category: "Fruits", price: 4.99},
    { name: "Prepared Strawberries", category: "Fruits", price: 4.99},
    { name: "Tomatoes on the Vine", category: "Fruits", price: 2.49},
    { name: "Honeycrisp Apples", category: "Fruits", price: 5.29},
    { name: "Ambrosia Apples", category: "Fruits", price: 5.99},
    { name: "Red Raspberries", category: "Fruits", price: 5.99},
    { name: "Bartlett Pears", category: "Fruits", price: 1.99},
    { name: "Naval Oranges", category: "Fruits", price: 1.49},
    { name: "Fuji Apples", category: "Fruits", price: 2.19},

    { name: "Basil", category: "Vegetables", price: 2.79},
    { name: "Broccoli", category: "Vegetables", price: 2.19},
    { name: "Asparagus", category: "Vegetables", price: 2.99},
    { name: "Spring Mix", category: "Vegetables", price: 4.99},
    { name: "Green Beans", category: "Vegetables", price: 2.50},
    { name: "Baby Spinach", category: "Vegetables", price: 3.99},
    { name: "Yellow Onion", category: "Vegetables", price: 1.19},
    { name: "Sweet Potatoes", category: "Vegetables", price: 2.49},
    { name: "Red Bell Peppers", category: "Vegetables", price: 3.69},
    { name: "Iceberg Lettuce", category: "Vegetables", price: 6.49},
    { name: "Sliced Baby Bella Mushrooms", category: "Vegetables", price: 2.00},
    { name: "White Whole Mushrooms", category: "Vegetables", price: 2.00},
    { name: "Eggplant", category: "Vegetables", price: 2.99},
    { name: "Romaine Lettuce", category: "Vegetables", price: 3.99},
    { name: "Bag of Gold Potatoes", category: "Vegetables", price: 3.99},
    { name: "Zucchini", category: "Vegetables", price: 3.69},

    { name: "Chicken Breast", category: "Meat", price: 4.99},
    { name: "Strawberries", category: "Meat", price: 4.99},
    { name: "Strawberries", category: "Meat", price: 4.99},
    { name: "Strawberries", category: "Meat", price: 4.99},
    { name: "Strawberries", category: "Meat", price: 4.99},
    { name: "Strawberries", category: "Meat", price: 4.99},
    { name: "Strawberries", category: "Meat", price: 4.99},
    { name: "Strawberries", category: "Meat", price: 4.99},
    { name: "Strawberries", category: "Meat", price: 4.99},
    { name: "Strawberries", category: "Meat", price: 4.99},
    { name: "Strawberries", category: "Meat", price: 4.99},
    { name: "Strawberries", category: "Meat", price: 4.99},
    { name: "Strawberries", category: "Meat", price: 4.99},
    { name: "Strawberries", category: "Meat", price: 4.99},
    { name: "Strawberries", category: "Meat", price: 4.99},
    { name: "Strawberries", category: "Meat", price: 4.99},
    
    { name: "Strawberries", category: "Fruits", price: 4.99},
    { name: "Strawberries", category: "Fruits", price: 4.99},
    { name: "Strawberries", category: "Fruits", price: 4.99},
    { name: "Strawberries", category: "Fruits", price: 4.99},
    { name: "Strawberries", category: "Fruits", price: 4.99},
    { name: "Strawberries", category: "Fruits", price: 4.99},
    { name: "Strawberries", category: "Fruits", price: 4.99},
    { name: "Strawberries", category: "Fruits", price: 4.99},
    { name: "Strawberries", category: "Fruits", price: 4.99},
    { name: "Strawberries", category: "Fruits", price: 4.99},
    { name: "Strawberries", category: "Fruits", price: 4.99},
    { name: "Strawberries", category: "Fruits", price: 4.99},
    { name: "Strawberries", category: "Fruits", price: 4.99},
    { name: "Strawberries", category: "Fruits", price: 4.99},
    { name: "Strawberries", category: "Fruits", price: 4.99},
    { name: "Strawberries", category: "Fruits", price: 4.99},
    

    
]


function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', function() {
    let image = document.getElementById('Farmer');
    let images = ['images/farmer.jpg', 'images/farmer2.jpg', 'images/farmer3.jpg', 'images/farmer4.jpg']
    let index = 0;
    setInterval(function(){
        index = (index + 1) % images.length;
        image.src = images[index];
    }, 3000); 
}
)
