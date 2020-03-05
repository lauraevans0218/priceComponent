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
                className={style.iconStyle} ></img>
                  <text className={style.textStyle}>Buy now</text></button> 
        </span>
        </div>
        <form>
       <br></br>
                <input type="checkbox"></input>
                <label className={style.giftTextStyle}>Add gift options
                </label>
        </form>
        <button className={style.dashButtonTextStyle}>Add to your Dash Buttons</button>
        <h5 className={style.dashTextStyle}>Learn more about Dash Buttons</h5>
        <button className={style.dashButtonTextStyle}>Add to List</button>
    </div>
);

export default Bottom;