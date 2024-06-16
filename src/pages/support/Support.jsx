import Button from '../../components/button/Button';
import './Support.scss';

function Support() {
  return (
    <div className="support">
      <div className="support--input-block">
        <label>
          <p>Напишите пожалуйста личные предпочтения и пожелания по системе <span>Human Recovery+</span></p>
          <input type="text" placeholder="Начните набирать текст сообщения ..."/>
        </label>
        <div className="support--btn">
          <Button text="Отправить"/>
        </div>
      </div>
      <div className="support-block">
        <p className="support--gray-text">Обратная Связь и Вопросы:</p>
        <p className="support--email">support@example.com</p>
      </div>
      <div className="support-block">
        <p className="support--gray-text">Оценка Приложения:</p>
        <div className="support-block--star">
          <img src="/icon/star.svg" alt="star"/>
          <img src="/icon/star.svg" alt="star"/>
          <img src="/icon/star.svg" alt="star"/>
          <img src="/icon/star.svg" alt="star"/>
          <img src="/icon/star.svg" alt="star"/>
          <span>5 / 5</span>
        </div>
      </div>
    </div>
  )
}

export default Support