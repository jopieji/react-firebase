import React, { useEffect } from 'react';
import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home'
import LogIn from './components/logIn';
import SignUp from './components/signUp';
import Header from './components/header'
import {getAuth, onAuthStateChanged} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCvghWmEKLvML0aGufsmFmWTELxgs03aSA",
    authDomain: "hhcodingtest.firebaseapp.com",
    projectId: "hhcodingtest",
    storageBucket: "hhcodingtest.appspot.com",
    messagingSenderId: "770679417670",
    appId: "1:770679417670:web:39c531cb45a7495d7e1347",
    measurementId: "G-3BBYB7S06L"
  };
  

require('dotenv').config();
function App() {
    const [user, setUser] = useState('');
    useEffect(() => {
        const func = async () => {
            const auth = getAuth();
            await onAuthStateChanged(auth, (user) => setUser(user?.displayName));
        }
        func()
    })
	return (
		<BrowserRouter>
            <Header user={user}/>
			<Switch>
                <Route path='/' exact={true}>
                    <Home user={user}/>
                </Route>
                <Route path='/login'>
                    <LogIn setUser={setUser}/>
                </Route>
                <Route path='/signup'>
                    <SignUp setUser={setUser}/>
                </Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
