import React from 'react';
import Modal from 'react-modal';
import './App.css';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
 
// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')
 
function ModalComponent(props){
  var subtitle;
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
 
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }
 
  function closeModal(){
    setIsOpen(false);
  }
 
    return (
      <div>
        <button onClick={openModal} className="more">more</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
           <button onClick={closeModal} className="navbuton">X</button><br/><br/>
          <img src={props.item.avatar} width="100" height="100" className="img"  />
          <h2 ref={_subtitle => (subtitle = _subtitle)}>{props.item.first_name} {props.item.last_name}</h2>
          <div>{props.item.email}</div>
          <form>
            
          </form>
        </Modal>
      </div>
    );
}
 
export default ModalComponent;