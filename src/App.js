import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import "./App.css";
import Home from "./Pages/Home/Home/Home";
import ServiceDetail from "./Pages/ServiceDetail/ServiceDetail";
import Header from "./Pages/Shared/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import Blog from "./Pages/Blog/Blog";
import Services from "./Pages/Home/Services/Services";

function App() {
  return (
    <div className="">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>

        <Route
          path="/checkout/:checkoutId"
          element={
            <RequireAuth>
              <ServiceDetail></ServiceDetail>
            </RequireAuth>
          }
        ></Route>

        <Route path="/services" element={<Services></Services>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>

        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
