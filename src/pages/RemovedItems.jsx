import { useSelector, useDispatch } from "react-redux";
import { fetchRemovedItem } from "../actions";
import { useEffect } from "react";

const removedItems = () => {
  const dispatch = useDispatch();
  const removedItems = useSelector((state) => state.removedItems);
  console.log(removedItems);
  const totalItem = removedItems.reduce((acc, curr) => curr.itemQuantity + acc, 0);

  useEffect(() => {
    dispatch(fetchRemovedItem());
  }, []);

  return (
    <div>
      <h1>Removed Items From Inventory</h1>
      <ul>
        {removedItems.map((item, index) => (
          <li key={index}>
            {item.itemName}: ${item.itemQuantity}
          </li>
        ))}
      </ul>

      <h2>Removed Items Total: {totalItem}</h2>
    </div>
  );
};
export default removedItems;
