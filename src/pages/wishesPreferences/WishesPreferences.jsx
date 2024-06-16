import Button from '../../components/button/Button'
import CardWrapper from '../../components/cardWrapper/CardWrapper'
import './WishesPreferences.scss'

function WishesPreferences() {
  return (
    <div className="wishes-preferences">
      <div className="wishes-preferences--input-block">
        <label>
          Напишите пожалуйста личные предпочтения и пожелания
          <input type="text" placeholder="Начните набирать текст сообщения ..."/>
        </label>
        <div className="wishes-preferences--btn">
          <Button text="Отправить"/>
        </div>
      </div>
      <CardWrapper title="Обращение 20 июня 2023, 14:00">
        <div className="wishes-preferences--message">
          <p className="wishes-preferences--title">Личные предпочтения и пожелания</p>
          <p className="wishes-preferences--message-text">Предпочитаю получать информацию о своем состоянии здоровья по электронной почте. Хотел бы, чтобы врачи предоставляли понятные объяснения и отвечали на вопросы в ясной форме.</p>
        </div>
        <div className="wishes-preferences--response">
          <p className="wishes-preferences--title">Ответ</p>
          <p className="wishes-preferences--response-text">Врач готов регулярно обновлять пациента по электронной почте и предоставлять подробные ответы на его вопросы. Обязуется использовать понятные термины и оказывать поддержку в понимании его состояния здоровья.</p>
          <div className="wishes-preferences--response-profile">
            <img src="/icon/profile-person.svg" alt="profile-person" />
            <div>
              <p>Jane Doe</p>
              <p>Реабилитолог</p>
            </div>
          </div>
        </div>
      </CardWrapper>
    </div>
  )
}

export default WishesPreferences