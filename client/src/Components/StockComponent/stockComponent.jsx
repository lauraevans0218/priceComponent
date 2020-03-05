import React from 'react'; 
import style from './stockComponent.module.css';
import arrow from '../../Images/downArrow.png';
//Insert Vendor from DB 

const Stock = () => (
   
    <div>
        <h1 className={style.inStockTextStyle}>In Stock.</h1>
        <h2 className={style.stockTextStyle}>Ships from and sold by nozama.com.</h2> 
        <span className={style.quantityBox}> 
        <label className={style.dropDown}>Qty:</label>
        <span>
            <select id={style.arrowSelect}>
               <option id={style.optionStyle}>1</option>
               <option id={style.optionStyle}>2</option>
               <option id={style.optionStyle}>3</option>
               <option id={style.optionStyle}>4</option>
               <option id={style.optionStyle}>5</option>
            </select>
        </span>
           
           
        </span>

    </div>
    
);

export default Stock;