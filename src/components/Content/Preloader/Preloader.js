import React from 'react';
import c from "./Preloader.module.css";
import preloader from '../../../assets/img/preloader.gif';

export default () => {
    return(
        <div className={c.preloader_wrap}>
            <img className={c.preloader} src={preloader} alt="preloader" />
        </div>
    ) 
}