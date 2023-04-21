import React from 'react';
import '../styles/loginPage.css'
import '../styles/apk.css'

import LoginNavbar from './LoginNavbar';

const Apk = () => {
    return (
        <>
            <LoginNavbar />
            <center>
            <div className='download-container'>
            <h2>Download Our Cloud Mobile Application⬇️</h2>
            <button className='link'><a  href='https://drive.google.com/file/d/1sIbZDMOy5FZnVg1KJADEpi-P4bN3Gn5x/view' target='_blank'>Download Link</a></button>
            <h3 className='second'>Here's a Demo video for your reference!</h3>
            <iframe className='ytapk' width="560" height="315" src="https://www.youtube.com/embed/QaCfOatTIDA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            </center>
        </>
    )
}

export default Apk;