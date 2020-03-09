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

    handleClose () {
        let modal = document.getElementById("myModal");
          let xclose = document.getElementById("xclose");
                xclose.onclick = function() {
                    modal.style.display = "none";
                }
      }

    render() {
        return (
            <div>
                <img className= {style.imgStyle} src={locationMarker}/>
                <span id={"myLink"} href="#" className={style.hyperLinkTextStyle} 
                onClick={this.handleClick}>Deliver to Laura - Fort Hood 76544</span>
                <div id={"myModal"} className={style.modal}>
                    <div className={style.modalContent}>
                        <span className={style.close}></span>
                            <div className={style.modalContent}>
                                <div className={style.modalHeader}>
                                    <span id={"xclose"} className={style.close} onClick={this.handleClose}>&times;</span>
                                        <h2 className={style.modalHeaderText}>Choose your location</h2>
                            </div>
                                <div className={style.modalBody}>
                                    <p className={style.modalText}>Delivery options and delivery speeds may vary for different locations</p>
                                        <button className={style.modalButton}><b>Laura Evans</b> 12345 Awesome Way Fort Hood, TX 76544 
                                        <p className={style.modalText}>Default Address</p></button>
                                        <button className={style.modalButton}><b>Laura Evans</b> 54321 Unicorn Way Miami, FL 33101</button>
                                        <p className={style.addressText}>Manage address book</p>
                                        <hr></hr>
                                        <form>
                                            <label className={style.modalText}>or enter a US zip <code></code></label>
                                            <span>
                                            <input></input><button>Apply</button>
                                            </span>
                                        </form>
                                </div>
                                    <div className={style.modalFooter}>
                                        <button className={style.done}>Done</button>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>)  
    }
}
   



export default Modal;