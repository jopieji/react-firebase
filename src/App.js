import React, { useEffect } from 'react';
import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home'
import LogIn from './components/logIn';
import SignUp from './components/signUp';
import Header from './components/header'
import {getAuth, onAuthStateChanged, prodErrorMap} from 'firebase/auth'


require('dotenv').config();

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase config
const firebaseConfig = {
    apiKey: process.env.FIREBASE_APIKEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID, 
}

function App() {
    const [user, setUser] = useState('');
    useEffect(() => {
        const func = async () => {
            const auth = getAuth();
            await onAuthStateChanged(auth, (user) => setUser(user?.displayName));
        }
        func()
    });

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
