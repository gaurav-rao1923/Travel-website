import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages/Layout";
// import Home from "./pages/Home";
import  Layout  from "./components/Layout";
import Home from "./components/Home";
import Register from "./components/Register";
import NoPage from "./components/NoPage";
import Login from "./components/Login";
// import Login from "./pages/Blogs";
// import NoPage from "./pages/Contact";
// import Register from "./pages/NoPage";
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"
 function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Login" element={<Login />} />
          <Route path="Register" element={<Register />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;