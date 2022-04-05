import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFood } from "../features/customerSlice";

interface CustomerCardTypes {
  id: string;
  name: string;
  food: string[];
}

export default function CustomerCard({ id, name, food }: CustomerCardTypes) {
  const dispatch = useDispatch();

  const [foodName, setFoodName] = useState(name === "Otis" ? "pizza" : "");

  const handleAddFood = () => {
    if (!foodName) return;

    dispatch(addFood({ id, food: foodName }));
    setFoodName("");
  };

  return (
    <div className="customer-food-card-container">
      <p>{name}</p>
      <div className="customer-foods-container">
        <div className="customer-food">
          {food.map((food) => (
            <p>{food}</p>
          ))}
        </div>
        <div className="customer-food-input-container">
          <input
            value={foodName}
            onChange={(event) => setFoodName(event.target.value)}
          />
          <button onClick={handleAddFood}>Add</button>
        </div>
      </div>
    </div>
  );
}
