const initialState = {
  removedItems: [],
  inventory: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEMS_SUCCESS":
      // Directly add the item to the inventory
      return {
        ...state,
        inventory: [...state.inventory, action.payload], // Add the new item to the inventory
      };
    case "REMOVE_ITEMS_SUCCESS":
      // Remove the item from inventory and add to removedItems
      return {
        ...state,
        inventory: state.inventory.filter(
          (item) => item.itemName !== action.payload.itemName // Assuming action.payload contains the item to remove
        ),
        removedItems: [...state.removedItems, action.payload], // Add the removed item to removedItems
      };
    case "FETCH_INVENTORY_SUCCESS":
      return {
        ...state,
        inventory: action.payload,
      };
    case "FETCH_REMOVED_ITEMS_SUCCESS":
      return {
        ...state,
        removedItems: action.payload,
      };
    default:
      return state; // Return the current state if no action matches
  }
};

export default reducer;
