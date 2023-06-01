import {BrowserRouter, Route, Routes} from "react-router-dom"
import axios from 'axios';
import './style/mainStyle.css';

import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import NotFound from "./pages/notFound.jsx";
import Catalog from "./pages/catalog.jsx";
import SignUp from "./pages/signUp.jsx";
import SignIn from "./pages/signIn.jsx";
import Cart from "./pages/cart.jsx";
import ShopAddresses from "./pages/shopAddresses.jsx";
import PersonalAccount from "./pages/personalAccount.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Catalog />} />
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
