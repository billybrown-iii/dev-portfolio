import React, { useState } from "react";

function Connect(props) {
    const [copyStatus, setCopyStatus] = useState("Copy to clipboard?");

    function writeToClip(event){
        event.preventDefault();
        navigator.clipboard.writeText("link8495@gmail.com");
        setCopyStatus("Copied!");
        setTimeout(() => {setCopyStatus("Copy to clipboard?")}, 2000)
    }
    
    return (
        <div>
            <div className="card">
                <div className="card-title">Connect</div>

                <a className="connect-item" href="/resume.pdf" target="_blank" rel="noreferrer">
                    <i className="fas fa-file-alt connect-icon"></i>
                    Resume
                </a>
                
                <a className="connect-item" href="https://github.com/billybrown-iii" target="_blank" rel="noreferrer">
                    <i className="fab fa-github connect-icon"></i>
                    GitHub
                </a>

                <a className="connect-item" href="https://linkedin.com/in/billybrown-iii/" target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin connect-icon"></i>
                    LinkedIn
                </a>

                <div className="connect-item email-button" onClick={e => {writeToClip(e)}}>
                    <div className="email-btn-core">
                        <i className="fas fa-envelope-square connect-icon"></i>                    
                        Email
                    </div>
                    <div className="email-display">
                        link8495@gmail.com
                    </div>
                    <div className="email-display">
                        {copyStatus}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Connect;



