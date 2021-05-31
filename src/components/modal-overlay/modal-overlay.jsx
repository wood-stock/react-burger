import ReactDOM from 'react-dom';
import style from './modal-overlay.module.css';

const ModalOverlay = ({ closeModal, children }) =>
  ReactDOM.createPortal(
    <div
      className={style.overlay}
      onClick={(e) => (e.currentTarget === e.target ? closeModal() : null)}
    >
      {children}
    </div>,
    document.getElementById('modal')
  );

export default ModalOverlay;
