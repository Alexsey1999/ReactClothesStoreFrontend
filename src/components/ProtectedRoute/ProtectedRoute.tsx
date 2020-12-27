// Libs
import React, { FC } from 'react'
import {
  Route,
  Redirect,
  withRouter,
  RouteComponentProps,
} from 'react-router-dom'

// Components
import GoodsLayout from '../../layouts/GoodsLayout'

// Interfaces
interface IProtectedRouteProps extends RouteComponentProps {
  component: FC<RouteComponentProps>
  path: string
  isAuthenticated: {
    jwt?: string | null
    googleId?: string | null
    vkId?: string | null
  }
}

const ProtectedRoute: React.FC<IProtectedRouteProps> = (
  { component: Component, isAuthenticated, ...rest },
  props
) => {
  return (
    <Route
      {...rest}
      render={(props) => {
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
