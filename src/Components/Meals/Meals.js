import { Fragment } from "react";
import AvailableMeals from "../Meals/AvailableMeals";
import MealsSummary from "../Meals/MealsSummary";

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
};
export default Meals;
