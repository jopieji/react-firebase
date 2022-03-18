import React, { useEffect } from 'react';
import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/home'
import LogIn from './components/logIn';
import SignUp from './components/signUp';
import Header from './components/header'
import {getAuth, onAuthStateChanged, prodErrorMap} from 'firebase/auth'
import app from './firebase/firebase';


function App() {
    const [user, setUser] = useState('');
    useEffect(() => {
        const func = async () => {
            const auth = getAuth();
            // ? returns undefined instead of throwing an error : Optional Chaining
            await onAuthStateChanged(auth, (user) => setUser(user?.displayName));
        }
        func()
    });

    // check to see if firebase set up correctly
    useEffect(() => {
        console.log(app);
    }, []);

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
