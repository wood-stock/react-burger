import ReactDOM from 'react-dom';
import { useEffect } from 'react';
import ModalOverlay from '../modal-overlay/modal-overlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './modal.module.css';
import { CLOSE_MODAL } from '../../services/actions/ingredients';
import { useDispatch } from 'react-redux';
const Modal = ({ children, headerText }) => {
  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch({
      type: CLOSE_MODAL,
    });
  };
  const closeModalsByEscape = (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };
  useEffect(() => {
    document.addEventListener('keydown', closeModalsByEscape);
    return () => {
      document.removeEventListener('keydown', closeModalsByEscape);
    };
  });
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
