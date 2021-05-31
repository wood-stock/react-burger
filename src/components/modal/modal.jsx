import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './modal.module.css';
const Modal = ({ closeModal, children, headerText }) => (
  <div className={style.modal}>
    <header className={style.header}>
      <p className='text text_type_main-large'>{headerText}</p>
      <CloseIcon type='primary' onClick={closeModal} />
    </header>
    {children}
  </div>
);
export default Modal;
