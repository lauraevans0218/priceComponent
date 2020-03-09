import React from 'react'; 
import style from './socialMediaComponent.module.css';
import emailIcon from '../../Images/emailIcon.png';
import fbIcon from '../../Images/facebookIcon.png';
import twitterIcon from '../../Images/twitterIcon.png';
import pinterestIcon from '../../Images/pinterestIcon.png';

const SocialMedia = () => (

    <div>
        <hr></hr>
        <br></br>
        <span className={style.socialMediaBox}>
            <img src={emailIcon} 
            className={style.imgStyle}>
            </img>
            <img src={fbIcon} 
            className={style.imgStyle}>
            </img>
            <img src={twitterIcon} 
            className={style.imgStyle2}>
            </img>
            <img src={pinterestIcon} 
            className={style.imgStyle}>
            </img>
        </span>
    </div>
);

export default SocialMedia;