import {Route, Routes} from "react-router-dom"
import './style/mainStyle.css';

import Header from "./components/header";
import Footer from "./components/footer";
import NotFound from "./pages/notFound";
import Catalog from "./pages/catalog";
import SignUp from "./pages/signUp";
import SignIn from "./pages/signIn";
import Cart from "./pages/cart";
import ShopAddresses from "./pages/shopAddresses";
import PersonalAccount from "./pages/personalAccount";

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Catalog/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shops" element={<ShopAddresses />} />
        <Route path="/account" element={<PersonalAccount />} />
        <Route path="/signUp" element={<SignUp/>} />
        <Route path="/signIn" element={<SignIn/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
