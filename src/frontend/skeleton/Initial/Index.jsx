import React, { useState, useEffect, useRef } from "react";
import * as CONFIG from "../../../config/config";
import "./initialLoading.css";
import { useLocation } from "react-router-dom";

const InitialLoading = ({ loadingCount, setLoadingCount, onComplete, fast = "false" }) => {
    const intervalRef = useRef(null);
    const onCompleteRef = useRef(onComplete);
    const isComplete = useRef(false);
    const {pathname} = useLocation()

    useEffect(() => {
        // Update the onCompleteRef to ensure it references the latest function
        onCompleteRef.current = onComplete;
    }, [onComplete]);

    useEffect(() => {
        // Set the interval duration based on the `fast` prop
        const intervalDuration = fast === "true" ? 0 : 400;

        // Increment loadingCount at a regular interval
        intervalRef.current = setInterval(() => {
            setLoadingCount((prevState) => {
                if (prevState >= 99) {
                    clearInterval(intervalRef.current); // Pause near completion
                    localStorage.setItem('count', prevState);
                    onCompleteRef.current?.(); // Call the onComplete callback if available
                    return prevState;
                }
                localStorage.setItem('count', Math.floor(prevState + Math.random() * 5));
                return Math.floor(prevState + Math.random() * 5); // Increment slightly
            });
        }, intervalDuration);

        return () => {
            clearInterval(intervalRef.current); // Cleanup interval on unmount
        }
    }, [fast]);

    return (
        <div className="initial_loading">
            <div className="custom_load">
                <div className="building">
                    <img src={CONFIG.IMAGE_URL + 'loader_building.webp'} alt="loader building" className="img-fluid building_icon" />
                    <div className="overlay" style={{bottom:Math.floor(loadingCount)+'%'}}></div>
                </div>
                <video src={CONFIG.IMAGE_URL + 'loader.mp4'} muted autoPlay loop />
                <div className="bar">
                    <span className="fill" style={{width:Math.floor(loadingCount)+'%'}}></span>
                </div>
                <p className="count">{Math.floor(loadingCount)} %</p>
            </div>
        </div>
    );
};

export default InitialLoading;
