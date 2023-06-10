import React, {useContext} from 'react'
import {Navigate, Outlet} from "react-router-dom";
import {UserContext} from "../hooks/UserContext";

export default function PrivateRoute(props) {
  console.log("PrivateRoute");
  const { user, isLoading } = useContext(UserContext);
  console.log(user);
  // const { component: Component, ...rest } = props;
  // if(isLoading) {
  //   return <Loading/>
  // }
  return user ? <Outlet /> : <Navigate to="/signIn" />;
  // if(user){
  //   return ( <Route {...rest} render={(props) =>
  //       (<Component {...props}/>)
  //     }
  //     />
  //   )}
  // //redirect if there is no user
  // return redirect('/signIn');
}
