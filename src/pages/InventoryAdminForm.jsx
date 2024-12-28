import { useState } from "react";
import { useDispatch} from "react-redux"
import { addItem, removeItem } from "../actions";

function InventoryAdminForm(){
    const dispatch = useDispatch()
    const [ itemName, setItemName] = useState('')
    const [ itemQuantity, setItemQuantity] = useState('')
    const [ entryType, setEntryType] = useState('')
    const [ successMessage, setSuccessMessage] = useState('')

    const handleAddItems = (e)=> {
        e.preventDefault();
        console.log("Form submitted");
        setSuccessMessage('')
        console.log("Item Name:", itemName);
        console.log("Item Quantity:", itemQuantity);
        console.log("Entry Type:", entryType);

        if (
          !itemName ||
          !itemQuantity ||
          isNaN(itemQuantity) ||
          itemQuantity <= 0
        ) {
          setSuccessMessage("Please enter valid item name and quantity.");
          return;
        }

        if (entryType === "addtostorage") {
          console.log("Dispatching addItem");
          dispatch(
            addItem({
              itemName,
              itemQuantity: parseFloat(itemQuantity),
              entryType,
            })
          );
          setSuccessMessage("Item added successfully!");
        } else if (entryType === "removefromstorage") {
          console.log("Dispatching removeItem");
          dispatch(
            removeItem({
              itemName,
              itemQuantity: parseFloat(itemQuantity),
              entryType,
            })
          );
          setSuccessMessage("Item removed successfully!");
        }

        setEntryType("");
        setItemName("");
        setItemQuantity("");
    }
    return (
      <div>
        <form onSubmit={handleAddItems}>
          <h1>Inventory Admin App</h1>
          {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
          <br />
          <label>Item Name:</label>
          <br />
          <input
            type="text"
            onChange={(e) => setItemName(e.target.value)}
            value={itemName}
          />
          <br />
          <br />
          <label>Item Quantity:</label>
          <br />
          <input
            type="number"
            onChange={(e) => setItemQuantity(e.target.value)}
            value={itemQuantity}
          />
          <br />
          <br />
          <label>Entry Type:</label>
          <br />
          <select
            value={entryType}
            onChange={(e) => setEntryType(e.target.value)}
          >
            <option value="">Select Entry Type</option>
            <option value="addtostorage">Add to Storage</option>
            <option value="removefromstorage">Remove from Storage</option>
          </select>
          <br />
          <br />
          <button type="submit">Add Item Data</button>
        </form>
      </div>
    );
}
export default InventoryAdminForm