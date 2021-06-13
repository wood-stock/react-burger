import ReactDOM from 'react-dom';
import { useContext } from 'react';
import { ModalContext } from '../../services/appContext';
import ModalOverlay from '../modal-overlay/modal-overlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './modal.module.css';
const Modal = ({ children, headerText }) => {
  const { closeModal } = useContext(ModalContext);
  return ReactDOM.createPortal(
    <>
      <div className={style.modal}>
        <header className={style.header}>
          <p className='text text_type_main-large'>{headerText}</p>
          <CloseIcon type='primary' onClick={closeModal} />
        </header>
        {children}
      </div>
      <ModalOverlay closeModal={closeModal}></ModalOverlay>
    </>,
    document.getElementById('modal')
  );
};

export default Modal;
