import React, { useEffect } from "react";
import * as CONFIG from '../../../config/config';

import './initialLoading.css';

const InitialLoading = ()=>{
    useEffect(()=>{
        document.querySelector('body').classList.add('in_loading');

        return()=>{
            document.querySelector('body').classList.remove('in_loading');
        }
    }, [])

    return(
        <div className="initial_loading">
            <img src={CONFIG.IMAGE_URL + 'logo.webp'} alt="mvn-loading-logo" className="img-fluid logo" style={{width: '90px'}} />
            {/* <video src={CONFIG.IMAGE_URL + 'loader.mp4'} muted autoPlay loop controls={false}  playsInline ></video> */}
        </div>
    )
}

export default InitialLoading;