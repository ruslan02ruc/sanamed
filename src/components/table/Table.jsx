import Pagination from '../pagination/Pagination'
import './Table.scss'

function Table() {
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th><input type="checkbox"/></th>
            <th>ФИО<button><img src="/icon/arrow-down.svg" alt="arrow-down" /></button></th>
            <th>Title</th>
            <th>Title</th>
            <th>Title</th>
            <th>Title</th>
            <th>Title</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr className="table--yellow">
            <td><input type="checkbox"/></td>
            <td><img src="\User Thumb.png" alt="" />Әбілтаев Алишер</td>
            <td>Cell Text</td>
            <td>Cell Text</td>
            <td>Cell Text</td>
            <td>Cell Text</td>
            <td><span className="table--badge">Badge</span></td>
            <td><img src="/icon/more-horizontal-f.svg" alt="more-horizontal" /></td>
          </tr>
          <tr className="table--yellow">
            <td><input type="checkbox"/></td>
            <td><img src="/User Thumb.png" alt="" />Әбілтаев Алишер</td>
            <td>Cell Text</td>
            <td>Cell Text</td>
            <td>Cell Text</td>
            <td>Cell Text</td>
            <td><span className="table--badge">Badge</span></td>
            <td><img src="/icon/more-horizontal-f.svg" alt="more-horizontal" /></td>
          </tr>
          <tr className="table--red">
            <td><input type="checkbox"/></td>
            <td><img src="/User Thumb.png" alt="" />Әбілтаев Алишер</td>
            <td>Cell Text</td>
            <td>Cell Text</td>
            <td>Cell Text</td>
            <td>Cell Text</td>
            <td><span className="table--badge">Badge</span></td>
            <td><img src="/icon/more-horizontal-f.svg" alt="more-horizontal" /></td>
          </tr>
          <tr className="table--green">
            <td><input type="checkbox"/></td>
            <td><img src="/User Thumb.png" alt="" />Әбілтаев Алишер</td>
            <td>Cell Text</td>
            <td>Cell Text</td>
            <td>Cell Text</td>
            <td>Cell Text</td>
            <td><span className="table--badge">Badge</span></td>
            <td><img src="/icon/more-horizontal-f.svg" alt="more-horizontal" /></td>
          </tr>
          <tr>
            <td><input type="checkbox"/></td>
            <td><img src="/User Thumb.png" alt="" />Әбілтаев Алишер</td>
            <td>Cell Text</td>
            <td>Cell Text</td>
            <td>Cell Text</td>
            <td>Cell Text</td>
            <td><span className="table--badge">Badge</span></td>
            <td><img src="/icon/more-horizontal-f.svg" alt="more-horizontal" /></td>
          </tr>
          <tr>
            <td><input type="checkbox"/></td>
            <td><img src="/User Thumb.png" alt="" />Әбілтаев Алишер</td>
            <td>Cell Text</td>
            <td>Cell Text</td>
            <td>Cell Text</td>
            <td>Cell Text</td>
            <td><span className="table--badge">Badge</span></td>
            <td><img src="/icon/more-horizontal-f.svg" alt="more-horizontal" /></td>
          </tr>
          <tr className="table--green">
            <td><input type="checkbox"/></td>
            <td><img src="/User Thumb.png" alt="" />Әбілтаев Алишер</td>
            <td>Cell Text</td>
            <td>Cell Text</td>
            <td>Cell Text</td>
            <td>Cell Text</td>
            <td><span className="table--badge">Badge</span></td>
            <td><img src="/icon/more-horizontal-f.svg" alt="more-horizontal" /></td>
          </tr>
        </tbody>
      </table>
      <Pagination/>
    </div>
  )
}

export default Table