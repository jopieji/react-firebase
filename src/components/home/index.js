import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../firebase/firebase.js'

//firebase imports
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from "../../firebase/firebase.js";

// react imports
import { useState } from 'react';

// reference to firebase app
const firebaseApp = app;

// get a reference to the storage service
const storage = getStorage(firebaseApp);

/*
// Points to 'images'
const imagesRef = ref(storageRef, 'images');

// Points to 'images/space.jpg'
// Note that you can use variables to create child values
const fileName = 'space.jpg';
const spaceRef = ref(imagesRef, fileName);

// File path is 'images/space.jpg'
const path = spaceRef.fullPath;

// File name is 'space.jpg'
const name = spaceRef.name;
*/
// need a reference to the full path of the file to upload





const Home = ({user}) => {
    // progress state
    const [ progress, setProgress ] = useState(0);
    const [ image, setImage ] = useState(null);

    // form handler
    const formHandler = (e) => {
        e.preventDefault();
        const file = e.target[0].files[0];
        console.log(file);
        uploadFirebase(file);
    };

    const uploadFirebase = (file) => {
        if (!file) return;
        // create a storage reference from our storage service
        const storageRef = ref(storage, `/files/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);
    
        uploadTask.on("state_changed", (snapshot) => {
             const progress = snapshot.bytesTransferred / snapshot.totalBytes * 100;
             setProgress(progress);
        }, (err) => {
            console.log(err);
        }, () => {
            getDownloadURL(uploadTask.snapshot.ref)
            .then(url => {
                setImage(url);
            });
        });
    };

    return (
        <>
            <div className='homePage'>
                <h1>The site is loaded. You can now edit the home page or add other components</h1>
                {user?<h2 style={{textAlign: 'center'}}>Welcome, {user}</h2>:null}
            </div>
            <br/>
            <hr/>
            <div className="homePage">
                <h1>Image Upload</h1>
                <br/>
                <br/>
                <form onSubmit={formHandler}> 
                    <input type="file" className="input" />
                    <button type="submit">Upload</button>
                </form>
                <br/>
                <br/>
                <h3>Uploaded {progress}%</h3> 
            </div>
            <br/>
            <br/>
            <div className='homePage'>
                <img src={image}></img>
            </div>
        </>
    )
}
 
export default Home;
