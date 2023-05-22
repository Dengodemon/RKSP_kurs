// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import express from 'express';
import mongoose from "mongoose";
import * as UserController from "./controllers/UserController.js";
import * as TyreController from "./controllers/TyreController.js";
import * as Validation from './validations.js';
import checkAuth from "./utils/checkAuth.js";

mongoose
  .connect('mongodb+srv://azlobin:rX6H4tOMVdm8p6vX@cluster0.4i4x1z0.mongodb.net/shop?retryWrites=true&w=majority')
  .then(() => console.log('DB OK'))
  .catch((err) => console.log('DB error', err));

const app = express();
app.use(express.json);
TyreController.loadTyres();

app.post('/auth/login', Validation.loginValidation, UserController.login);
app.post('/auth/register', Validation.registerValidation, UserController.register);
app.get('auth/me', checkAuth, UserController.getMe);
app.post('/catalog/addToCart', TyreController.addToCart);
app.post('/cart/addOne', TyreController.addOne());
app.post('/cart/reduceOne', TyreController.reduceOne());

app.listen(4444, (err) => {
  if (err)
    return console.log(err);
  console.log('Server OK');
});
//   const root = ReactDOM.createRoot(document.getElementById('root'));
//   root.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>
//   );
//
// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//  reportWebVitals();
