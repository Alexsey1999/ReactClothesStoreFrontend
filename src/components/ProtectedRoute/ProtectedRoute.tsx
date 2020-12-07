// @ts-nocheck
import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import GoodsLayout from '../../layouts/GoodsLayout'

const ProtectedRoute = ({
  component: Component,
  isAuthenticated,
  logout,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthenticated) {
          return (
            <GoodsLayout>
              <Component {...props} />
            </GoodsLayout>
          )
        } else {
          return <Redirect to="/" />
        }
      }}
    ></Route>
  )
}

export default ProtectedRoute
