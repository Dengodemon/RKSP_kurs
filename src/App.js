import {BrowserRouter, Route, Routes} from "react-router-dom"
import './frontend/style/mainStyle.css';

import Header from "./frontend/components/header.jsx";
import Footer from "./frontend/components/footer.jsx";
import NotFound from "./frontend/pages/notFound.jsx";
import Catalog from "./frontend/pages/catalog.jsx";
import SignUp from "./frontend/pages/signUp.jsx";
import SignIn from "./frontend/pages/signIn.jsx";
import Cart from "./frontend/pages/cart.jsx";
import ShopAddresses from "./frontend/pages/shopAddresses.jsx";
import PersonalAccount from "./frontend/pages/personalAccount.jsx";

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
