import React, { useEffect } from "react";
import * as CONFIG from '../../../config/config';

import './initialLoading.css';

const InitialLoading = ()=>{
    debugger;
    useEffect(()=>{
        document.querySelector('body').classList.add('in_loading');

        return()=>{
            document.querySelector('body').classList.remove('in_loading');
        }
    }, [])

    return(
        <div className="initial_loading">
            <img src={CONFIG.IMAGE_URL + 'logo.webp'} alt="mvn-loading-logo" className="img-fluid logo" style={{width: '90px'}} />
        </div>
    )
}

export default InitialLoading;