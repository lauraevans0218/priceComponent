import React from 'react';
import image from '../../Images/newPrimeLogo.png';
import style from './shippingComponent.module.css';
import arrow from '../../Images/downArrow.png';

const Shipping = () => (

    <div>
        <span>
        <div className={style.shippingTextStyle}><img src={image} className={style.imgStyle}/>FREE One-Day & </div>
        </span>
       
        <div className={style.dropDownStyle}> 
        <div className={style.dropDownColor}>FREE Returns <img src={arrow} className={style.arrowStyle}/></div>
            <div className={style.dropdownContent}>
                <a><b>Return this item for free</b></a>
                <br></br>
                <a>Free returns are available for the shipping address you chose. 
                    You can return the item for any reason in new and unused condition 
                    and get a full refund: no shipping charges</a>
                <br></br>
                <div className={style.dropDownStyle2}>
                    <span className={style.dropDownColor2} > How to return the item?</span>
                        <div className={style.dropdownContent2}>
                            <a>1. Go to your orders and start the return</a>
                            <br></br>
                            <a>2. Select the ship method</a>
                            <br></br>
                            <a>3. Ship it!</a>
                        </div>
                </div>
            </div>
        </div>
        
    </div>

);







export default Shipping;