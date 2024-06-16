import Button from '../button/Button';
import './Calendar.scss'

function CalendarForm(props) {
  return (
    <div className="calendar-wrapper">
      <div className="calendar-wrapper__top">
        <div className="calendar-form">
          <div className="calendar-form--title">
            <p>Декабрь 2023</p>
            <div className="calendar-form--btn">
              <button><img src="/icon/arrow-up-2-light-1.svg" alt="arrow"/></button>
              <button><img src="/icon/arrow-up-2-light-1.svg" alt="arrow"/></button>
            </div>
          </div>
          <div className="calendar-form--info">
            <table>
              <thead>
                <tr>
                  <td>Пн</td>
                  <td>Вт</td>
                  <td>Ср</td>
                  <td>Чт</td>
                  <td>Пт</td>
                  <td>Сб</td>
                  <td>Вс</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>1</td>
                  <td>2</td>
                  <td>3</td>
                  <td>4</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>6</td>
                  <td>7</td>
                  <td className="active">8</td>
                  <td>9</td>
                  <td>10</td>
                  <td>11</td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>13</td>
                  <td>14</td>
                  <td>15</td>
                  <td>16</td>
                  <td>17</td>
                  <td>18</td>
                </tr>
                <tr>
                  <td>19</td>
                  <td>20</td>
                  <td>21</td>
                  <td>22</td>
                  <td>23</td>
                  <td>24</td>
                  <td>25</td>
                </tr>
                <tr>
                  <td>26</td>
                  <td>27</td>
                  <td>28</td>
                  <td>29</td>
                  <td>30</td>
                  <td>31</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CalendarForm