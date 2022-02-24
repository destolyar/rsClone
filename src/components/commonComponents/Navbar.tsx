import '../../styles/components/navbar.scss';
import { Link } from 'react-router-dom'

export const Navbar: React.FunctionComponent = () => {
  return(
    <header className='navbar'>
      <input type="checkbox" id='burger-checkbox'/>
        <label htmlFor="burger-checkbox" id='burger-checkbox-label'>
          <div className='navbar__burger-menu-button'>
            <div className='navbar__burger-menu-button__line'></div>
            <div className='navbar__burger-menu-button__line'></div>
          </div>
        </label>
      <nav className='navbar__content'>
        <div className="navbar__content__item-container">
          <Link to={'/resorts'} className='navbar__content__item-container__link'>Поездки</Link>
        </div>
        <div className="navbar__content__item-container">
          <Link to={'/trips'} className='navbar__content__item-container__link'>Курорты</Link>
        </div>
        <div className="navbar__content__item-container">
          <Link to={'/profile'} className='navbar__content__item-container__link'>Профиль</Link>
        </div>
        <div className="navbar__content__item-container">
          <button className='navbar__content__item-container__login' id='login-button'>Войти</button>
        </div>
        <div className="navbar__content__item-container">
          <button className='navbar__content__item-container__registration'>Зарегистрироваться</button>
        </div>
      </nav>
    </header>
  )
}