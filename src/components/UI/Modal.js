import ReactDOM from 'react-dom';
import classess from './Modal.module.css';

const Backdrop = (props) => {
  return <div className={classess.backdrop} onClick={props.onHideCart}></div>;
};

const ModalOverlaay = (props) => {
  return (
    <div className={classess.modal}>
      <div className={classess.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById('overlays');
const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onHideCart={props.onHideCart} />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlaay>{props.children}</ModalOverlaay>, portalElement)}
    </>
  );
};

export default Modal;
