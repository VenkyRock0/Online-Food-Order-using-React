import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Veg Biriyani",
    description: "Finest oil and veggies",
    price: 95.49,
  },
  {
    id: "m2",
    name: "Fried Rice",
    description: "A north specialty!",
    price: 125.6,
  },
  {
    id: "m3",
    name: "Chicken Biriyani",
    description: "Soft meat and tasty",
    price: 180.59,
  },
  {
    id: "m4",
    name: "Tandoori Chicken",
    description: "Extra grilled and Fresh meat",
    price: 250.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
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
