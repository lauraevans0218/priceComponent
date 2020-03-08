import React from 'react'; 
import cartIcon from '../../Images/cartIcon.jpeg';
import buyNowIcon from '../../Images/buyNowIcon.png';

import style from './bottomComponent.module.css';

const Bottom = () => (
   
    <div>
        <div>
        <span>       
            <button className={style.addToCartButtonStyle}>
                <img src={cartIcon} 
                className={style.iconStyle} ></img>
                  <text className={style.textStyle}>Add to Cart</text></button> 
        </span>
        </div>
        
        <div className={style.buttonDivStyle}>
        <span>       
            <button className={style.buyNowButtonStyle}>
                <img src={buyNowIcon} 
                className={style.iconStyle2} ></img>
                  <text className={style.textStyle}>Buy Now</text></button> 
        </span>
        </div>
        <form>
       <br></br>
                <input type="checkbox"></input>
                <label className={style.giftTextStyle}>Add gift options
                </label>
                <br></br>
                <hr></hr>
        </form>
        <button className={style.dashButtonTextStyle}>Add to your Dash Buttons</button>
        <div className={style.dashTextStyle} id={style.dash}>Learn more about Dash Buttons</div>
        <br></br>
        <button className={style.dashButtonTextStyle}>Add to List</button>
        <br></br>
        
    </div>
);

export default Bottom;