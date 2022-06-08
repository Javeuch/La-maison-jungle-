import { plantList } from "../datas/plantList";

function ShoppingList() {
  return (
    <ul>
      {plantList.map((id) => (
        <li key={id}>{plantList.name}</li>
      ))}
    </ul>
  );
}

export default ShoppingList;
