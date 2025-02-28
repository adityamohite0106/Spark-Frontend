import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Entrypage from "./Desktop/Components/Entrypage";
import Signup from "./Desktop/Components/Signup";
import Signin from "./Desktop/Components/Signin";
import Category from "./Desktop/Components/Category";
import Dashboard from "./Desktop/Pages/Dashboard";
import ProtectedRoute from "./Desktop/Components/ProtectedRoute"; 

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Entrypage />} />
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/signin" element={<Signin />}></Route>

        <Route element={<ProtectedRoute />}>
          <Route path="/category" element={<Category />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

      </Routes>
    </Router>
  );
}
export default AppRoutes;

// Aditya Mohite   adityamohite4973@gmail.com
