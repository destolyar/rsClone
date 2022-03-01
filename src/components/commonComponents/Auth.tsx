import { useState } from 'react';
import { Requests } from '../utils/Requests';
import '../../styles/components/auth.scss'
import { AuthProps } from '../../types'


export const Auth: React.FunctionComponent<AuthProps> = (props) => {
  let registrationLogin: string, registrationEmail: string, registrationPassword: string;
  let login: string, password: string;
  let [userData, setUserData] = useState<any>();

  return(
    <div style={{display: props.display ? 'flex' : 'none'}} className="auth" onClick={e => {
      const target = e.target as HTMLAreaElement
      target.className.includes('auth__registration') || target.className.includes('auth__login') ? props.setDisplay(true) : props.setDisplay(false)
    }}>
      <div style={{display: props.type ? 'none' : 'flex'}} className='auth__registration'>
        <h2 className='auth__registration__title'>Регистрация</h2>
        <form className='auth__registration__form' action="https://rs-clone-travel.herokuapp.com/user" method='put'>
          <h3 className='auth__registration__form__subtitle'>Почта</h3>
          <input className='auth__registration__form__input' type="text" name='email' onChange={(i) => registrationEmail =  i.target.value}/>
          <h3 className='auth__registration__form__subtitle'>Логин</h3>
          <input className='auth__registration__form__input' type="text" name='login' onChange={(i) => registrationLogin =  i.target.value}/>
          <h3 className='auth__registration__form__subtitle'>Пароль</h3>
          <input className='auth__registration__form__input' type="text" name='pwd' onChange={(i) => registrationPassword =  i.target.value}/>

          <button className='auth__registration__form__button' type='button' onClick={() => {
            Requests.userRegistration(registrationLogin, registrationEmail, registrationPassword)
          }}>Зарегистрироваться</button>
        </form>
      </div>
      <div style={{display: props.type ? 'flex' : 'none'}} className='auth__login'>
          <h2 className='auth__login__title'>Авторизация</h2>
          <div className='auth__login__form'>
            <h3 className='auth__login__form__subtitle'>Логин</h3>
            <input className='auth__login__form__input' type="text" name='email' onChange={(i) => login =  i.target.value}/>
            <h3 className='auth__login__form__subtitle'>Пароль</h3>
            <input className='auth__login__form__input' type="text" name='email' onChange={(i) => password =  i.target.value}/>

            <button className='auth__login__form__button' type='button' onClick={() => {
                const fetchData = async () => {
                  const response: Response = await Requests.userLogin(login, password)
                  setUserData(response)
                }
                fetchData()
                console.log(userData)
            }}>Войти</button>
          </div>
      </div>
    </div>
    
  )
}
