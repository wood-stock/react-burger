import style from './app-header.module.css';
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

const AppHeader = () => (
  <header className={style.header + ' pt-4 pb-4'}>
    <div className={style.container}>
      <div className={style.wrapperNav}>
        <nav>
          <ul className={style.ul}>
            <li className={style.li}>
              <a href='/' className={style.button + ' mr-2'}>
                <BurgerIcon type='primary' />
                <span className='pl-2 text text_type_main-default'>
                  Конструктор
                </span>
              </a>
            </li>
            <li>
              <a href='/' className={style.button}>
                <ListIcon type='secondary' />
                <span className='pl-2 text text_type_main-default text_color_inactive'>
                  Лента заказов
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className={style.wrapperLogo}>
        <Logo />
      </div>
      <div className={style.wrapperLk}>
        <a href='/' className={style.button}>
          <ProfileIcon type='secondary' />
          <span className='pl-2 text text_type_main-default text_color_inactive'>
            Личный кабинет
          </span>
        </a>
      </div>
    </div>
  </header>
);

export default AppHeader;
