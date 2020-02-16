import React from 'react'

import commentIcon from '../Images/commentIcon.svg'
import heartIcon from '../Images/heartIcon.svg'

const BannerComponent = () => {
  return (
    <div className='banner-style'>
      <header className='style'>
        <img
          className='media-style'
          src='http://placekitten.com/500/300'
          alt='routine-media'
        />
        <div className='video-info'>
          <div className='media-content-icons'>
            <img
              className='comment-icon'
              src={commentIcon}
              alt='comment icon'
            ></img>
            <img className='heart-icon' src={heartIcon} alt='heart icon'></img>
          </div>
          <header className='banner-info-style'>
            {/* title */} About The Creators <br></br>
            {/* Upload Date */}September 12. 2019
          </header>
        </div>
        {/* Insert Video Upload Date */}
        {/* Insert Video Title */}
      </header>
    </div>
  )
}

export default BannerComponent
