import React, { useState } from "react";
import Resume from './resume.pdf';



function Connect(props) {
    const [copyStatus, setCopyStatus] = useState("Copy to clipboard?");

    function writeToClip(event){
        event.preventDefault();
        navigator.clipboard.writeText("billybdev@gmail.com");
        setCopyStatus("Copied!");
        setTimeout(() => {setCopyStatus("Copy to clipboard?")}, 2000)
    }
    return (
        <div>
            <div className="card">
                <div className="card-title">Connect</div>
                {/* eslint-disable-next-line */}
                <a className="connect-item email-button" onClick={e => {writeToClip(e)}}>
                    <div className="email-btn-core">
                        <i className="fas fa-envelope-square connect-icon"></i>                    
                        Email
                    </div>
                    <div className="email-display">
                        billybdev@gmail.com
                    </div>
                    <div className="email-display">
                        {copyStatus}
                    </div>
                    
                </a>
                
                {/* eslint-disable-next-line */}
                <a className="connect-item" href="https://github.com/BillyBDev" target="_blank" rel="noreferrer">
                    <i class="fab fa-github connect-icon"></i>
                    GitHub
                </a>

                {/* eslint-disable-next-line */}
                <a className="connect-item" href="https://linkedin.com/in/billy-brown-iii/" target="_blank" rel="noreferrer">
                    <i class="fab fa-linkedin connect-icon"></i>
                    LinkedIn
                </a>

                <a className="connect-item" href={Resume} target="_blank" rel="noreferrer">
                    <i class="fas fa-file-alt connect-icon"></i>
                    Resume
                </a>

            </div>
        </div>
    )
}

export default Connect;



