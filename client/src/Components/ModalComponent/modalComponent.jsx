import React from 'react';
import locationMarker from '../../Images/locationMarker.png';
import style from './modalComponent.module.css';

class Modal extends React.Component {
    handleClick() {
        let modal = document.getElementById("myModal");
        let btn = document.getElementById("myLink");
        let span = document.getElementsByClassName("close")[0];
      
        btn.onclick = function() {
            modal.style.display = "block";
        }
    
        span.onclick = function() {
            modal.style.display = "none";
        }
    
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
      }

    render() {
        return (
            <div>
                <img className= {style.imgStyle} src={locationMarker}/>
                <span id="myLink" href="#" className={style.hyperLinkTextStyle} onClick={this.handleClick}>Deliver to Laura - Fort Hood 76544</span>
                <div id= "myModal" className={style.modal}>
                    <div className={style.modalContent}>
                        <span className={style.close}></span>
                            <p>test test 1</p>
                    </div>
                </div>
            </div>)  

    }




}
   



export default Modal;