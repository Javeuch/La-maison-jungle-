import { plantList } from "../datas/plantList";
import "../styles/ShoppingList.css";
import PlantItem from "./PlantItem";

const categories = plantList.reduce(
  (accumulator, cat) =>
    accumulator.includes(cat.category)
      ? accumulator
      : accumulator.concat(cat.category),
  []
);

function ShoppingList() {
  return (
    <div>
      <ul>
        {categories.map((cat) => (
          <li key={cat}>{cat}</li>
        ))}
      </ul>
      <ul className="lmj-plant-list">
        {plantList.map(({ id, cover, name, water, light }) => (
          <PlantItem
            id={id}
            cover={cover}
            name={name}
            water={water}
            light={light}
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
