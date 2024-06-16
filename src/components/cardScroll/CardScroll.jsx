import './CardScroll.scss'
import Card from "../card/Card";

function CardScroll() {
  return (
    <div className='card-scroll'>
      <img className='card-scroll--btn' src="/arrow-up-2-light.svg" alt="arrow"/>
      <Card text="Обзор системы" style="secondary"/>
      <Card text="Графики врачей" style="primary"/>
      <Card text="Отслеживайте свои приемы" style="secondary"/>
      <img className='card-scroll--btn' src="/arrow-up-2-light.svg" alt="arrow"/>
  </div>
  )
}

export default CardScroll