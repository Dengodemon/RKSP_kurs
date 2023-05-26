import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals.js';
import express from 'express';
import mongoose from "mongoose";
import * as UserController from "./backend/controllers/UserController.js";
import * as TyreController from "./backend/controllers/TyreController.js";
import * as Validation from './validations.js';
import checkAuth from "./backend/utils/checkAuth.js";
import {tyreCart} from "./validations.js";

mongoose
  .connect('mongodb+srv://azlobin:rX6H4tOMVdm8p6vX@cluster0.4i4x1z0.mongodb.net/shop?retryWrites=true&w=majority')
  .then(() => console.log('DB OK'))
  .catch((err) => console.log('DB error', err));

// const app = express();
// app.use(express.json);
// TyreController.loadTyres();

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
//
//
// app.post('/auth/login', Validation.loginValidation, UserController.login);
// app.post('/auth/register', Validation.registerValidation, UserController.register);
// app.get('auth/me', checkAuth, UserController.getMe);
// app.post('/catalog/addToCart', Validation.tyreCart, TyreController.addToCart);
// app.post('/cart/addOne', Validation.tyreCart, TyreController.addOne);
// app.post('/cart/reduceOne', Validation.tyreCart, TyreController.reduceOne);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const PORT = process.env.PORT || 4444;
// app.listen(PORT, (err) => {
//   if (err)
//     return console.log(err);
//   console.log('Server OK on ', PORT);
// });
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
