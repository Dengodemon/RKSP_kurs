import {BrowserRouter, Route, Routes} from "react-router-dom"
import axios from 'axios';
import './style/mainStyle.css';
import { UserContext } from './hooks/UserContext';
import useFindUser from "./hooks/useFindUser";

import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";

import NotFound from "./pages/notFound.jsx";
import Catalog from "./pages/catalog.jsx";
import SignUp from "./pages/signUp.jsx";
import SignIn from "./pages/signIn.jsx";
import Cart from "./pages/cart.jsx";
import ShopAddresses from "./pages/shopAddresses.jsx";
import PersonalAccount from "./pages/PrivateRoute.js";
import PrivateRoute from "./pages/PrivateRoute.js";

function App () {
  const {user, setUser, isLoading} = useFindUser();

  return (
    <BrowserRouter>
      <UserContext.Provider value={{user, setUser, isLoading}}>
        <Header/>
        <Routes>
          <Route path="/" element={<Catalog/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/shops" element={<ShopAddresses/>}/>
          <Route path="/account" element={<PrivateRoute/>}>
            <Route path="/account" element={<PersonalAccount/>}/>
          </Route>
          <Route path="/signUp" element={<SignUp/>}/>
          <Route path="/signIn" element={<SignIn/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        <Footer/>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
