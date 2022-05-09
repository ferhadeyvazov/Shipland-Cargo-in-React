import React from 'react'
import "./Drop.css"
function Dropmenu() {
  return (
    <div className='dropdown'>

        <div className="dropdown-content">
            <div className="dropdown-item">
                Pending Order
            </div>
              <div className="dropdown-item">
                  Bulk Order
              </div>

        </div>
    </div>
  )
}

export default Dropmenu