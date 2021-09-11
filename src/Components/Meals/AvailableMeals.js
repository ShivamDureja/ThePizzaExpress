import classes from "../Meals/AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Margherita (L)",
    description: " mozzarella cheese, tomato sauce with basil",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Grande Italia (L)",
    description: "Extra Cheese,Black Olives with Green peppers",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Garden Party (L)",
    description: "Healthy...and green...",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Chicken BBQ (L)",
    description: "bbq sauce, mozzarella, chicken & cilantro",
    price: 18.99,
  },
  {
    id: "m5",
    name: "Double Spicy Beef (L)",
    description: "Loaded with spicy beef,red onions with chilli cheese.",
    price: 19.99,
  },
  {
    id: "m6",
    name: "Double Pepperoni (L)",
    description: "a blend of pork, beef, and spices",
    price: 20.99,
  },
];
const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
