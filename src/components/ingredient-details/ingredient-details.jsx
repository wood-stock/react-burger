import PropTypes from 'prop-types';
import '@ya.praktikum/react-developer-burger-ui-components';
import style from './ingredient-details.module.css';
const IngredientDetails = ({
  name,
  image_large,
  calories,
  proteins,
  fat,
  carbohydrates,
}) => (
  <section className={style.ingredient}>
    <img src={image_large} alt={name} className='mb-4' />
    <h2 className='text text_type_main-medium mb-8'>{name}</h2>
    <div className={style.info + ' text_color_inactive mb-15'}>
      <div className={style.wrapper}>
        <span className='text text_type_main-default pb-2'>Калории,ккал</span>
        <span className='text text_type_digits-default'>{calories}</span>
      </div>
      <div className={style.wrapper}>
        <span className='text text_type_main-default pb-2'>Белки, г</span>
        <span className='text text_type_digits-default'>{proteins}</span>
      </div>
      <div className={style.wrapper}>
        <span className='text text_type_main-default pb-2'>Жиры, г</span>
        <span className='text text_type_digits-default'>{fat}</span>
      </div>
      <div className={style.wrapper}>
        <span className='text text_type_main-default pb-2'>Углеводы, г</span>
        <span className='text text_type_digits-default'>{carbohydrates}</span>
      </div>
    </div>
  </section>
);
IngredientDetails.propTypes = {
  name: PropTypes.string.isRequired,
  image_large: PropTypes.string.isRequired,
  proteins: PropTypes.number.isRequired,
  fat: PropTypes.number.isRequired,
  carbohydrates: PropTypes.number.isRequired,
  calories: PropTypes.number.isRequired,
};
export default IngredientDetails;
