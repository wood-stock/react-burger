import style from './icon-ingredient.module.css';
const IconIngredient = (props) => {
  return (
    <div className={style.pict} style={props.style}>
      <img className={style.img} src={props.img} alt='ingredient' />
      {props.inf && (
        <div className={`${style.inf} text text_type_main-default`}>
          {props.inf}
        </div>
      )}
    </div>
  );
};
export default IconIngredient;
