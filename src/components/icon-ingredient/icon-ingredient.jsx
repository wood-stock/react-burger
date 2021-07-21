import style from './icon-ingredient.module.css';
const IconIngredient = (props) => {
  return (
    <div className={style.pict} style={props.style}>
      <img
        className={style.img}
        src='https://code.s3.yandex.net/react/code/bun-02-mobile.png'
        alt='ingredient'
      />
    </div>
  );
};
export default IconIngredient;
