import React from 'react';
import ReactDOM from 'react-dom';
import Bottom from '../BottomComponent/bottomComponent';
import Delivery from '../DeliveryComponent/deliveryComponent';
import Price from '../PriceComponent/priceComponent';
import Shipping from '../ShippingComponent/shippingComponent';
import Stock from '../StockComponent/stockComponent';
import Modal from '../ModalComponent/modalComponent';
import style from './index.module.css';
import SocialMedia from '../SocialMediaComponent/socialMediaComponent';


class App extends React.Component {

  render() {
    
    return (
      <div className={style.styleBody}>
        <Price />
        <Shipping />
        <Delivery />
        <Modal />
        <Stock /> 
        <br></br>
        <Bottom />
        <SocialMedia />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('laura'));