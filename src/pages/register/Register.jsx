import './Register.scss'

import Input from '../../components/input/Input'
import Button from '../../components/button/Button'

function Register() {
  return (
    <div className="content-register">
      <div className="content-register__left">
      
      </div>

      <div className="content-register__right">
        <h1 className="content-register--title">Зарегистрироваться</h1>
        <form className='content-register--form'>
          <label>
            <span>Электронный адрес</span>
            <Input placeholder="Укажите свой e-mail" type="text"/>
          </label>
          <label>
            <span>Пароль</span>
            <Input placeholder="Укажите пароль" type="password"/>
            <span className="content-register--span-pass">Должна быть комбинация из минимум 8 букв, цифр и символов.</span>
          </label>
          <div className="content-register--checkbox">
            <label>
              <input type="checkbox"/>
              <span>Запомнить меня</span>
            </label>
            <a href="#">Забыли пароль?</a>
          </div>
          <Button text="Войти"/>
        </form>
        <span className="content-register--line"></span>
        <p className="content-register--register">Ещё нет аккаунта? <a href="#">Зарегистрироваться</a></p>
        <p className="content-register--login">Зайти с помощью <a href="#">ЭЦП</a> или <a href="#">QR</a></p>
      </div>
    </div>
  )
}

export default Register