import { plantList } from "../datas/plantList";

const categoryList = plantList.reduce((accumulator, item) =>
  accumulator.includes(item.category) ? accumulator : accumulator.concat(item.category),
  []
)

function ShoppingList() {
  return (
    <div>
      <ul>
        {categoryList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <ul>
        {plantList.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
