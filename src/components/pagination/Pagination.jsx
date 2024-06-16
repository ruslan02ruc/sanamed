import './Pagination.scss'

function Pagination() {
  return (
    <div className="pagination">
      <div className='pagination--previous'>
        <img src="/icon/arrow-up-2-light-1.svg" alt="arrow-up" />
        <p>Previous</p>
      </div>
      <div className="pagination-list">
        <span className="pagination-item">1</span>
        <span className="pagination-item">2</span>
        <span className="pagination-item">3</span>
        <span className="pagination-item">4</span>
        <span className="pagination-item">5</span>
        <span className="pagination-item">...</span>
        <span className="pagination-item">11</span>
      </div>
      <div className='pagination--next'>
        <p>Next</p>
        <img src="/icon/arrow-up-2-light.svg" alt="arrow-up" />
      </div>
    </div>
  )
}

export default Pagination