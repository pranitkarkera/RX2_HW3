export const addItem = (item) => async (dispatch) => {
    try{
      const response = await fetch(
        "https://inventory-storage-app-backend-student-neog.replit.app/add-to-store",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(item),
        }
      );
      console.log("Adding item:", item); // Log the item being added
      const data = await response.json();
      
      if (data.success) {
        console.log("Response from server:", data); // Log the server response
        dispatch({ type: "ADD_ITEMS_SUCCESS", payload: data.data });
      } else {
        console.error("Error adding item:", data); // Log the error response
      }
    } catch(error){
        console.log("Error adding item", error)
    }
}

export const removeItem = (item) => async (dispatch) => {
  try {
    const response = await fetch(
      "https://inventory-storage-app-backend-student-neog.replit.app/remove-from-store",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(item),
      }
    );
    const data = await response.json();

    if (data.success === true) {
      dispatch({ type: "REMOVED_ITEMS_SUCCESS", payload: data.data });
    } else {
      console.error("Error removing item:", data); // Log the error response
    }
  } catch (error) {
    console.log("Error removing item", error);
  }
};

export const fetchRemovedItem = () => async(dispatch) => {
    try{
        const response = await fetch(
          "https://inventory-storage-app-backend-student-neog.replit.app/dispatched-from-store"
        );

        const data = await response.json()
        if(data){
            dispatch({type: "FETCH_REMOVED_ITEMS_SUCCESS", payload: data})
        }
    }catch(error){
        console.error("Error fetching income", error)
    }
}

export const fetchInventoryItem = () => async (dispatch) => {
  try {
    const response = await fetch(
      "https://inventory-storage-app-backend-student-neog.replit.app/storage-items",
    );

    const data = await response.json();
    if(data){
        dispatch({type: "FETCH_INVENTORY_SUCCESS", payload: data})
    }
  } catch (error) {
    console.error("Error fetching income", error);
  }
};