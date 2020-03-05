import React from 'react'; 
import style from './priceComponent.module.css';
//Static for now, need to add a route to pull data from DB, change state in componentdidmount

const Price = () => (
   
    <div>
        <h1 className={style.priceStyle}>$45.23</h1>
    </div>
);

export default Price;