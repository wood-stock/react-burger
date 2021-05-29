import ReactDOM from 'react-dom';
import IngredientDetails from '../ingredient-details/ingredient-details';
import Modal from '../modal/modal';
import OrderDetails from '../order-datails/order-details';
import style from './modal-overlay.module.css';

const ModalOverlay = ({ closeModal, item, orderButtonIsPush }) =>
  ReactDOM.createPortal(
    <div
      className={style.overlay}
      onClick={(e) => (e.currentTarget === e.target ? closeModal() : null)}
    >
      <Modal
        closeModal={closeModal}
        headerText={!orderButtonIsPush && 'Детали ингредиента'}
      >
        {orderButtonIsPush ? <OrderDetails /> : <IngredientDetails {...item} />}
      </Modal>
    </div>,
    document.getElementById('modal')
  );

export default ModalOverlay;
