// @ts-nocheck
import React from 'react'
import { Route, Redirect, withRouter } from 'react-router-dom'
import GoodsLayout from '../../layouts/GoodsLayout'
import axios from '../../axios'

const ProtectedRoute = (
  { component: Component, isAuthenticated, logout, ...rest },
  props
) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        console.log(props)

        if (
          isAuthenticated.jwt ||
          isAuthenticated.googleId ||
          isAuthenticated.vkId
        ) {
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

export default withRouter(ProtectedRoute)
