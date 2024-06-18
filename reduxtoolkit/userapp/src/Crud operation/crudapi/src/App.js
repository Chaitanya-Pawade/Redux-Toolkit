import Create from "./Components/Create";
import Navbar from "./Components/Navbar";
import userDetailsSlice from "./features/userDetailsSlice";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Read from "../src/Components/Read";
import Update from "./Components/Update";
function App() {
  return (
    <div className="App">
      <>
        {/* <h2>This is Crud Operation in redux toolkit</h2> */}
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route exact path="/" element={<Create />} />
            <Route exact path="/read" element={<Read />} />
            <Route exact path="/edit/:id" element={<Update />} />
          </Routes>
          
        </BrowserRouter>

        {/* <Create /> */}
        {/* <userDetailsSlice/> */}
      </>
    </div>
  );
}


export default App;
