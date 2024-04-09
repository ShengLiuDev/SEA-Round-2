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

    { name: "Chicken Breast", category: "Meat", type: "Chicken" ,price: 10.99},
    { name: "Chicken Tenderloins", category: "Meat", type: "Chicken" , price: 7.99},
    { name: "Whole Chicken", category: "Meat", type: "Chicken" , price: 3.29},
    { name: "Chicken Drumsticks", category: "Meat", type: "Chicken" ,price: 1.99},
    { name: "Skin-On Chicken Thighs", category: "Meat", type: "Chicken" ,price: 1.99},
    { name: "Chicken Wings", category: "Meat", type: "Chicken" ,price: 2.99},
    { name: "Pork Loin Chops", category: "Meat", type: "Pork" ,price: 4.99},
    { name: "Pork Boston Butt Roast", category: "Meat", type: "Pork" ,price: 3.29},
    { name: "Pork Shoulder Ribs", category: "Meat", type: "Pork" ,price: 3.79},
    { name: "Pork Ribs", category: "Meat", type: "Pork" ,price: 2.99},
    { name: "Pork Belly", category: "Meat", type: "Pork" ,price: 4.99},
    { name: "Standing Beef Rib Roast", category: "Meat", type: "Beef" ,price: 14.99},
    { name: "Beef Stew Meat", category: "Meat", type: "Beef" , price: 6.99},
    { name: "Ground Beef", category: "Meat", type: "Beef" , price: 6.49},
    { name: "Beef Oxtails", category: "Meat", type: "Beef" , price: 8.99},
    { name: "Beef Short Ribs", category: "Meat", type: "Beef" , price: 7.99},
    
    { name: "Farmed Atlantic Salmon Fillet", category: "Seafood", price: 6.99},
    { name: "Smoked Salmon", category: "Seafood", price: 6.00},
    { name: "Peeled Jumbo Shrimp", category: "Seafood", price: 14.99},
    { name: "Tilapia", category: "Seafood", price: 7.99},
    { name: "Colossal Shrimp", category: "Seafood", price: 10.99},
    { name: "Catfish Fillets", category: "Seafood", price: 9.99},
    { name: "Lobster Tails", category: "Seafood", price: 20.99},
    { name: "Cod Fillets", category: "Seafood", price: 17.99},
    { name: "Sea Scallops", category: "Seafood", price: 26.99},
    { name: "Whole Lobster", category: "Seafood", price: 28.99},
    
]

// filters
const fruits = groceryItems.filter(item => item.category === "Fruits")
const vegetables = groceryItems.filter(item => item.category === "Vegetables");
const meats = groceryItems.filter(item => item.category === "Meat");
const chicken = meats.filter(item => item.type === "Chicken");
const pork = meats.filter(item => item.type === "Pork");
const beef = meats.filter(item => item.type === "Beef");
const seafood = groceryItems.filter(item => item.category === "Seafood");

// slice documentation (just in case we need later) 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

function sortByLowestToHighestPrice(items) {
    return items.slice().sort((a, b) => a.price - b.price);
}

function sortByAlphabeticalOrder(items) {
    return items.slice().sort((a, b) => a.name.localeCompare(b.name));
}

const sortedByPrice = sortByLowestToHighestPrice(groceryItems);
const sortedByName = sortByAlphabeticalOrder(groceryItems);

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// timing and changing of images 
document.addEventListener('DOMContentLoaded', function() {
    let image = document.getElementById('img');
    let images = ['images/farmer.jpg', 'images/farmer2.jpg', 'images/homecook.jpg', 
    'images/farmer3.jpg', 'images/farmer4.jpg', 'images/homecook2.jpg']
    let index = 0;
    setInterval(function(){
        index = (index + 1) % images.length; // iterate through every indice 
        image.src = images[index];
    }, 3000); 
});

document.addEventListener('DOMContentLoaded', function() {
    const filterCheckboxes = document.querySelectorAll('.filter input[type="checkbox"]');
    const sortSelect = document.getElementById('sortOptions');
    const productsContainer = document.getElementById('productsContainer');

    // event listener for filter checks 
    filterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            applyFiltersAndSort();
        });
    });

    // event checker for sort selection
    sortSelect.addEventListener('change', function() {
        applyFiltersAndSort();
    });

    function applyFiltersAndSort() {
        // get checked categories 
        const selectedCategories = Array.from(filterCheckboxes)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value);

        // filter by category 
        let filteredItems = groceryItems.filter(item =>
            selectedCategories.length === 0 || selectedCategories.includes(item.category)
        );

        // https://stackoverflow.com/questions/6712034/sort-array-by-firstname-alphabetically-in-javascript
        switch (sortSelect.value) {
            case 'price-ascending':
                filteredItems.sort((a, b) => a.price - b.price);
                break;
            case 'price-descending':
                filteredItems.sort((a, b) => b.price - a.price);
                break;
            case 'name-ascending':
                filteredItems.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'name-descending':
                filteredItems.sort((a, b) => b.name.localeCompare(a.name));
                break;
        }

        // display filtered and sorted items 
        displayItems(filteredItems);
    }

    function displayItems(items) {
        productsContainer.innerHTML = ''; // Clear the container

        // adds each individual element to the container
        // refer to w3 school example
        items.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'product-item';
            itemElement.innerHTML = `
                <h4>${item.name}</h4>
                <p>Category: ${item.category}</p>
                <p>Price: $${item.price.toFixed(2)}</p>
            `;
            productsContainer.appendChild(itemElement);
        });
    }

    // first apply the the filters and sort to display all items 
    applyFiltersAndSort();
});


