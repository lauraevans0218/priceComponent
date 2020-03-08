import React from 'react'; 
import style from './socialMediaComponent.module.css';
import emailIcon from '../../Images/emailIcon.png';
import fbIcon from '../../Images/facebookIcon.png';
import twitterIcon from '../../Images/twitterIcon.png';
import pinterestIcon from '../../Images/pinterestIcon.png';

const SocialMedia = () => (
    <div>
        <span>
            <image src={emailIcon} 
            className={style.iconStyle3}>
            </image>
        </span>
    </div>
);

export default SocialMedia;