import React from 'react'

import '../style/pieChart.scss'

const PieChart = () => {
  return (
    <div className='circle-graph'>
      <svg width='300' height='300'>
        <circle r='140' cx='150' cy='150' />
      </svg>
    </div>
  )
}

export default PieChart

// if (!roles.includes(currentRole)) return
