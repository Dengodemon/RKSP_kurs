import {BrowserRouter, Route, Routes} from "react-router-dom"
import './frontend/style/mainStyle.css';

import Header from "./frontend/components/header";
import Footer from "./frontend/components/footer";
import NotFound from "./frontend/pages/notFound";
import Catalog from "./frontend/pages/catalog";
import SignUp from "./frontend/pages/signUp";
import SignIn from "./frontend/pages/signIn";
import Cart from "./frontend/pages/cart";
import ShopAddresses from "./frontend/pages/shopAddresses";
import PersonalAccount from "./frontend/pages/personalAccount";

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
