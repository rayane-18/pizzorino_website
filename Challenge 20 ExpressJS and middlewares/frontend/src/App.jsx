import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./pages/NoPage";
import Login from "./pages/Login";
import Browse from "./pages/Browse";
import Register from "./pages/Register";
import AdminPage from "./pages/AdminPage";

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/Admin" element={<AdminPage />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Browse" element={<Browse />} />
          <Route path="/Login" element={<Login />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
