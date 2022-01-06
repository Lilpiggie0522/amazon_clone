import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './Login';
import { React, useEffect, forwardRef } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';

const promise = loadStripe('pk_test_51KCBssLsDig2OqYxjBGdnkDrjptxxmyLCsTsRk4q8roe9BuAgzYpowPkftL76ivCLKpSrZeNQC9za14rlYlzugPE00lsyGgQif');


function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(()=>{
    auth.onAuthStateChanged(authUser => {
      console.log("The user is: ", authUser);

      authUser?dispatch({
        type: 'SET_USER',
        user: authUser,
      })

      :dispatch({
        type: "SET_USER",
        user: null,
      })
    })
  }, [])

  return (
    <Router>
      <div className="app">
        <Routes>
              <Route path="/" element={<><Header /><Home /></>}/>
              <Route path="login" element={<Login />}/>
              <Route path="checkout" element={<><Header /><Checkout /></>}/>
              <Route path="payment" element={<><Header /><Elements stripe={promise}><Payment /></Elements></>}/>
              <Route path="orders" element={<><Header /><Orders /></>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
