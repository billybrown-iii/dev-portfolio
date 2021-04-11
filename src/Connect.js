import React from "react"
import ReactTooltip from 'react-tooltip';

// function ConnectModule(icon, desc){
//     const [formToggle, setFormToggle] = useState(false);
//     return (
//         <div>

//         </div>
//     )
// }

function Connect(props) {
    function writeToClip(event){
        event.preventDefault();
        navigator.clipboard.writeText("billybdev@gmail.com");
        setTimeout(ReactTooltip.hide, 1200);
    }
    return (
        <div>
            <div className="card">
                <div className="card-title">Connect</div>
                
                <a data-tip='Copied!' data-event='click focus' className="connect-item email-button" onClick={(event) => {
                    event.preventDefault();
                    navigator.clipboard.writeText("hi")
                    }}>
                        <i class="far fa-clipboard connect-icon email-copy-icon"></i>
                        <i className="fas fa-envelope-square connect-icon"></i>                    

                    Email
                </a>
                <ReactTooltip type="light" delayHide={100} globalEventOff='click' afterShow={writeToClip} />
                <a className="connect-item">
                <i class="fab fa-github connect-icon"></i>
                    GitHub
                </a>

            </div>
        </div>
    )
}

export default Connect;