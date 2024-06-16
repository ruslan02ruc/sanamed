import Button from '../../components/button/Button'
import CardWrapper from '../../components/cardWrapper/CardWrapper'
import TextBlock from '../../components/textBlock/TextBlock'
import './Notifications.scss'

function Notifications() {
  return (
    <div className="notifications">
      <CardWrapper title="02.07.2023">
        <TextBlock title="Результаты Лабораторного Анализа:" text="Результаты анализа крови доступны в вашем профиле. Уровень глюкозы: 115 мг/дл, общий холестерин: 180 мг/дл. Пожалуйста, свяжитесь с врачом для обсуждения." />
        <div className="notifications--btn">
          <Button text="Перейти"/>
        </div>
      </CardWrapper>
      <CardWrapper title="30.06.2023">
        <TextBlock title="Предстоящий Визит:" text="Напоминаем вам о предстоящей консультации у терапевта 20 июля 2023 года в 10:00. Пожалуйста, подтвердите свое присутствие." />
        <div className="notifications--btn">
          <Button text="Перейти"/>
        </div>
      </CardWrapper>
      <CardWrapper title="25.06.2023">
        <TextBlock title="Рекомендации по Лечению:" text="Врач рекомендует добавить умеренные физические нагрузки для поддержания здоровья суставов. Обсудите возможные упражнения на следующем визите." />
        <div className="notifications--btn">
          <Button text="Перейти"/>
        </div>
      </CardWrapper>
    </div>
  )
}

export default Notifications