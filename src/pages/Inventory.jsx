import { useSelector, useDispatch } from "react-redux"
import { fetchInventoryItem } from "../actions"
import { useEffect } from "react"

const Inventory = () => {
    const dispatch = useDispatch();
    const inventory = useSelector((state) => state.inventory)
    console.log(inventory)
    const totalItem = inventory.reduce((acc, curr) => curr.itemQuantity + acc, 0)

    useEffect(()=> {
        dispatch(fetchInventoryItem());
    }, [])

    return(
        <div>
            <h1>Inventory Items</h1>
            <ul>
                {inventory.map((item, index) => (
                    <li key={index}>
                        {item.itemName}: {item.itemQuantity}
                    </li>
                ))}
            </ul>

            <h2>Total Inventory Items: ${totalItem}</h2>
        </div>
    )
}
export default Inventory