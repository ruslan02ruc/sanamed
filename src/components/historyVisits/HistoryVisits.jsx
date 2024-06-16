import CardWrapper from '../cardWrapper/CardWrapper'
import TextBlock from '../textBlock/TextBlock'
import './HistoryVisits.scss'

function HistoryVisits() {
  return (
    <div className="history-visits">
      <CardWrapper title="История посещений">
        <ul className="history-visits--list">
          <li>Дата и время предыдущих визитов</li>
          <li>Проведенные процедуры и обследования</li>
          <li>Рекомендации врачей</li>
        </ul>
      </CardWrapper>
    </div>
  )
}

export default HistoryVisits