import React from 'react'

import './HitsCard.scss'

const HitsCard = () => {
  return (
    <div className="hits-card">
      <div className="hits-card-image">
        <img
          src="https://jolybell.com/storage/3z7hyxd15u.webp?preview=&width=765&height=841&quality=100"
          alt=""
        />
      </div>
      <div className="btn-wrapper">
        <button className="hits-card-btn">
          <span>Подробнее</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0)">
              <path
                d="M19.7709 9.44699C19.7706 9.44675 19.7704 9.44648 19.7702 9.44624L15.688 5.38375C15.3821 5.07941 14.8875 5.08054 14.5831 5.3864C14.2787 5.69222 14.2799 6.18687 14.5857 6.49125L17.3265 9.21874H0.78125C0.349766 9.21874 0 9.56851 0 9.99999C0 10.4315 0.349766 10.7812 0.78125 10.7812H17.3264L14.5857 13.5087C14.2799 13.8131 14.2788 14.3078 14.5831 14.6136C14.8875 14.9195 15.3822 14.9205 15.688 14.6162L19.7702 10.5537C19.7704 10.5535 19.7706 10.5532 19.7709 10.553C20.0769 10.2476 20.0759 9.75136 19.7709 9.44699Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
      <div className="hits-card-item-name">Футболка Стандарт Black</div>
      <div className="hits-card-price">4099 RUB</div>
    </div>
  )
}

export default HitsCard