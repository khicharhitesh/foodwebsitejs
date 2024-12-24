


const container = document.querySelector(".container");
const regionFilter = document.querySelector("#region-filter");

// Sample food data
const foodData = [
    {
        img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        foodName: "Pizza Paradise",
        starRating: 4.5,
        foods: ["Pepperoni Pizza", "Veggie Delight", "Margherita"],
        place: "New York",
        distance: "2.3 km",
        cost: "$15"
    },
    {
        img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        foodName: "Burger Hub",
        starRating: 4.2,
        foods: ["Cheese Burger", "Chicken Burger", "Veggie Burger"],
        place: "Chicago",
        distance: "3.1 km",
        cost: "$12"
    },
    {
        img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        foodName: "Sushi World",
        starRating: 4.8,
        foods: ["California Roll", "Tuna Sushi", "Salmon Nigiri"],
        place: "Los Angeles",
        distance: "1.7 km",
        cost: "$25"
    },
    {
        img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        foodName: "Taco Fiesta",
        starRating: 4.6,
        foods: ["Chicken Tacos", "Beef Tacos", "Veggie Tacos"],
        place: "Houston",
        distance: "4.2 km",
        cost: "$10"
    },
    {
        img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        foodName: "Pasta Heaven",
        starRating: 4.7,
        foods: ["Spaghetti Carbonara", "Penne Alfredo", "Lasagna"],
        place: "San Francisco",
        distance: "2.9 km",
        cost: "$18"
    },
    {
        img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        foodName: "Indian Spice",
        starRating: 4.3,
        foods: ["Butter Chicken", "Paneer Tikka", "Biryani"],
        place: "Dallas",
        distance: "3.6 km",
        cost: "$20"
    },
    {
        img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        foodName: "BBQ Delight",
        starRating: 4.5,
        foods: ["BBQ Ribs", "Grilled Chicken", "Pulled Pork"],
        place: "Austin",
        distance: "2.4 km",
        cost: "$22"
    },
    {
        img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        foodName: "Dessert Dreams",
        starRating: 4.9,
        foods: ["Chocolate Cake", "Cheesecake", "Ice Cream Sundae"],
        place: "Seattle",
        distance: "1.5 km",
        cost: "$8"
    }
];

// Helper function to display food items
function displayFood(foodItems) {
    container.innerHTML = ""; // Clear the existing food items
    foodItems.forEach((food) => {
        const box = document.createElement("div");
        box.classList.add("box");
        box.innerHTML = `
            <img src="${food.img}" alt="">
            <p class="foodName"><span>Food name: </span>${food.foodName}</p>
            <p class="rating"><span>Rating: </span>${food.starRating}</p>
            <p class="foods"><span>Foods: </span>${food.foods.join(', ')}</p>
            <p class="place"><span>Place: </span>${food.place}</p>
            <p class="distance"><span>Distance: </span>${food.distance}</p>
            <p class="cost"><span>Cost: </span>${food.cost}</p>
        `;
        container.appendChild(box);
    });
}

// Display all food items initially
displayFood(foodData);

// Event listener for filter select
regionFilter.addEventListener("change", (event) => {
    const selectedFilter = event.target.value;

    let sortedFood;

    switch (selectedFilter) {
        case "Africa":
            // Sort by cost (price higher to lower)
            sortedFood = [...foodData].sort((a, b) => {
                const costA = parseFloat(a.cost.replace('$', ''));
                const costB = parseFloat(b.cost.replace('$', ''));
                return costB - costA;
            });
            break;

        case "Americas":
            // Sort by distance (nearest to farthest)
            sortedFood = [...foodData].sort((a, b) => {
                const distanceA = parseFloat(a.distance.replace(' km', ''));
                const distanceB = parseFloat(b.distance.replace(' km', ''));
                return distanceA - distanceB;
            });
            break;

        case "Asia":
            // Sort by rating (highest to lowest)
            sortedFood = [...foodData].sort((a, b) => b.starRating - a.starRating);
            break;

        case "Europe":
            // Sort by food name (alphabetically)
            sortedFood = [...foodData].sort((a, b) => a.foodName.localeCompare(b.foodName));
            break;

        default:
            // If no filter is selected, show all food items
            sortedFood = foodData;
            break;
    }

    // Display the sorted food items
    displayFood(sortedFood);
});
