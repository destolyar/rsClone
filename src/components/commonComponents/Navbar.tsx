import '../../styles/components/navbar.scss';
import { Link } from 'react-router-dom'
import { Auth } from '../commonComponents/Auth';
import { useState } from 'react';

export const Navbar: React.FunctionComponent = () => {
  let [authDisplay, setAuthDisplay] = useState<boolean>(false)
  let [itsLogin, setItsLogin] = useState<boolean>(true)

  return(
    <header className='navbar'>
      <Auth display={authDisplay} setDisplay={setAuthDisplay} type={itsLogin}/>
      <input type="checkbox" id='burger-checkbox'/>
        <label htmlFor="burger-checkbox" id='burger-checkbox-label'>
          <div className='navbar__burger-menu-button'>
            <div className='navbar__burger-menu-button__line'></div>
            <div className='navbar__burger-menu-button__line'></div>
          </div>
        </label>
      <nav className='navbar__content'>
        <div className="navbar__content__item-container">
          <Link to={'/trips'} className='navbar__content__item-container__link'>Поездки</Link>
        </div>
        <div className="navbar__content__item-container">
          <Link to={'/resorts'} className='navbar__content__item-container__link'>Курорты</Link>
        </div>
        <div className="navbar__content__item-container">
          <Link to={'/profile'} className='navbar__content__item-container__link'>Профиль</Link>
        </div>
        <div className="navbar__content__item-container">
          <button className='navbar__content__item-container__login' id='login-button' onClick={() => {
            setAuthDisplay(true)
            setItsLogin(true)
          }}>Войти</button>
        </div>
        <div className="navbar__content__item-container">
          <button className='navbar__content__item-container__registration' onClick={() => {
            setAuthDisplay(true)
            setItsLogin(false)
          }}>Зарегистрироваться</button>
        </div>
      </nav>
    </header>
  )
}