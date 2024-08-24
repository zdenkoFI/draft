import MealItem from './MealItem';
import Card from '../Cards/Card';

function Meals({ meals, onAddToCart }) {
  return (
    <div className="meals-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {meals.map(meal => (
        <Card key={meal.id}>
          <MealItem
            meal={meal}
            onAddToCart={onAddToCart}
          />
        </Card>
      ))}
    </div>
  );
}

export default Meals;
