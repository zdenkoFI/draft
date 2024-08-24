import React, { useState } from 'react';
import styles from './MealItem.module.css';

function MealItem({ meal, onAddToCart, onRemoveFromCart }) {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value, 10));
  };

  const handleAddToCart = () => {
    onAddToCart(meal, quantity);
  };

  const handleRemoveFromCart = () => {
    onRemoveFromCart(meal);
  };

  return (
    <div className={styles.mealItem}>
      <img src={meal.image} alt={meal.name} className={styles.mealImage} />
      <div className={styles.mealDetails}>
        <h3>{meal.name}</h3>
        <p>{meal.description}</p>
        <p>${meal.price.toFixed(2)}</p>
        <div className={styles.actions}>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={handleQuantityChange}
            className={styles.quantityInput}
          />
          <button onClick={handleAddToCart} className={styles.addButton}>
            Add to Cart
          </button>
          <button onClick={handleRemoveFromCart} className={styles.removeButton}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default MealItem;



