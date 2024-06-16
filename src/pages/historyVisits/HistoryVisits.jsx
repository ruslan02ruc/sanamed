import './HistoryVisits.scss'
import CardWrapper from '../../components/cardWrapper/CardWrapper'
import TextBlock from '../../components/textBlock/TextBlock'
import FormSelectionDate from '../../components/formSelectionDate/FormSelectionDate'

function HistoryVisits() {
  return (
    <div className="history-visits">
      <FormSelectionDate/>
      <div className="history-visits--list">
        <CardWrapper title="Вчера, 16:30">
          <TextBlock title="Врач:" text="Иванова Анна Петровна"/>
          <TextBlock title="Причина визита:" text="Послеоперационная реабилитация после операции на колене"/>
          <TextBlock title="Диагноз:" text="Постоперационное восстановление, ограничение движения в суставе"/>
          <TextBlock title="Лечение:" text="Индивидуальные упражнения, физиотерапия"/>
        </CardWrapper>
        <CardWrapper title="5 сентября 2023, 17:00">
          <TextBlock title="Врач:" text="Иванова Анна Петровна"/>
          <TextBlock title="Диагноз:" text="Постоперационное восстановление, ограничение движения в суставе"/>
          <TextBlock title="Лечение:" text="Индивидуальные упражнения, физиотерапия"/>
        </CardWrapper>
        <CardWrapper title="15 октября 2023, 17:00">
          <TextBlock title="Причина визита:" text="Послеоперационная реабилитация после операции на колене"/>
          <TextBlock title="Диагноз:" text="Постоперационное восстановление, ограничение движения в суставе"/>
          <TextBlock title="Лечение:" text="Индивидуальные упражнения, физиотерапия"/>
        </CardWrapper>
        <CardWrapper title="2 февраля 2023, 16:30">
          <TextBlock title="Диагноз:" text="Постоперационное восстановление, ограничение движения в суставе"/>
          <TextBlock title="Лечение:" text="Индивидуальные упражнения, физиотерапия"/>
        </CardWrapper>
      </div>
    </div>
  )
}

export default HistoryVisits