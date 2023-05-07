import {BrowserRouter, Route, Routes} from "react-router-dom"
import './style/mainStyle.css';

import Header from "./components/header";
import Footer from "./components/footer";
import NotFound from "./pages/notFound";
import Catalog from "./pages/catalog";
import SignUp from "./pages/signUp";
import SignIn from "./pages/signIn";

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Catalog/>} />
        <Route path="/signUp" element={<SignUp/>} />
        <Route path="/signIn" element={<SignIn/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
