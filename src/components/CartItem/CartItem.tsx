import React from 'react'

import './CartItem.scss'

const CartItem = () => {
  return (
    <div className="cart-item">
      <div className="cart-item-content">
        <div className="cart-item-info">
          <div className="cart-item-img">
            <div className="cart-item-remove">
              <svg
                width="8"
                height="8"
                viewBox="0 0 8 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0)">
                  <path
                    d="M4.44172 4.00078L7.90823 0.534251C8.03028 0.412204 8.03028 0.214329 7.90823 0.092298C7.78618 -0.0297331 7.58831 -0.0297488 7.46628 0.092298L3.99975 3.55883L0.533243 0.092298C0.411197 -0.0297488 0.213322 -0.0297488 0.0912908 0.092298C-0.0307402 0.214345 -0.0307558 0.41222 0.0912908 0.534251L3.5578 4.00076L0.0912908 7.46729C-0.0307558 7.58934 -0.0307558 7.78722 0.0912908 7.90925C0.152306 7.97026 0.232291 8.00076 0.312275 8.00076C0.392259 8.00076 0.472228 7.97026 0.533259 7.90925L3.99975 4.44273L7.46626 7.90925C7.52728 7.97026 7.60726 8.00076 7.68725 8.00076C7.76723 8.00076 7.8472 7.97026 7.90823 7.90925C8.03028 7.7872 8.03028 7.58932 7.90823 7.46729L4.44172 4.00078Z"
                    fill="#9ca4ab"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="8" height="8" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <img
              src="https://jolybell.com/storage/211v3fbj7d.webp?preview=&width=765&height=985&quality=100"
              alt=""
            />
          </div>

          <div className="cart-item-descr">
            <div className="cart-item-name">Рубашка Black</div>
            <div className="cart-item-size">Размер:</div>
            <ul className="cart-item-size-list">
              <li className="active">XS</li>
              <li>S</li>
              <li>M</li>
              <li>L</li>
              <li>XL</li>
              <li>2XL</li>
              <li>3XL</li>
            </ul>
          </div>
        </div>
        <div className="cart-item-quantity-block">
          <h4>Количество:</h4>
          <div className="cart-item-quantity-calc">
            <svg
              height="8pt"
              viewBox="0 -192 469.33333 469"
              width="8pt"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m437.332031.167969h-405.332031c-17.664062 0-32 14.335937-32 32v21.332031c0 17.664062 14.335938 32 32 32h405.332031c17.664063 0 32-14.335938 32-32v-21.332031c0-17.664063-14.335937-32-32-32zm0 0" />
            </svg>
            <div className="cart-item-quantity">1</div>
            <svg
              height="8pt"
              viewBox="0 0 448 448"
              width="8pt"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m408 184h-136c-4.417969 0-8-3.582031-8-8v-136c0-22.089844-17.910156-40-40-40s-40 17.910156-40 40v136c0 4.417969-3.582031 8-8 8h-136c-22.089844 0-40 17.910156-40 40s17.910156 40 40 40h136c4.417969 0 8 3.582031 8 8v136c0 22.089844 17.910156 40 40 40s40-17.910156 40-40v-136c0-4.417969 3.582031-8 8-8h136c22.089844 0 40-17.910156 40-40s-17.910156-40-40-40zm0 0" />
            </svg>
          </div>
          <div className="cart-item-price">4099 RUB</div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
