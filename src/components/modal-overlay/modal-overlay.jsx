import PropTypes from 'prop-types';
import style from './modal-overlay.module.css';

const ModalOverlay = ({ closeModal }) => (
  <div className={style.overlay} onClick={closeModal}></div>
);
ModalOverlay.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
export default ModalOverlay;
