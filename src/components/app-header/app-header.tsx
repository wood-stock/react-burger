import { NavLink, useLocation, Link } from 'react-router-dom';
import style from './app-header.module.css';
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

const AppHeader = () => {
  const location = useLocation().pathname;

  return (
    <header className={style.header + ' pt-4 pb-4'}>
      <div className={style.container}>
        <div className={style.wrapperNav}>
          <nav>
            <ul
              className={`${style.ul} text text_type_main-default text_color_inactive`}
            >
              <li className={style.li}>
                <NavLink
                  exact
                  to='/'
                  className={`${style.button} mr-2`}
                  activeClassName={style.active}
                >
                  <BurgerIcon type='secondary' />
                  <span className='pl-2 '>Конструктор</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to='/feed'
                  className={style.button}
                  activeClassName={style.active}
                >
                  <ListIcon type='secondary' />
                  <span className='pl-2'>Лента заказов</span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
        <div className={style.wrapperLogo}>
          <Link to='/'>
            <Logo />
          </Link>
        </div>
        <div
          className={`${style.wrapperLk} text text_type_main-default text_color_inactive`}
        >
          <NavLink
            to='/profile'
            className={
              location === '/profile' || location === '/login'
                ? `${style.button} ${style.active}`
                : style.button
            }
            activeClassName={style.active}
          >
            <ProfileIcon type='secondary' />
            <span className='pl-2'>Личный кабинет</span>
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default AppHeader;
