import React, { useState } from 'react';
import NavBar from './components/Expenses/NavBar';
import Cart from './components/Expenses/Cart';
import MealItem from './components/Expenses/MealItem';
import Card from './components/Cards/Card';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const meals = [
    { id: 1, name: "Pizza Hawaiana", description: "Pizza Hawaiana con piña y jamón", price: 199, image: "" },
    { id: 2, name: "Tacos al pastor", description: "Orden de 5 tacos al pastor", price: 119, image: "" },
    { id: 3, name: "Chiles en nogada", description: "Incluye tortillas", price: 150, image: "" },
    { id: 4, name: "Torta de milanesa", description: "Incluye queso, verduras y guacamole", price: 49, image: "" },
  ];

  const addToCart = (meal, quantity) => {

    setCartItems(prevItems => {
      const existingItemIndex = prevItems.findIndex(item => item.id === meal.id);
  
      if (existingItemIndex !== -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + quantity,
        };
        return updatedItems; 
      } else {
        return [...prevItems, { ...meal, quantity }];
      }
    });
  };
  
  const removeFromCart = (meal) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== meal.id));
  };

  return (
    <div className="App font-body">
      <NavBar 
      />
      <Cart cartItems={cartItems} />
      <div className="mt-8">
        <Card>
          <div className="meals-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {meals.map(meal => (
              <MealItem
                key={meal.id}
                meal={meal}
                onAddToCart={addToCart}
                onRemoveFromCart={removeFromCart}
              />
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

export default App;

