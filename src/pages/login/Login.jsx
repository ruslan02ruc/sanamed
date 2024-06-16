import './Login.scss'

import Input from '../../components/input/Input'
import Button from '../../components/button/Button'

function Login() {
  return (
    <div className="content-login">
      <div className="content-login__left">
      
      </div>

      <div className="content-login__right">
        <h1 className="content-login--title">Войти</h1>
        <form className='content-login--form'>
          <label>
            <span>Электронный адрес</span>
            <Input placeholder="Укажите свой e-mail" type="text"/>
          </label>
          <label>
            <span>Пароль</span>
            <Input placeholder="Укажите пароль" type="password"/>
            <span className="content-login--span-pass">Должна быть комбинация из минимум 8 букв, цифр и символов.</span>
          </label>
          <div className="content-login--checkbox">
            <label>
              <input type="checkbox"/>
              <span>Запомнить меня</span>
            </label>
            <a href="#">Забыли пароль?</a>
          </div>
          <Button text="Войти"/>
        </form>
        <span className="content-login--line"></span>
        <p className="content-login--login">Ещё нет аккаунта? <a href="#">Зарегистрироваться</a></p>
        <p className="content-login--login">Зайти с помощью <a href="#">ЭЦП</a> или <a href="#">QR</a></p>
      </div>
    </div>
  )
}

export default Login