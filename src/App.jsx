import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom"
import InventoryAdminForm from "./pages/InventoryAdminForm"
import Inventory from "./pages/Inventory";
import RemainingItems from "./pages/RemainingItems";
import RemovedItems from "./pages/RemovedItems";

function App(){
  return (
    <div>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to={"/inventory"}>Inventory</Link>
              </li>
              <li>
                <Link to={"/removeditems"}>Removed Items</Link>
              </li>
              <li>
                <Link to={"/remainingitems"}>Remaining Items</Link>
              </li>
              <li>
                <Link to={"/"}>Add New Items</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/remainingitems" element={<RemainingItems />} />
            <Route path="/removeditems" element={<RemovedItems />} />
            <Route path="/" element={<InventoryAdminForm />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App