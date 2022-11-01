import { BrowserRouter, Route, Routes } from "react-router-dom";
import Appbar from "./Appbar";
import LoginPage from "./LoginPage";
import MainPage from "./MainPage";
import Signup from "./Signup";
// kbs
function App() {
  return (
    <BrowserRouter>
    <Appbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
