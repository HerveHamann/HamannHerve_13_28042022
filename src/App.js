import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import SignInPage from "./pages/SignInPage";
import UserPage from "./pages/UserPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/user" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
