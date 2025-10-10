import React from 'react'
import './featured.css'
const featured = () => {
  return (
    <div className='featured'>
        <div className="featuredItem">
            <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>London</h1>
                <h2>123 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=600&q=80" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>London</h1>
                <h2>123 properties</h2>
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&q=80" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>London</h1>
                <h2>123 properties</h2>
            </div>
        </div>
    </div>
  )
}

export default featured
