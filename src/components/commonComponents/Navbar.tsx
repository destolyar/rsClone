import '../../styles/components/navbar.scss'

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
          <a className='navbar__content__item-container__link' href="">Поездки</a>
        </div>
        <div className="navbar__content__item-container">
          <a className='navbar__content__item-container__link' href="">Курорты</a>
        </div>
        <div className="navbar__content__item-container">
          <a className='navbar__content__item-container__link' href="">Профиль</a>
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