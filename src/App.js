import Dashboard from "./componets/Dashboard";
import Login from "./componets/Login";
import { Route, Routes } from "react-router-dom";
import SignUp from "./componets/SignUp";
function App() {
  return (
    <div>
      {/* <SignUp/> */}
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/SignUp' element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
