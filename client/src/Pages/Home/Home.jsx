import React from 'react'
// Homepage of website
const Home = () => {
    return (
        <div className='main__container'>
            <h1 id='AT'><center>Face Recognition - ATTENDANCE TRACKER</center></h1>
            <br/><br/><br/>
            <h2>Choose an option from the top right to start your journey!</h2><br/>
            <h2>Student: Login using your device Camera/Webcam</h2><br/>
            <h2>Teacher: Login using a password to access Attendance Records</h2><br/><br/><br/>
            <h3>Link to Video Demo: <a id="demo" href="https://youtu.be/2mbSjsMOrkM">https://youtu.be/2mbSjsMOrkM</a></h3><br/><br/><br/>
            <h4>Note: If you are logging in as a student, you are required to give the camera access permission to the website.</h4>
        </div>
    )
}

export default Home