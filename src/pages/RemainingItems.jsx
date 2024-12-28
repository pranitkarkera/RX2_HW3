import { useSelector, useDispatch } from "react-redux";
import { fetchInventoryItem, fetchRemovedItem } from "../actions";
import { useEffect } from "react";

const Inventory = () => {
  const dispatch = useDispatch();
  const inventory = useSelector((state) => state.inventory);
  const removedItems = useSelector((state) => state.removedItems);
  const totalInventory = inventory.reduce((acc, curr) => curr.itemQuantity + acc, 0);
  const totalRemovedItems = removedItems.reduce(
    (acc, curr) => curr.itemQuantity + acc,
    0
  );

  const totalRemaining = totalInventory - totalRemovedItems

  useEffect(() => {
    dispatch(fetchInventoryItem());
  }, []);

  useEffect(() => {
    dispatch(fetchRemovedItem());
  }, []);

  return (
    <div>
      <h1>Remaining Items in Inventory</h1>

      <h2>Inventory Total: {totalRemaining}</h2>
    </div>
  );
};
export default Inventory;
