// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "tailwindcss/tailwind.css";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Navigation from './Components/Navigation/Navigation';
import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';

import AuthProvider from './Components/Context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import MyOrders from './Pages/MyOrders/MyOrders';
import AllOrder from './Pages/Admin/AllOrder/AllOrder';
import AddNewService from './Pages/Admin/AddNewSevice/AddNewService';

import UpdateService from './Pages/Admin/UpdadeService/UpdateService';
import LoginTogol from './Pages/Login/LoginTogol/LoginTogol';
import Update from './Pages/Admin/UpdadeService/UpdateForEdit/Ubpdate';
import Footer from './Components/Footer/Footer'
import NoteFound from './Pages/NoteFound/NoteFound';
import Spinner from './Components/Hooks/Spinner';



function App() {


  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navigation></Navigation>
          <Spinner />

          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute exact path="/placeOrder/:id">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <Route exact path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute exact path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute exact path="/AllOrder">
              <AllOrder></AllOrder>
            </PrivateRoute>
            <PrivateRoute exact path="/AddNewService">
              <AddNewService></AddNewService>
            </PrivateRoute>
            <PrivateRoute exact path='/testUseParams/:id'>
              <Update></Update>
            </PrivateRoute>
            <PrivateRoute path="/update">
              <UpdateService></UpdateService>
            </PrivateRoute>
            <Route path='/login'>
              <LoginTogol></LoginTogol>
            </Route>
            <Route exact path='*'>
              <NoteFound></NoteFound>
            </Route>
          </Switch>
        </Router>
        <Spinner />
        <Footer></Footer>
      </AuthProvider>

    </div>
  );
}

export default App;
