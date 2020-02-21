import React from 'react'

import '../style/pieChart.scss'

const PieChart = () => {
  return (
    <div className='circle-graph'>
      <svg width='300' height='300'>
        <circle r='120' cx='150' cy='150' />
        <circle className='circle2' r='120' cx='150' cy='150' />
        <circle className='circle3' r='120' cx='150' cy='150' />
        <circle className='circle4' r='95' cx='150' cy='150' />
      </svg>
    </div>
  )
}

export default PieChart

// if (!roles.includes(currentRole)) return
